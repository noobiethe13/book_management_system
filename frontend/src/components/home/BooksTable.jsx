import { Link } from 'react-router-dom';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineDelete } from 'react-icons/md';
import { motion } from 'framer-motion';

const BooksTable = ({ books }) => {
  return (
    <div className="overflow-x-auto shadow-md rounded-lg">
      <table className='w-full text-sm text-left text-gray-500'>
        <thead className='text-xs text-gray-700 uppercase bg-gray-50'>
          <tr>
            <th scope="col" className='px-6 py-3'>No</th>
            <th scope="col" className='px-6 py-3'>Title</th>
            <th scope="col" className='px-6 py-3 max-md:hidden'>Author</th>
            <th scope="col" className='px-6 py-3 max-md:hidden'>Publish Year</th>
            <th scope="col" className='px-6 py-3'>Operations</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book, index) => (
            <motion.tr 
              key={book._id} 
              className='bg-white border-b hover:bg-gray-50'
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <td className='px-6 py-4'>{index + 1}</td>
              <td className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap'>
                {book.title}
              </td>
              <td className='px-6 py-4 max-md:hidden'>{book.author}</td>
              <td className='px-6 py-4 max-md:hidden'>{book.publishYear}</td>
              <td className='px-6 py-4'>
                <div className='flex items-center gap-x-4'>
                  <Link to={`/books/details/${book._id}`}>
                    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                      <BsInfoCircle className='text-xl text-green-600 hover:text-green-800' />
                    </motion.div>
                  </Link>
                  <Link to={`/books/edit/${book._id}`}>
                    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                      <AiOutlineEdit className='text-xl text-yellow-600 hover:text-yellow-800' />
                    </motion.div>
                  </Link>
                  <Link to={`/books/delete/${book._id}`}>
                    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                      <MdOutlineDelete className='text-xl text-red-600 hover:text-red-800' />
                    </motion.div>
                  </Link>
                </div>
              </td>
            </motion.tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BooksTable;