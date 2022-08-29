import Head from 'next/head'

export default function Home() {
  return (
    <div className="px-8 mt-10">
      <Head>
        <title>Article Preview Component</title>
        
      </Head>
      <div className="mx-auto">
        <img className="rounded-tr-md rounded-tl-md h-48 w-full" src='/images/drawers.jpg' alt='' />
      </div>
      <div className="bg-white p-8 rounded-bl-md rounded-br-md">
          <h2 className='text-gray-700 font-semibold'>Shift the Overall look and feel by adding these wonderful touches to furniture in your home</h2>
          <p className='text-gray-600 text-sm mt-4'>Ever been in a room and felt like something was missing? Perhaps it felt slightly bare and uninviting. I've got some simple tips to help you make any room feel complete.</p>
          <div className="flex items-center mt-8">
             <div className="flex item-center">
                <img src="./images/avatar-michelle.jpg" alt="profile picture of user Michelle" />
             </div>
          </div>
      </div>
    </div>
  )
}
