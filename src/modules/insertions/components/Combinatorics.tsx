import { FC } from 'react'
// @ts-ignore
import Tex from '@matejmazur/react-katex'
import * as _ from 'lodash'
import 'lodash.combinations'
import 'lodash.multicombinations'
import 'lodash.permutations'
import 'lodash.multipermutations'

interface CombinatoricsProps {
  type: 'combinations' | 'multicombinations' | 'permutations' | 'multipermutations'
  k: string
  n: string
}

const letterMap = {
  combinations: 'C',
  multicombinations: '\\bar{C}',
  permutations: 'P',
  multipermutations: '\\bar{P}',
}

export const Combinatorics: FC<CombinatoricsProps> = ({ type, k, n }) => {
  const _k = Number(k)
  const _n = Number(n)

  const colors = ['red', 'blue', 'green', 'yellow', 'violet'].slice(0, _n)
  const letter = letterMap[type]

  // @ts-ignore
  const selections: any[][] = _[type](colors, _k)

  return (
    <div className="m-2 ml-6 flex items-center">
      <Tex math={String.raw`${letter}( \ `} />
      <ColorSet colors={colors} />

      <Tex math={String.raw` \ , ${_k}) = \ `} />

      {selections.length > 40 ? (
        <Tex math={String.raw`${selections.length} \ \text{selections}`} />
      ) : (
        selections.map((selection) => <ColorSet colors={selection} />)
      )}
    </div>
  )
}

const ColorSet = ({ colors }: { colors: string[] }) => (
  <div className="flex flex-col">
    {colors.map((color) => (
      <div
        key={Math.random()}
        className="m-0.5 h-2 w-2 rounded-sm text-center uppercase"
        style={{ backgroundColor: `var(--${color}-color)` }}
      />
    ))}
  </div>
)
