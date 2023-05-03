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

      </main >
    </>
  )
}