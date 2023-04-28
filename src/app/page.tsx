import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className='flex justify-center p-5'>
      <div className='bg-teal-600 rounded-lg w-3/5 h-12 flex justify-center items-center'>
        <h1 className='text-zinc-300 text-xl font-semibold'>
          Click on the buttons below to access their respective challenges.
        </h1>
      </div>
    </main>
  )
}
