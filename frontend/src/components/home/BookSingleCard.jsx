import { Link } from 'react-router-dom';
import { PiBookOpenTextLight } from 'react-icons/pi';
import { BiUserCircle, BiShow } from 'react-icons/bi';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineDelete } from 'react-icons/md';
import { useState } from 'react';
import { motion } from 'framer-motion';
import BookModal from './BookModal';

const BookSingleCard = ({ book }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <motion.div 
      className='bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl'
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className='p-6 relative'>
        <motion.div
          className='absolute top-4 right-4 px-3 py-1 bg-red-400 text-white rounded-full text-sm font-semibold'
          whileHover={{ scale: 1.05 }}
        >
          {book.publishYear}
        </motion.div>
        <h4 className='text-gray-500 text-xs mb-2'>{book._id}</h4>
        <div className='flex items-center gap-x-2 mb-2'>
          <PiBookOpenTextLight className='text-red-400 text-2xl' />
          <h2 className='text-xl font-semibold text-gray-800'>{book.title}</h2>
        </div>
        <div className='flex items-center gap-x-2 mb-4'>
          <BiUserCircle className='text-red-400 text-2xl' />
          <h3 className='text-lg text-gray-600'>{book.author}</h3>
        </div>
      </div>
      <div className='bg-gray-50 px-6 py-4 flex justify-between items-center'>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className='text-blue-600 hover:text-blue-800'
          onClick={() => setShowModal(true)}
        >
          <BiShow className='text-2xl' />
        </motion.button>
        <Link to={`/books/details/${book._id}`}>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className='text-green-600 hover:text-green-800'
          >
            <BsInfoCircle className='text-xl' />
          </motion.button>
        </Link>
        <Link to={`/books/edit/${book._id}`}>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className='text-yellow-600 hover:text-yellow-800'
          >
            <AiOutlineEdit className='text-xl' />
          </motion.button>
        </Link>
        <Link to={`/books/delete/${book._id}`}>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className='text-red-600 hover:text-red-800'
          >
            <MdOutlineDelete className='text-xl' />
          </motion.button>
        </Link>
      </div>
      {showModal && (
        <BookModal book={book} onClose={() => setShowModal(false)} />
      )}
    </motion.div>
  );
};

export default BookSingleCard;