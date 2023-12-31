import { Book } from "../../Book.types";
import avatar1 from "../../assets/avatar1.svg";

const BookCard = ({ book }: { book: Book }) => {
  return (
    <div className="p-5 bg-primary border border-secondary relative z-50 transition-all group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-secondary/80 group-hover:translate-y-2">
      <img src={avatar1} alt="" className="w-12 h-12" />
      <h1>{book.author}</h1>
      <h1>{book.title}</h1>
      <p>{book.publishYear}</p>
    </div>
  );
};

export default BookCard;
