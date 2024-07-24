import { AiOutlineClose } from 'react-icons/ai';
import { PiBookOpenTextLight } from 'react-icons/pi';
import { BiUserCircle } from 'react-icons/bi';
import { motion } from 'framer-motion';

const BookModal = ({ book, onClose }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className='fixed bg-black bg-opacity-60 top-0 left-0 right-0 bottom-0 z-50 flex justify-center items-center'
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.5, opacity: 0 }}
        transition={{ duration: 0.3 }}
        onClick={(event) => event.stopPropagation()}
        className='w-[600px] max-w-full h-[500px] bg-white rounded-2xl p-8 flex flex-col relative overflow-hidden shadow-2xl'
      >
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className='absolute right-6 top-6 text-3xl text-red-600 cursor-pointer'
          onClick={onClose}
        >
          <AiOutlineClose />
        </motion.button>
        
        <motion.div 
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <h2 className='inline-block px-4 py-2 bg-red-300 rounded-lg text-white font-semibold mb-4'>
            {book.publishYear}
          </h2>
          <h4 className='text-gray-500 text-sm mb-4'>{book._id}</h4>
        </motion.div>

        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className='mb-6'
        >
          <div className='flex items-center gap-x-2 mb-2'>
            <PiBookOpenTextLight className='text-red-400 text-2xl' />
            <h2 className='text-xl font-bold'>{book.title}</h2>
          </div>
          <div className='flex items-center gap-x-2'>
            <BiUserCircle className='text-red-400 text-2xl' />
            <h3 className='text-lg'>{book.author}</h3>
          </div>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className='flex-grow overflow-auto'
        >
          <h3 className='text-lg font-semibold mb-2'>About Book</h3>
          <p className='text-gray-600 leading-relaxed'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni quia
            voluptatum sint. Nisi impedit libero eveniet cum vitae qui expedita
            necessitatibus assumenda laboriosam, facilis iste cumque a pariatur
            nesciunt cupiditate voluptas? Quis atque earum voluptate dolor nisi
            dolorum est? Deserunt placeat cumque quo dicta architecto, dolore
            vitae voluptate sequi repellat!
          </p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default BookModal;