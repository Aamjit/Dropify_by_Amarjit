export default function Loading(msg) {
	// You can add any UI inside Loading, including a Skeleton.
	//  mt-[calc(10vh+5%)]
	return (
		<div className="absolute w-full md:w-[calc(100%-16rem)] z-10 mt-[calc(8rem+4%)]">
			<div className="my-auto flex flex-col items-center">
				<p className="animate-pulse my-auto">{msg}, Please wait...</p>
				<img width={150} src="/loading.gif" alt="Loading..." />
			</div>
		</div>
	);
}
