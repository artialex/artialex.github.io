import { BS, Constraint } from './BacktrackingSearch.utils'
import _ from 'lodash'
import { useState } from 'react'
import css from './BacktrackingSearch.module.scss'

class QueensConstraint extends Constraint {
    constructor(private readonly cols: any, private readonly callback: any) {
        super(cols)
    }

    isSatisfied(assignment: Map<any, any>): boolean {
        // @ts-ignore
        for (let [q1c, q1r] of assignment.entries()) {
            for (let q2c of _.range(q1c + 1, this.cols.length + 1)) {
                if (assignment.has(q2c)) {
                    let q2r = assignment.get(q2c)

                    // Same row
                    if (q1r === q2r) {
                        this.callback([
                            [q1c, q1r],
                            [q2c, q2r],
                        ])

                        return false
                    }

                    // Same diagonal
                    if (Math.abs(q1r - q2r) === Math.abs(q1c - q2c)) {
                        this.callback([
                            [q1c, q1r],
                            [q2c, q2r],
                        ])

                        return false
                    }
                }
            }
        }

        this.callback(null)

        return true
    }
}

export const BacktrackingSearch = () => {
    let [isRunning, setRunning] = useState(false)
    let [error, setError] = useState(null)
    let [queensPos, setQueensPos] = useState({})

    function handleClick(delay = 0) {
        setRunning(true)
        setQueensPos({})
        setError(null)

        let cols: number[] = [0, 1, 2, 3, 4, 5, 6, 7]
        let rows = new Map()

        for (let col of cols) {
            rows.set(col, [0, 1, 2, 3, 4, 5, 6, 7])
        }

        let search = new BS(cols, rows)

        search.addConstraint(
            new QueensConstraint(cols, (err: any) => {
                setError(err)
            })
        )

        void search
            .execute(new Map(), delay, (map: Map<number, number>) => {
                setQueensPos(Object.fromEntries(map))
            })
            .then((results) => {
                console.log('Queens :: 82', results)

                setRunning(false)
            })
    }

    return (
        <div className={css.root}>
            <table className={css.table}>
                <tbody>
                    {_.range(8).map((row) => (
                        <tr key={`row-${row}`} className={`row-${row}`}>
                            {_.range(8).map((col) => (
                                <td
                                    key={`${row + '-' + col}`}
                                    className={`col-${col}`}
                                    style={
                                        (error?.[0][0] === row && error?.[0][1] === col) ||
                                        (error?.[1][0] === row && error?.[1][1] === col)
                                            ? {
                                                  backgroundColor: 'red',
                                              }
                                            : {}
                                    }
                                >
                                    {Object.entries(queensPos).some(([x, y]) => Number(x) === row && y === col)
                                        ? '♛'
                                        : ''}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
            <section className={css.controls}>
                <button onClick={() => handleClick(0)} disabled={isRunning}>
                    Run
                </button>
                <button onClick={() => handleClick(16)} disabled={isRunning}>
                    Run slower
                </button>
                <button onClick={() => handleClick(200)} disabled={isRunning}>
                    Run even more slower
                </button>
            </section>
        </div>
    )
}
