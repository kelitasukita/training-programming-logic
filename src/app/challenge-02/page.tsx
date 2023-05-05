'use client';

import { useState } from 'react';

import ButtonLink from '../components/ButtonLink';

export default function Challenge02() {
  const [valor01, setValor01] = useState();
  const [valor02, setValor02] = useState();
  const [valor03, setValor03] = useState();

  const compareValores = () => {
    if (valor01 > valor02 && valor01 > valor03) {
      return "O primeiro valor é o maior de todos"
    } else if (valor02 > valor01 && valor02 > valor03) {
      return "O segundo valor é o maior de todos"
    } else if (valor03 > valor02 && valor03 > valor01) {
      return "O terceiro valor é o maior de todos"
    } else {
      return "";
    }

  }

  return (
    <>
      <main>
        <article className='w-4/5 mx-auto -mt-14'>
          <ButtonLink href="/">Go back to challenges</ButtonLink>
        </article>

        <article className='w-4/5 mx-auto mt-12'>
          <h2 className='text-teal-600 text-lg font-bold'>Exercício 02:</h2>
          <p className='text-zinc-500 mt-6'>Leia 3 valores e informe qual deles é o maior.</p>
        </article>

        <article className='w-4/5 mx-auto mt-12 text-zinc-500 flex flex-col'>
          <label className='mb-2'>Informe o primeiro valor:</label>
          <input type="number" className='h-8 rounded-lg w-1/2 px-4' onChange={(e) => setValor01(parseInt(e.target.value))} />

          <label className='mb-2 mt-4'>Informe o segundo valor:</label>
          <input type="number" className='h-8 rounded-lg w-1/2 px-4' onChange={(e) => setValor02(parseInt(e.target.value))} />

          <label className='mb-2 mt-4'>Informe o terceiro valor:</label>
          <input type="number" className='h-8 rounded-lg w-1/2 px-4' onChange={(e) => setValor03(parseInt(e.target.value))} />
        </article>

        <div className='w-4/5 mx-auto mt-12'>
          <p className='text-teal-600 text-lg font-bold'>{compareValores()}</p>
        </div>



      </main >
    </>
  )
}