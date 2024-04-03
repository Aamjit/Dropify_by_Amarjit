import React from "react";
import Header from "../_components/Header"
import AboutIntro from "./_components/AboutIntro"
import AboutWhy from "./_components/AboutWhy"

function About() {
  return (
    <div className="bg-gray-900 text-white m-auto h-full min-h-screen">
      <Header />
      <div className=" flex flex-col gap-4 py-8 px-8 items-center">
<AboutIntro />

<>
<AboutWhy />

</>
{/* <> */}
{/* How It Works

Upload: Upload your files with ease. Simply drag and drop or select files from your device.

Share: Share your files instantly with friends, colleagues, or anyone else with a unique link or email invitation.

Collaborate: Collaborate in real-time by commenting on files, editing documents together, or discussing ideas via built-in messaging.

Access Anywhere: Access your files anytime, anywhere. With cloud storage integration, your files are always within reach.

</>
<>
Get Started Today

Ready to experience the future of file sharing? Sign up for free and join thousands of users who trust Dropify for their file-sharing needs.

Whether it's for work, study, or personal use, Dropify simplifies the way you share files online. Try it now and see the difference for yourself!

Get ready to revolutionize the way you share files online with Dropify. Sign up now and experience seamless, secure, and lightning-fast file transfers like never before.
        

</> */}
      </div>
    </div>
  );
}

export default About;
