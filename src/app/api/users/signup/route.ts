import connect from "@/dbconfig/dbConfig";
import User from "@/models/userModels";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";

connect();

// export async function  GET(request: NextRequest) {

// }
export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const { username, email, password } = reqBody;
    const user = await User.findOne({ email });
    if (user) {
      return NextResponse.json(
        {
          error: "User already exists",
        },
        { status: 400 }
      );
    }
    const salt=await bcryptjs.getSalt(10)
    const  hashedPassword = await bcryptjs.hash(password, salt);
    

  } catch (error: any) {
    return NextResponse.json(
      {
        error: error.message,
      },
      { status: 500 }
    );

  }
}
