export async function POST(req) {
	const reqData = await req?.json();
	try {
	} catch (error) {
		return Response.json(error);
	}
}
