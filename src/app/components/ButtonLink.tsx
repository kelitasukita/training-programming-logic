import Link from 'next/link';

export default function ButtonLink({ href, children }) {

  return (
    <Link className='mt-14 mr-4' href={href}>
      <button className='border border-teal-600 border-solid px-10 py-2 rounded-xl bg-zinc-400 text-zinc-300 
      font-bold '>
        {children}
      </button>
    </Link>

  )
}