import { NextResponse } from "next/server";
import books from "@/app/api/db";

export async function GET(
  request: Request,
  context: { params: { id: string } }
) {
  const id = parseInt(context.params.id, 10);
  const book = books.find((b) => b.id === id);

  if (!book) {
    return NextResponse.json({ error: "Book not found" }, { status: 404 });
  }

  return NextResponse.json(book);
}

export async function PUT(
  request: Request,
  context: { params: { id: string } }
) {
  const id = parseInt(context.params.id, 10);
  const updatedBook = await request.json();

  const index = books.findIndex((b) => b.id === id);
  if (index === -1) {
    return NextResponse.json({ error: "Book not found" }, { status: 404 });
  }

  books[index] = updatedBook;
  return NextResponse.json(books);
}

export async function DELETE(
  request: Request,
  context: { params: { id: string } }
) {
  const id = parseInt(context.params.id, 10);
  const index = books.findIndex((b) => b.id === id);

  if (index === -1) {
    return NextResponse.json({ error: "Book not found" }, { status: 404 });
  }

  books.splice(index, 1);
  return NextResponse.json(books);
}
