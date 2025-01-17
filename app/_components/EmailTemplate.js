import {
	Body,
	Button,
	Container,
	Head,
	Hr,
	Html,
	Img,
	Link,
	Preview,
	Section,
	Text,
} from "@react-email/components";
import * as React from "react";

const publicLogo = process.env.NEXT_PUBLIC_PUBLIC_LOGO;

export const EmailTemplate = (reqData) => (
	<Html>
		<Head />
		<Preview>You have received a file from Dropify</Preview>
		<Body style={main}>
			<Container style={container}>
				<Img
					src={`${publicLogo}`}
					width="170"
					height="150"
					alt="Dropify"
					style={logo}
				/>
				<Text style={paragraph}>
					Hi {reqData?.targetEmail.split("@")[0]},
				</Text>
				<Text style={paragraph}>Welcome to Dropify,</Text>
				<Text style={paragraph}>
					This mail is to notify you that{" "}
					<strong style={highlight}>{reqData?.userName}</strong> on{" "}
					<Link
						style={highlight}
						href="https://dropify-by-amarjit.vercel.app/"
						target="#"
					>
						Dropify
					</Link>{" "}
					has shared a file with you.
				</Text>
				<Text style={paragraph}>
					You can send back an email{" "}
					<Link href={`mailto:${reqData?.senderEmail}`}>here</Link> to
					let him/her know that you have received it.
				</Text>

				{/* <Hr style={hr} /> */}
				<Section style={fileDesc}>
					<Text style={paragraph}>
						<b>File Name:</b> {`${reqData.fileName}`}
					</Text>
					<Text style={paragraph}>
						<b>File Type:</b> {`${reqData.fileType}`}
					</Text>
					<Text style={paragraph}>
						<b>File Size:</b> {`${reqData.fileSize}`}
					</Text>
				</Section>
				{/* <Hr style={hr} /> */}

				<Section style={btnContainer}>
					<Button style={button} href={`${reqData?.shortUrl}`}>
						Click to View file
					</Button>
				</Section>
				<Text style={paragraph}>
					Best Regards,
					<br />
					Dropify
				</Text>
				<Text>
					<Link
						style={{ fontSize: "12px" }}
						href="https://dropify-by-amarjit.vercel.app/"
					>
						Dropify
					</Link>{" "}
					|{" "}
					<Link
						style={{ fontSize: "12px" }}
						href="https://dropify-by-amarjit.vercel.app/sign-up"
					>
						Sign Up
					</Link>
				</Text>
				<Hr style={hr} />
				<Text style={footer}>© Dropify 2024. All rights reserved.</Text>
			</Container>
		</Body>
	</Html>
);

// export const

export default { EmailTemplate };

const main = {
	backgroundColor: "#ffffff",
	fontFamily:
		'-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
	margin: "0 auto",
	padding: "20px 0 48px",
};

const logo = {
	margin: "0 auto",
};

const paragraph = {
	fontSize: "16px",
	lineHeight: "26px",
};

const fileDesc = {
	borderColor: "#cccccc",
	borderWidth: "1px",
	borderStyle: "solid",
	padding: "1rem",
	margin: "2rem 0 2rem 0",
};

const highlight = {
	fontSize: "18px",
	lineHeight: "26px",
	fontWeight: "semi-bold",
	color: "#007dfc",
};

const btnContainer = {
	textAlign: "center",
};

const button = {
	backgroundColor: "#5F51E8",
	borderRadius: "3px",
	color: "#fff",
	fontSize: "16px",
	textDecoration: "none",
	textAlign: "center",
	display: "block",
	padding: "12px",
};

const hr = {
	borderColor: "#cccccc",
	margin: "20px 0",
};

const footer = {
	color: "#8898aa",
	fontSize: "12px",
};
