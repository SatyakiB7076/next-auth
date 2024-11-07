import nodemailer from 'nodemailer';
import User from "@/models/userModels";
import bcryptjs from "bcryptjs";

export const sendEmail = async ({ email, emailType, userId }: any) => {
  try {
    const hashedtoken = await bcryptjs.hash(userId.toString(), 10);
    if(emailType==="VERIFY"){

      await User.findByIdAndUpdate(
        userId,
        {
          verifyToken: hashedtoken,
          verifyTokenExpiry: Date.now() + 3600000,
        }
      );
    }else if (emailType==="RESET"){
      await User.findByIdAndUpdate(
        userId,
        {
          forgotPasswordToken: hashedtoken,
          forgotPasswordTokenExpiry: Date.now() + 3600000,
        }
      );
    }
    const transporter = nodemailer.createTransport({
      host: "sandbox.smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "c2eb20567b3ed8",
    pass: "********52e9"
  }
});
const mailOptions = {
  from: 'satyaki@gmail.com',
  to: email,
  subject: emailType==="VERIFY"?"Verify your email": "Reset your password",
  html:  `<p>Click on this link to verify your email: <a href="${process.env.domain}/verrifyemail?token=${hashedtoken}">here</a>
to }

  } catch (error: any) {
    throw new Error(error.message);
  }
};
