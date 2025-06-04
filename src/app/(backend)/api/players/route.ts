import { NextResponse } from "next/server";
import { prisma } from "../../../../../lib/prisma";

export async function GET(request: Request){
    const players = await prisma.player.findMany();
    return NextResponse.json(players);
}