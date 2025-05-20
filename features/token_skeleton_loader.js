export default function TokenSkeletonLoader() {
  return (
    <div className="p-4 space-y-4 animate-pulse">
      {[...Array(3)].map((_, idx) => (
        <div key={idx} className="border rounded-lg p-4 bg-white dark:bg-gray-800 shadow">
          <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-1/2 mb-2"></div>
          <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-1/3 mb-2"></div>
          <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-1/4"></div>
        </div>
      ))}
    </div>
  );
}
