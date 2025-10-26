import books from "../db";
import { NextResponse as Response } from "next/server";

export async function GET() {
  return Response.json(books);
}

export async function POST(request: Request) {
    const book = await request.json();
    books.push(book);

    return Response.json(books);
}