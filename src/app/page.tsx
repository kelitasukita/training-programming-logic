import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className='justify-center items-center'>
      <div className='bg-teal-600 rounded-lg w-3/5 h-12 flex justify-center items-center'>
        <h1 className='text-zinc-300 text-xl font-semibold'>
          Click on the buttons below to access their respective challenges!
        </h1>
      </div>
      <article className='mt-8'>
        <button className='border border-teal-600 border-solid px-10 py-2 rounded-xl bg-zinc-400 text-zinc-300 font-bold '>01</button>
      </article>
    </main>
  )
}
