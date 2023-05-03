import ButtonLink from './components/ButtonLink';

export default function Home() {
  return (
    <main className='w-vw'>
      <article>
        <div>
          <h1 className='text-zinc-300 text-xl font-semibold -mt-14 text-center'>
            Click on the buttons below to access their respective challenges!
          </h1>
        </div>
      </article>
      <article className='flex flex-wrap justify-between items-center w-4/5 mx-auto'>

        <ButtonLink href="/challenge-01">01</ButtonLink>


      </article>
    </main>
  )
}
