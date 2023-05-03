import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <article>
        <div className='bg-teal-600 px-7 py-6'>
          <h1 className='text-zinc-300 text-xl font-semibold text-center'>
            Click on the buttons below to access their respective challenges!
          </h1>
        </div>
      </article>
    </main>
  )
}
