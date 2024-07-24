import { useEffect, useState } from 'react';
import axios from 'axios';
import Spinner from '../components/Spinner';
import { Link } from 'react-router-dom';
import { MdOutlineAddBox } from 'react-icons/md';
import { FaTable, FaThLarge } from 'react-icons/fa';
import BooksTable from '../components/home/BooksTable';
import BooksCard from '../components/home/BooksCard';
import { motion } from 'framer-motion';

const Home = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showType, setShowType] = useState('table');

  useEffect(() => {
    setLoading(true);
    axios
      .get('http://localhost:5555/books')
      .then((response) => {
        setBooks(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  return (
    <motion.div 
      className='max-w-6xl mx-auto p-4'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className='flex justify-between items-center mb-8'>
        <h1 className='text-3xl font-bold text-gray-800'>Books Collection</h1>
        <Link to='/books/create'>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className='bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full flex items-center'
          >
            <MdOutlineAddBox className='mr-2' />
            Add Book
          </motion.button>
        </Link>
      </div>

      <div className='bg-white shadow-md rounded-lg p-6 mb-8'>
        <div className='flex justify-center items-center gap-x-4 mb-6'>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`flex items-center px-4 py-2 rounded-lg ${
              showType === 'table' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'
            }`}
            onClick={() => setShowType('table')}
          >
            <FaTable className='mr-2' />
            Table
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`flex items-center px-4 py-2 rounded-lg ${
              showType === 'card' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'
            }`}
            onClick={() => setShowType('card')}
          >
            <FaThLarge className='mr-2' />
            Card
          </motion.button>
        </div>

        {loading ? (
          <div className='flex justify-center items-center h-64'>
            <Spinner />
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {showType === 'table' ? (
              <BooksTable books={books} />
            ) : (
              <BooksCard books={books} />
            )}
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default Home;