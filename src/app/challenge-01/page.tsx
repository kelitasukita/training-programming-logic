/* eslint-disable react/no-unescaped-entities */
import ButtonLink from '../components/ButtonLink';
export default function Challenge01() {
  return (
    <>
      <main>
        <article className='w-4/5 mx-auto -mt-14'>
          <ButtonLink href="/">Go back to challenges</ButtonLink>
        </article>

        <article className='w-4/5 mx-auto mt-12'>
          <h2 className='text-teal-600 text-lg font-bold'>Exercício 01:</h2>
          <p className='text-zinc-500 mt-6'>Faça um programa para ler a quantidade máxima, mínima e atual de um estoque. Calcule a quantidade média M = (QTDMax + QTDMin)/2. Se a quantidade atual for maior ou igual a quantidade maior, retornar a resposta: "Não efetuar compra", se estiver abaixo retorne: "Efetuar compra".</p>
        </article>

        <article className='w-4/5 mx-auto mt-12 text-zinc-500 flex flex-col'>
          <label className='mb-2'>Informe a quantidade máxima do estoque:</label>
          <input type="number" className='h-8 rounded-lg w-1/2' />
          <label className='mb-2 mt-4'>Informe a quantidade mínima do estoque:</label>
          <input type="number" className='h-8 rounded-lg w-1/2' />
          <label className='mb-2 mt-4'>Informe a quantidade atual do estoque:</label>
          <input type="number" className='h-8 rounded-lg w-1/2' />
        </article>

        <div className='w-4/5 mx-auto mt-12'>
          <p className='text-teal-600 text-lg font-bold'></p>
        </div>

      </main >
    </>
  )
}