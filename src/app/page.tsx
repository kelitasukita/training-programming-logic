import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className='flex justify-center items-center mt-8'>
      <div className='bg-teal-600 rounded-lg w-3/5 px-7 py-6'>
        <h1 className='text-zinc-300 text-xl font-semibold text-center'>
          Click on the buttons below to access their respective challenges!
        </h1>
      </div>

    </main>
  )
}
