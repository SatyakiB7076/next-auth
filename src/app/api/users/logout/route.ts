//login works by clearing the token
//and then redirecting to the login page

import {NextResponse} from 'next/server';
// import toast from 'react-hot-toast';

export async function GET() {
    try {
        const response =await NextResponse.json({
            message: "Logged out successfully",
            success:true,
        })
        response.cookies.set("token","",{httpOnly:true});
        return response;

    } catch (error: any) {
        return  NextResponse.json({error: error.message}, {status: 500});

    }
}
