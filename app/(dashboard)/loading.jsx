export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <div className="grid place-items-center mt-32">
      <p className="animate-pulse">It is Loading...</p>
      <img src="/loading.svg" alt="Loading..." />
    </div>
  );
}
