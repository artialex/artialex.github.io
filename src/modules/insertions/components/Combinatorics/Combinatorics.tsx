import { FC } from 'react'
// @ts-ignore
import { InlineMath } from 'react-katex'
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
      <InlineMath>{String.raw`${letter}( \ `}</InlineMath>

      <div className={css.selection}>
        {arr.map((el) => (
          <div
            key={Math.random()}
            className={css.box}
            style={{ backgroundColor: `var(--${el}-color)` }}
          />
        ))}
      </div>

      <InlineMath>{String.raw` \ , ${_k}) = \ `}</InlineMath>

      {selections.length > 40 ? (
        <InlineMath>{String.raw`${selections.length} \ \text{selections}`}</InlineMath>
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
