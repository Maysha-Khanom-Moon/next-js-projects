export async function generateMetadata({ params }: { params: { id: string } }) {
    const { id } = params;
    const title = `Book ${id} Page`
    return {
        title: title,
    }
}

export default async function BookPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params
    const response = await fetch(`http://localhost:3000/api/books/${id}`)
    const books = await response.json()

    return (
        <div>
            <h1>{books.title}</h1>
            <p>{books.author}</p>
        </div>
    )
}   