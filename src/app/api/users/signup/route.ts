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
  } catch (error: any) {
    return NextResponse.json(
      {
        error: error.message,
      },
      { status: 500 }
    );
  }
}
