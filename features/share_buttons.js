export default function ShareButtons({ presale }) {
  const shareUrl = `https://bittking.com/presale/${presale?.slug || 'default'}`;
  const message = `Check out this presale on BittKing: ${shareUrl}`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(message);
    alert('Link copied to clipboard!');
  };

  return (
    <div className="flex space-x-4 mt-4">
      <a
        href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(message)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="px-4 py-2 bg-blue-500 text-white rounded"
      >
        Share on X
      </a>
      <a
        href={`https://t.me/share/url?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(message)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="px-4 py-2 bg-blue-600 text-white rounded"
      >
        Share on Telegram
      </a>
      <button onClick={copyToClipboard} className="px-4 py-2 bg-gray-500 text-white rounded">
        Copy Link
      </button>
    </div>
  );
}
