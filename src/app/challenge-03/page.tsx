'use client';

import { useState } from 'react';

import ButtonLink from '../components/ButtonLink';

export default function Challenge03() {
  const [valor01, setValor01] = useState();
  const [valor02, setValor02] = useState();
  const [valor03, setValor03] = useState();

  const valores = [valor01, valor02, valor03];
  valores.sort((a, b) => a - b);

  return (
    <main>
      <article className='w-4/5 mx-auto -mt-14'>
        <ButtonLink href="/">Go back to challenges</ButtonLink>
      </article>

      <article className='w-4/5 mx-auto mt-12'>
        <h2 className='text-teal-600 text-lg font-bold'>Exercício 02:</h2>
        <p className='text-zinc-500 mt-6'>Leia 3 valores os retorne em ordem crescente.</p>
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
        <p className='text-teal-600 text-lg font-bold'>{`Os números em ordem crescente são: ${valores.join(' ')}`}</p>
      </div>

    </main >
  )
}