import { getdataFromToken } from "@/helpers/getDataFromToken";
import { NextRequest, NextResponse } from "next/server";
import User from "@/models/userModels";
import connect from "@/dbconfig/dbConfig";

connect();

export async function GET(request: NextRequest) {
  try {
    const userId = await getdataFromToken(request);
    const user=await User.findOne({ _id: userId }).select("-password");
    return NextResponse.json({message:"User found",data:user})
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
