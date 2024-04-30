export default function Loading(msg) {
	// You can add any UI inside Loading, including a Skeleton.
	//  mt-[calc(10vh+5%)]
	return (
		<div className="fixed -top-0 w-screen h-screen bg-black bg-opacity-20 md:w-[calc(100vw-16rem)]">
			<div className="flex flex-col items-center mt-[40vh]">
				<p className="animate-pulse my-auto">{msg}, Please wait...</p>
				<img width={150} src="/loading.gif" alt="Loading..." />
			</div>
		</div>
	);
}
