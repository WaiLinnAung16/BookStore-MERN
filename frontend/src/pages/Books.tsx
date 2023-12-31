import axios from "axios";
import { useEffect, useState } from "react";
import BookCard from "../components/ui/BookCard";
import { Book } from "../Book.types.ts";

const Books = () => {
  const [books, setBooks] = useState<Book[]>();

  const getBooks = async () => {
    const response: Book[] = await axios
      .get("http://localhost:5555/books")
      .then((res) => res?.data?.data)
      .catch((error) => console.error(error));
    setBooks(response);
    console.log(books)
  };

  useEffect(() => {
    getBooks();
  }, []);

  return (
    <div className="w-[87%] p-5">
      <div className="grid grid-cols-12 gap-8">
        {books?.map((book) => (
          <div key={book._id} className="col-span-3 relative group cursor-pointer">
            <BookCard book={book} />
            {/* Border stacks */}
            <div className="z-30  top-1 -right-1 stack"></div>
            <div className="z-20 top-2 -right-2 stack"></div>
            <div className="z-10 top-3 -right-3 stack"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Books;
