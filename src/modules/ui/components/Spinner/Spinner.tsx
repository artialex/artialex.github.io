import cn from 'clsx'
import css from './Spinner.module.scss'

export const Spinner = () => (
  <div className={css.root}>
    <div className={css.spinner}>
      <div className={cn(css.rhombus, css.child1)}></div>
      <div className={cn(css.rhombus, css.child2)}></div>
      <div className={cn(css.rhombus, css.child3)}></div>
      <div className={cn(css.rhombus, css.child4)}></div>
      <div className={cn(css.rhombus, css.child5)}></div>
      <div className={cn(css.rhombus, css.child6)}></div>
      <div className={cn(css.rhombus, css.child7)}></div>
      <div className={cn(css.rhombus, css.child8)}></div>
      <div className={cn(css.rhombus, css.big)}></div>
    </div>
  </div>
)

Spinner.Centered = () => (
  <div style={{ height: '100vh', display: 'flex' }}>
    <Spinner />
  </div>
)
