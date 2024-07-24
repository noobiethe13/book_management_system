import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';
import { motion } from 'framer-motion';
import { FaBook, FaUser, FaCalendarAlt, FaClock } from 'react-icons/fa';

const ShowBook = () => {
  const [book, setBook] = useState({});
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:5555/books/${id}`)
      .then((response) => {
        setBook(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, [id]);

  const BookInfo = ({ icon, label, value }) => (
    <motion.div 
      className='flex items-center p-4 bg-white rounded-lg shadow-md'
      whileHover={{ scale: 1.03 }}
    >
      <div className='mr-4 text-blue-500'>{icon}</div>
      <div>
        <h3 className='text-sm font-semibold text-gray-600'>{label}</h3>
        <p className='text-lg font-medium text-gray-800'>{value}</p>
      </div>
    </motion.div>
  );

  return (
    <div className='max-w-3xl mx-auto p-4'>
      <BackButton />
      <h1 className='text-3xl font-bold text-center my-8 text-gray-800'>Book Details</h1>
      {loading ? (
        <div className='flex justify-center items-center h-64'>
          <Spinner />
        </div>
      ) : (
        <motion.div 
          className='grid grid-cols-1 md:grid-cols-2 gap-6'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <BookInfo icon={<FaBook size={24} />} label="Title" value={book.title} />
          <BookInfo icon={<FaUser size={24} />} label="Author" value={book.author} />
          <BookInfo icon={<FaCalendarAlt size={24} />} label="Publish Year" value={book.publishYear} />
          <BookInfo icon={<FaClock size={24} />} label="Last Updated" value={new Date(book.updatedAt).toLocaleString()} />
          <div className='md:col-span-2'>
            <BookInfo icon={<FaClock size={24} />} label="Created At" value={new Date(book.createdAt).toLocaleString()} />
          </div>
          <div className='md:col-span-2 p-4 bg-white rounded-lg shadow-md'>
            <h3 className='text-sm font-semibold text-gray-600 mb-2'>Book ID</h3>
            <p className='text-lg font-medium text-gray-800 break-all'>{book._id}</p>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default ShowBook;