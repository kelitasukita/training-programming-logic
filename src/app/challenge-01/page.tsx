/* eslint-disable react/no-unescaped-entities */
'use client';

import { useState } from 'react';

import ButtonLink from '../components/ButtonLink';

export default function Challenge01() {
  const [maxima, setMaxima] = useState<number>(0);
  const [minima, setMinima] = useState<number>(0);
  const [atual, setAtual] = useState<number>(0);

  const handleMedia = () => {
    const media = (maxima + minima) / 2;
    console.log(media, maxima, minima);

    if (atual >= media) {
      return "NÃO efetuar compra"
    } else {
      return "EFETUAR compra"
    }
  };

  return (
    <>
      <main>
        <article className='w-4/5 mx-auto -mt-14'>
          <ButtonLink href="/">Go back to challenges</ButtonLink>
        </article>

        <article className='w-4/5 mx-auto mt-12'>
          <h2 className='text-teal-600 text-lg font-bold'>Exercício 01:</h2>
          <p className='text-zinc-500 mt-6'>Faça um programa para ler a quantidade máxima, mínima e atual de um estoque. Calcule a quantidade média M = (QTDMax + QTDMin)/2. Se a quantidade atual for maior ou igual a quantidade media, retornar a resposta: "Não efetuar compra", se estiver abaixo retorne: "Efetuar compra".</p>
        </article>

        <article className='w-4/5 mx-auto mt-12 text-zinc-500 flex flex-col'>
          <label className='mb-2'>Informe a quantidade máxima do estoque:</label>
          <input type="number" className='h-8 rounded-lg w-1/2 px-4' onChange={(e) => setMaxima(parseInt(e.target.value))} />

          <label className='mb-2 mt-4'>Informe a quantidade mínima do estoque:</label>
          <input type="number" className='h-8 rounded-lg w-1/2 px-4' onChange={(e) => setMinima(parseInt(e.target.value))} />

          <label className='mb-2 mt-4'>Informe a quantidade atual do estoque:</label>
          <input type="number" className='h-8 rounded-lg w-1/2 px-4' onChange={(e) => setAtual(parseInt(e.target.value))} />
        </article>

        <div className='w-4/5 mx-auto mt-12'>
          <p className='text-teal-600 text-lg font-bold'>{handleMedia()}</p>
        </div>



      </main >
    </>
  )
}