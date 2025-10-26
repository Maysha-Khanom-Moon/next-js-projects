export async function GET() {
    // direct response from API route
    // return new Response("Hello, Next.js API Route!");

    // response with JSON data
    return Response.json({ message: "Hello, Next.js API Route!" });
}