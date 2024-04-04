export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <div className="grid place-items-center mt-32">
      <p className="animate-pulse">
        <svg class="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24"></svg>
        Loading, Please wait...
      </p>
      <img src="/loading.svg" alt="Loading..." />
    </div>
  );
}
