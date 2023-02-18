import Tex from '@matejmazur/react-katex'
import { ComponentPropsWithoutRef, useEffect, useState } from 'react'

export const DotProduct = () => {
  const [u1, setU1] = useState(2)
  const [u2, setU2] = useState(3)
  const [v1, setV1] = useState(4)
  const [v2, setV2] = useState(5)
  const [result, setResult] = useState(0)

  useEffect(() => {
    setResult(u1 * v1 + u2 * v2)
  }, [u1, u2, v1, v2])

  return (
    <div className="flex">
      <NumberInput value={u1} onChange={setU1} />
      <Tex math={String.raw` \ , \ `} />
      <NumberInput value={u2} onChange={setU2} />
      <Tex math={String.raw` \ \cdot \ `} />
      <NumberInput value={v1} onChange={setV1} />
      <Tex math={String.raw` \ , \ `} />
      <NumberInput value={v2} onChange={setV2} />
      <Tex math={String.raw` \ = \ `} />
      <NumberInput value={result} readOnly />
    </div>
  )
}

interface Props extends Omit<ComponentPropsWithoutRef<'input'>, 'onChange'> {
  onChange?: (value: any, event: any) => void
}

const NumberInput = (props: Props) => {
  return (
    <input
      onFocus={(event) => {
        event.target.select()
      }}
      type="text"
      value={props.value}
      onChange={(event) => props.onChange?.(event.target.value, event)}
      className="w-10 text-center"
    />
  )
}
