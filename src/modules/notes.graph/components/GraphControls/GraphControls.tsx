import css from './GraphControls.module.scss'

export const GraphControls = () => (
  <div className={css.root}>
    <button>Reset</button>

    <select name="" id="" defaultValue="graph">
      <option value="all">All</option>
      <option value="java">Java</option>
      <option value="graph">Graph</option>
    </select>
  </div>
)
