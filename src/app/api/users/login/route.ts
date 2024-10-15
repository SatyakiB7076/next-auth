import connect from "@/dbconfig/dbConfig";
import User from "@/models/userModels";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

connect();

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const { email, password } = reqBody;
    console.log(reqBody);

    //verification  of email
    const user = await User.findOne({ email });
    if (!user) {
      return NextResponse.json("User not found", { status: 404 });
    }
    //validating the password from database using bcryptjs
    const isValidPassword = await bcryptjs.compare(password, user.password);
    if (!isValidPassword) {
      return NextResponse.json("Invalid password", { status: 400 });
    }

    //token data as payload creation
    const tokenData = {
      email: user.email,
      id: user._id,
      username: user.username,
    };
    //actual token creation
    const token = jwt.sign(tokenData, process.env.TOKEN_SECRET!, {
      expiresIn: "5h",
    });
    const response = NextResponse.json({
      success: true,
      message: "User logged in successfully",
    });
    response.cookies.set("token", token, {
      httpOnly: true,
    });
    return response;
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
