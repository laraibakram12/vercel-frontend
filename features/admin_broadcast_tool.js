import { useState } from 'react';
import { db } from '../firebase/firebaseConfig';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

export default function AdminBroadcastTool() {
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');

  const sendAlert = async () => {
    if (!message) return;
    try {
      await addDoc(collection(db, 'alerts'), {
        message,
        timestamp: serverTimestamp(),
        active: true
      });
      setStatus('Broadcast sent!');
      setMessage('');
    } catch (err) {
      setStatus('Failed to send alert.');
    }
  };

  return (
    <div className="p-4 border rounded bg-red-50 dark:bg-red-900">
      <h3 className="font-semibold mb-2">Admin Broadcast Tool</h3>
      <textarea
        className="w-full p-2 border rounded mb-2"
        rows={3}
        placeholder="Enter alert message..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button
        onClick={sendAlert}
        className="px-4 py-2 bg-red-600 text-white rounded"
      >
        Send Alert
      </button>
      {status && <p className="text-sm mt-2">{status}</p>}
    </div>
  );
}
