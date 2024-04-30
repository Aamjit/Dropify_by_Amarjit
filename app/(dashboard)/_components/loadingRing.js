export default function LoadingRing(msg) {
	// You can add any UI inside Loading, including a Skeleton.
	//  mt-[calc(10vh+5%)]
	return (
		<div
			className="fixed text-center w-screen md:w-[calc(100%-16rem)] -top-0
        h-screen z-20 mx-auto text-xl text-primary font-semibold
         bg-black bg-opacity-20"
		>
			<div className="relative animate-pulse mt-[45vh]">
				{" "}
				<img
					src="/loading-ring.gif"
					width={80}
					alt="Loading"
					className=" mx-auto"
				/>
				{msg}
			</div>
		</div>
	);
}
