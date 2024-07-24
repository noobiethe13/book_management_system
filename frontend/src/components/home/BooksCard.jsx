import { motion } from 'framer-motion';
import BookSingleCard from './BookSingleCard';

const BooksCard = ({ books, isLoading, error }) => {
  if (isLoading) {
    return <div className="text-center py-10">Loading books...</div>;
  }

  if (error) {
    return <div className="text-center py-10 text-red-500">Error: {error}</div>;
  }

  if (books.length === 0) {
    return <div className="text-center py-10">No books found.</div>;
  }

  return (
    <motion.div 
      className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {books.map((item, index) => (
        <motion.div
          key={item._id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
        >
          <BookSingleCard book={item} />
        </motion.div>
      ))}
    </motion.div>
  );
};

export default BooksCard;