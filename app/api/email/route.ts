import { Resend } from "resend";
import { EmailTemplate } from "../../_components/EmailTemplate";

const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);

export async function POST(req) {
	const reqData = await req?.json();
	try {
		const data = await resend.emails.send({
			from: "Dropify<Dropify_1@resend.dev>",
			to: [reqData.targetEmail],
			subject: `Dropify | ${reqData?.UserfullName} shared a file with you`,
			react: EmailTemplate(reqData),
		});

		return Response.json(data);
	} catch (error) {
		return Response.json(error);
	}
}
