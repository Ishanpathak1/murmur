const { onSchedule } = require("firebase-functions/v2/scheduler");
const { initializeApp } = require("firebase-admin/app");
const { getFirestore, Timestamp } = require("firebase-admin/firestore");

initializeApp();
const db = getFirestore();

exports.scheduledDeleteExpiredReplies = onSchedule("every 24 hours", async () => {
  const now = Timestamp.now();
  const sevenDaysAgo = Timestamp.fromMillis(
    now.toMillis() - 7 * 24 * 60 * 60 * 1000
  );

  const expiredReplies = await db
    .collection("replies")
    .where("readAt", "<=", sevenDaysAgo)
    .get();

  const batch = db.batch();

  for (const replyDoc of expiredReplies.docs) {
    const reply = replyDoc.data();
    const replyRef = replyDoc.ref;

    // Find and delete linked message
    const msgQuery = await db
      .collection("messages")
      .where("replyId", "==", replyDoc.id)
      .limit(1)
      .get();

    if (!msgQuery.empty) {
      batch.delete(msgQuery.docs[0].ref);
    }

    batch.delete(replyRef);
  }

  await batch.commit();
  console.log(`✅ Deleted ${expiredReplies.size} expired replies and messages.`);
});

