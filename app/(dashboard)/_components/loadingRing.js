export default function LoadingRing(msg) {
	// You can add any UI inside Loading, including a Skeleton.
	//  mt-[calc(10vh+5%)]
	return (
		<div
			className="absolute text-center w-screen md:w-[calc(100%-16rem)] 
        h-[calc(100%-12%)] z-20 mx-auto text-xl text-primary font-semibold
         bg-black bg-opacity-20"
		>
			<div className="relative animate-pulse top-40">
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
