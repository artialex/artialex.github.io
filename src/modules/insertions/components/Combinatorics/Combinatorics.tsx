import { FC } from 'react'
// @ts-ignore
import Tex from '@matejmazur/react-katex'
import 'lodash.combinations'
import 'lodash.multicombinations'
import 'lodash.permutations'
import 'lodash.multipermutations'
import _ from 'lodash'
import css from './Combinatorics.module.scss'

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
  let _k = Number(k)
  let _n = Number(n)

  let arr = ['red', 'blue', 'green', 'yellow', 'violet'].slice(0, _n)
  let letter = letterMap[type]

  // @ts-ignore
  let selections: any[][] = _[type](arr, _k)

  return (
    <div className={css.root}>
      <Tex math={String.raw`${letter}( \ `} />
      {/*<InlineMath>{}</InlineMath>*/}

      <div className={css.selection}>
        {arr.map((el) => (
          <div
            key={Math.random()}
            className={css.box}
            style={{ backgroundColor: `var(--${el}-color)` }}
          />
        ))}
      </div>

      <Tex math={String.raw` \ , ${_k}) = \ `} />

      {selections.length > 40 ? (
        <Tex math={String.raw`${selections.length} \ \text{selections}`} />
      ) : (
        selections.map((selection) => (
          <div key={Math.random()} className={css.selection}>
            {selection.map((el) => (
              <div
                key={Math.random()}
                className={css.box}
                style={{ backgroundColor: `var(--${el}-color)` }}
              />
            ))}
          </div>
        ))
      )}
    </div>
  )
}
