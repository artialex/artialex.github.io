import { BS, Constraint, range } from './utils';

import { useState } from 'react';
import css from './BacktrackingSearch.module.css';
import { stopEventPropagation } from 'tldraw';

class QueensConstraint extends Constraint {
  constructor(
    private readonly cols: any,
    private readonly callback: any,
  ) {
    super(cols);
  }

  isSatisfied(assignment: Map<any, any>): boolean {
    for (const [q1c, q1r] of assignment.entries()) {
      for (const q2c of range(q1c + 1, this.cols.length + 1)) {
        if (assignment.has(q2c)) {
          const q2r = assignment.get(q2c);

          // Same row
          if (q1r === q2r) {
            this.callback([
              [q1c, q1r],
              [q2c, q2r],
            ]);

            return false;
          }

          // Same diagonal
          if (Math.abs(q1r - q2r) === Math.abs(q1c - q2c)) {
            this.callback([
              [q1c, q1r],
              [q2c, q2r],
            ]);

            return false;
          }
        }
      }
    }

    this.callback(null);

    return true;
  }
}

export const BacktrackingSearch = () => {
  const [isRunning, setRunning] = useState(false);
  const [error, setError] = useState(null);
  const [queensPos, setQueensPos] = useState({});

  function handleClick(delay = 0) {
    console.log('clicked');
    setRunning(true);
    setQueensPos({});
    setError(null);

    const cols: number[] = [0, 1, 2, 3, 4, 5, 6, 7];
    const rows = new Map();

    for (const col of cols) {
      rows.set(col, [0, 1, 2, 3, 4, 5, 6, 7]);
    }

    const search = new BS(cols, rows);

    search.addConstraint(
      new QueensConstraint(cols, (err: any) => {
        setError(err);
      }),
    );

    void search
      .execute(new Map(), delay, (map: Map<number, number>) => {
        setQueensPos(Object.fromEntries(map));
      })
      .then((results) => {
        console.log('Queens :: 82', results);

        setRunning(false);
      });
  }

  return (
    <div>
      <h3>BacktrackingSearch</h3>
      <div className={css.root}>
        <table className={css.table}>
          <tbody>
            {range(8).map((row) => (
              <tr key={`row-${row}`} className={`row-${row}`}>
                {range(8).map((col) => (
                  <td
                    key={`${row + '-' + col}`}
                    className={`col-${col}`}
                    style={
                      (error?.[0][0] === row && error?.[0][1] === col) ||
                      (error?.[1][0] === row && error?.[1][1] === col)
                        ? { backgroundColor: 'red' }
                        : {}
                    }
                  >
                    {Object.entries(queensPos).some(([x, y]) => Number(x) === row && y === col) ? '♛' : ''}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
        <section className={css.controls}>
          <button
            onPointerDownCapture={stopEventPropagation}

            onClick={() => handleClick(4)}
            disabled={isRunning}
          >
            Run (throttled)
          </button>
        </section>
      </div>
    </div>
  );
};
