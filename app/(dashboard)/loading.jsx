export default function Loading(msg) {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <div className="h-full w-full mt-[calc(10vh+5%)]">
      <div className="my-auto flex flex-col items-center">
        <p className="animate-pulse my-auto">{msg}, Please wait...</p>
        <img src="/loading.svg" alt="Loading..." />
      </div>
    </div>
  );
}
