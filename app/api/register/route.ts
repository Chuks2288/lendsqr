import { NextResponse } from "next/server";

import { db } from "@/lib/db";

import bcrypt from "bcryptjs";

export async function POST(
    req: Request
) {
    try {
        const { email, password, name } = await req.json();

        const existingUser = await db.user.findUnique({
            where: {
                email,
            }
        });

        if (existingUser) {
            return new NextResponse("Email Already Exist", { status: 422 });
        }

        const hashedPassword = await bcrypt.hash(password, 12);

        const register = await db.user.create({
            data: {
                name,
                email,
                hashedPassword
            }
        });

        return NextResponse.json(register);
    } catch (error) {
        console.log("[REGISTER POST]", error);
        return new NextResponse("Internal Error", { status: 500 });
    }
}