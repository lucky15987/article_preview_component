import Head from 'next/head'

export default function Home() {
  return (
    <div className="px-8 mt-10">
      <Head>
        <title>Article Preview Component</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="mx-auto">
        <img className="rounded-tr-md rounded-tl-md h-48 w-full" src='/images/drawers.jpg' alt='' />
      </div>
    </div>
  )
}
