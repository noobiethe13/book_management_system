import { useState } from 'react';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { useSnackbar } from 'notistack';
import { motion } from 'framer-motion';

const DeleteBook = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const { enqueueSnackbar } = useSnackbar();

  const handleDeleteBook = () => {
    setLoading(true);
    axios
      .delete(`http://localhost:5555/books/${id}`)
      .then(() => {
        setLoading(false);
        enqueueSnackbar('Book Deleted successfully', { variant: 'success' });
        navigate('/');
      })
      .catch((error) => {
        setLoading(false);
        enqueueSnackbar('Error deleting book', { variant: 'error' });
        console.log(error);
      });
  };
  
  return (
    <div className='max-w-3xl mx-auto p-4'>
      <BackButton />
      <h1 className='text-3xl font-bold text-center my-8 text-gray-800'>Delete Book</h1>
      {loading && <Spinner />}
      <motion.div 
        className='bg-white shadow-lg rounded-lg overflow-hidden'
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className='p-8'>
          <h3 className='text-2xl font-semibold text-center mb-6 text-gray-700'>
            Are you sure you want to delete this book?
          </h3>
          <div className='flex justify-center space-x-4'>
            <motion.button
              className='px-6 py-3 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 transition duration-300'
              onClick={handleDeleteBook}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Yes, Delete it
            </motion.button>
            <motion.button
              className='px-6 py-3 bg-gray-300 text-gray-800 rounded-lg font-semibold hover:bg-gray-400 transition duration-300'
              onClick={() => navigate('/')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Cancel
            </motion.button>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default DeleteBook;