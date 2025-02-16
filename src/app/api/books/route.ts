import type { NextApiRequest, NextApiResponse } from 'next'

const books = [
    {
        name: "To Kill a Mockingbird",
        pages: 281,
        title: "Harper Lee",
        price: 12.99,
    },
    {
        name: "The Catcher in the Rye",
        pages: 224,
        title: "J.D. Salinger",
        price: 9.99,
    },
    {
        name: "The Little Prince",
        pages: 85,
        title: "Antoine de Saint-Exupéry",
        price: 7.99,
    }
]
 
export async function GET() {
  return new Response(JSON.stringify(books), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}