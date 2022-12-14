import Head from 'next/head'
import { FaShare } from 'react-icons/fa'
import SideBar from './components/sidebar'

export default function Home() {
  return (
    <div className="px-8 mt-10 ">
      <Head>
        <title>Article Preview Component</title>
      </Head>
      <div className="mx-auto lg:w-3/5 lg:h-auto lg:flex lg:flex-row ">
        <img className="rounded-tr-md rounded-tl-md h-48 w-full lg:h-auto lg:w-2/5 lg:rounded-br-md lg:rounded-tr-none " src='/images/drawers.jpg' alt='' />
        <div className="bg-white p-8 rounded-bl-md rounded-br-md lg:rounded-bl-none lg:rounded-tr-md">
          <h2 className='text-gray-700 font-semibold'>Shift the Overall look and feel by adding these wonderful touches to furniture in your home</h2>
          <p className='text-gray-600 text-sm mt-4'>Ever been in a room and felt like something was missing? Perhaps it felt slightly bare and uninviting. I've got some simple tips to help you make any room feel complete.</p>
          <div className="flex items-center mt-8">
            <div className="flex item-center">
              <img className='h-10 w-10 rounded-full cursor-pointer' src="./images/avatar-michelle.jpg" alt="profile picture of user Michelle" />
              <div className="ml-4">
                <p className='text-gray-800 text-sm font-semibold'>Michelle Appleton</p>
                <p className='text-gray-600 text-sm'>28 Jun 2020</p>
              </div>
            </div>
            <button href="#" className="w-8 h-8 ml-auto bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300">              
              <FaShare color='gray' size={18} />              
               
            </button>            
          </div>
        </div>
      </div>

    </div>
  )
}
