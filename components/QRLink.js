import { QRCode } from 'qrcode.react';

export default function QRLink({ userId }) {
  const link = `https://murmur.vercel.app/?id=${userId}`;

  return (
    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg mt-6 text-center">
      <p className="mb-2 text-sm">Scan this QR code on your phone to access your Murmur account:</p>
      <QRCode value={link} size={160} />
      <p className="mt-2 text-xs text-gray-500 break-all">{link}</p>
    </div>
  );
}
