import Locations from "@/components/OurLocations";
import TestimonialSlider from "@/components/WhatCriticsSay";
import { notFound } from "next/navigation";

// Sample books data (Modify as needed)
const books = [
  {
    title: "International Trade and Carriage of Goods by Sea",
    images: ["/mfon-usoro-book-cover.webp", "/mfon-usoro-book-cover.webp"],
    category: "book",
    slug: "international-trade-carriage",
    description: `This book explores the critical role of maritime transport in global trade and supply chain management. It covers key topics such as shipping contracts, insurance policies, customs regulations, and legal aspects of carriage by sea. With case studies and real-world applications, it sheds light on the challenges and opportunities shaping the future of maritime logistics.`,
    fullDescription: `Maintaining the availability of shipment and transportation services and laws that provide guidance for the financing of international trade is an important aspect of global business. The book highlights various laws and regulations related to shipping, ensuring smooth transactions, and mitigating risks in international trade.

    Adaptability of merchants to the ever-evolving laws and policies governing the industry is key. This book serves as a guide, offering practical insights and expert analysis to help businesses navigate the complexities of trade regulations and maritime logistics. 

    Covering everything from supply chain security to dispute resolution, this book is an invaluable resource for professionals and academics involved in international trade. By addressing real-world challenges and providing solutions, it ensures that businesses can operate efficiently while staying compliant with industry standards.`,
  },
];

// Get book details based on the slug
const getBookBySlug = (slug) => books.find((book) => book.slug === slug);

const BookPage = ({ params }) => {
  const book = getBookBySlug(params.slug);

  if (!book) {
    return notFound(); // Show 404 page if book is not found
  }

  return (
    <main className="min-h-screen mt-[64px] px-6 md:px-16 py-12 bg-[#FEFBF6]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Book Cover */}
        <div className="relative max-w-md mx-auto">
          <img
            src={book.images[0]}
            alt={book.title}
            className="rounded-lg shadow-md w-full"
          />
        </div>

        {/* Book Details */}
        <div className="text-[#1B1816]">
          <h1 className="text-4xl font-semibold">
            International Trade and Carriage of Goods by Sea
          </h1>
          <p className="mt-4 text-lg text-gray-700">{book.description}</p>

          {/* Pre-Order Button */}
          <button className="bg-[#FFD4A3] text-[#5C3100] text-[14px] font-semibold leading-[128%] px-[24px] py-[32px] mt-8 hover:shadow-lg transition-all">
            PRE ORDER NOW
            </button>
        </div>
      </div>

      {/* Book Description & Back Cover */}
      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* Full Book Description */}
        <div>
          <p className="text-gray-700 leading-relaxed whitespace-pre-line">
            {book.fullDescription}
          </p>
        </div>

        {/* Book Back Cover */}
        <div className="relative max-w-md mx-auto">
          <img
            src={book.images[1]}
            alt="Book Back Cover"
            className="rounded-lg shadow-md w-full"
          />
        </div>
      </div>
        <TestimonialSlider />
        <Locations />
    </main>
  );
};

export default BookPage;
