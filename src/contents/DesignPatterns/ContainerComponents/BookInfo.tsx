
interface Book {
    name: string;
    pages: number;
    title: string;
    price: number;
}

interface BookInfoProps {
  book: Book;
}


const BookInfo = ({ book }: BookInfoProps) => {
    const { name, price, title, pages } = book || {};
  
    return book ? (
      <>
        <h3>{name}</h3>
        <p>{price}</p>
        <h3>Title: {title}</h3>
        <p>Number of Pages: {pages}</p>
      </>
    ) : (
      <h1>Loading</h1>
    );
};
  
export default BookInfo;