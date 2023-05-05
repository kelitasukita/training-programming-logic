'use client';

import { useState } from 'react';

import ButtonLink from '../components/ButtonLink';

export default function Challenge03() {
  const [valorA, setValorA] = useState();
  const [valorB, setValorB] = useState();
  const [valorC, setValorC] = useState();

  const isThisTriangle = () => {
    if (valorA < (valorB + valorC) && valorB < (valorA + valorC) && valorC < (valorA + valorB)) {
      return "As medidas correspodem às de um triângulo.";
    } else if (!valorA && !valorB && !valorC) {
      return "";
    } else {
      return "As medidas não correspondem às de um triângulo.";
    }

  }

  return (
    <main>
      <article className='w-4/5 mx-auto -mt-14'>
        <ButtonLink href="/">Go back to challenges</ButtonLink>
      </article>

      <article className='w-4/5 mx-auto mt-12'>
        <h2 className='text-teal-600 text-lg font-bold'>Exercício 04:</h2>
        <p className='text-zinc-500 mt-6'>Leia 3 valores A, B, e C, que representam as medidas de um triângulo.
          Retorne se eles formam ou não um triângulo.
          OBS.: Lembrando que para se formar um triângulo o valor de cada lado deve ser menor que a soma dos outros 2 lados.</p>
      </article>

      <article className='w-4/5 mx-auto mt-12 text-zinc-500 flex flex-col'>
        <label className='mb-2'>Informe o tamanho do lado A:</label>
        <input type="number" className='h-8 rounded-lg w-1/2 px-4' onChange={(e) => setValorA(parseInt(e.target.value))} />

        <label className='mb-2 mt-4'>Informe o tamanho do lado B:</label>
        <input type="number" className='h-8 rounded-lg w-1/2 px-4' onChange={(e) => setValorB(parseInt(e.target.value))} />

        <label className='mb-2 mt-4'>Informe o tamanho do lado C:</label>
        <input type="number" className='h-8 rounded-lg w-1/2 px-4' onChange={(e) => setValorC(parseInt(e.target.value))} />
      </article>

      <div className='w-4/5 mx-auto mt-12'>
        <p className='text-teal-600 text-lg font-bold'>{isThisTriangle()}</p>
      </div>

    </main >
  )
}