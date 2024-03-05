import { NextResponse } from "next/server"

export async function GET() {
  // return new Response("message")
  return NextResponse.json({
    message: "hello"
  })
}