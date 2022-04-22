import React, { FC, useEffect, useRef, useState } from 'react'
import paper from 'paper'

const NumberInput = (props: any) => {
  return (
    <input
      {...props}
      style={{
        fontFamily: 'Nunito Regular',
        appearance: 'none',
        outline: 'none',
        width: 40,
        color: 'inherit',
        height: 28,
        textAlign: 'center',
        background: 'transparent',
        border: 'none',
      }}
      type="text"
    />
  )
}

function createDot(p: any, color: any, options?: any) {
  let point = new paper.Point(p)

  let dot = new paper.Path.Circle(point, options?.radius || 4)
  dot.fillColor = color

  return point
}

function distance(a: any, b: any) {
  return Math.sqrt(Math.pow(a.x - b.x, 2) + Math.pow(a.y - b.y, 2))
}

function closest(target: any, points: any) {
  let closest = 'start'

  for (let key of Object.keys(points)) {
    if (distance(target, points[key]) < distance(target, points[closest])) {
      closest = key
    }
  }

  return closest
}

export const BezierCurves: FC = () => {
  let [curve, setCurve] = useState({
    start: { x: -360, y: -80 },
    h1: { x: -140, y: 220 },
    h2: { x: 40, y: -40 },
    end: { x: 260, y: 180 },
  })
  let [offset, setOffset] = useState(0)
  let [showScaled, setScaled] = useState(false)
  let [showConstructionLines, setConstructionLines] = useState(true)

  let canvasRef = useRef<HTMLCanvasElement>(null)

  let red = new paper.Color(getComputedStyle(document.body).getPropertyValue('--red-color'))
  let green = new paper.Color(getComputedStyle(document.body).getPropertyValue('--green-color'))
  let blue = new paper.Color(getComputedStyle(document.body).getPropertyValue('--blue-color'))
  let yellow = new paper.Color(getComputedStyle(document.body).getPropertyValue('--yellow-color'))
  let white = new paper.Color(getComputedStyle(document.body).getPropertyValue('--text-color'))
  let lgray = new paper.Color(getComputedStyle(document.body).getPropertyValue('--subtle-color'))

  let tool = new paper.Tool()

  useEffect(() => {
    paper.setup(canvasRef.current!)
    paper.view.matrix = new paper.Matrix(1, 0, 0, -1, paper.view.center.x, paper.view.center.y)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setOffset((prevState) => {
        return (prevState + 0.5) % 100
      })
    }, 16)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    function setPosition(e: any) {
      setCurve((curve) => ({
        ...curve,
        [closest(e.point, curve)]: e.point,
      }))
    }

    tool.onMouseDown = setPosition
    tool.onMouseDrag = setPosition
  }, [curve])

  useEffect(() => {
    paper.project.clear()

    let origin = new paper.Point(0, 0)

    let start = createDot(curve.start, red)
    let h1 = createDot(curve.h1, green)
    let h2 = createDot(curve.h2, blue)
    let end = createDot(curve.end, yellow)

    if (showScaled) {
      let start2 = createDot(start.multiply(1.5), red, { radius: 2.5 })
      let h12 = createDot(h1.multiply(1.5), green, { radius: 2.5 })
      let h22 = createDot(h2.multiply(1.5), blue, { radius: 2.5 })
      let end2 = createDot(end.multiply(1.5), yellow, { radius: 2.5 })

      let helper1 = new paper.Path.Line(origin, start2)
      helper1.strokeColor = lgray
      helper1.dashArray = [10, 12]
      let helper2 = new paper.Path.Line(origin, h12)
      helper2.strokeColor = lgray
      helper2.dashArray = [10, 12]
      let helper3 = new paper.Path.Line(origin, h22)
      helper3.strokeColor = lgray
      helper3.dashArray = [10, 12]
      let helper4 = new paper.Path.Line(origin, end2)
      helper4.strokeColor = lgray
      helper4.dashArray = [10, 12]

      let path2 = new paper.Path()
      path2.moveTo(start2)
      path2.cubicCurveTo(h12, h22, end2)
      path2.strokeColor = white
      path2.dashArray = [10, 12]
    }

    if (showConstructionLines) {
      let dots = [start, h1, h2, end]

      while (dots.length) {
        let newdots = []

        for (let i = 0; i < dots.length - 1; i++) {
          let line = new paper.Path.Line(dots[i], dots[i + 1])
          line.strokeColor = lgray
          line.dashArray = [4, 4]

          newdots.push(
            createDot(line.getPointAt((line.length * offset) / 100), white, {
              radius: dots.length === 2 ? 5 : 2,
            })
          )
        }

        dots = newdots
      }

      // let start_h1 = new paper.Path.Line(start, h1)
      // start_h1.strokeColor = lgray
      // let h1_h2 = new paper.Path.Line(h1, h2)
      // h1_h2.strokeColor = lgray
      // let h2_end = new paper.Path.Line(h2, end)
      // h2_end.strokeColor = lgray
      //
      // let hh1 = createDot(start_h1.getPointAt(start_h1.length / 2), lgray, { radius: 2.5 })
      // let hh2 = createDot(h1_h2.getPointAt(h1_h2.length / 2), lgray, { radius: 2.5 })
      // let hh3 = createDot(h2_end.getPointAt(h2_end.length / 2), lgray, { radius: 2.5 })
      //
      // let hh1_hh2 = new paper.Path.Line(hh1, hh2)
      // hh1_hh2.strokeColor = lgray
      // let hh2_hh3 = new paper.Path.Line(hh2, hh3)
      // hh2_hh3.strokeColor = lgray
    }

    let path = new paper.Path()
    path.moveTo(start)
    path.cubicCurveTo(h1, h2, end)
    path.strokeWidth = 2
    path.strokeColor = white
  }, [curve, showScaled, showConstructionLines, offset])

  return (
    <div>
      <label>
        <input type="checkbox" checked={showScaled} onChange={(e) => setScaled(e.target.checked)} />{' '}
        Show scaled
      </label>
      <label>
        <input
          type="checkbox"
          checked={showConstructionLines}
          onChange={(e) => setConstructionLines(e.target.checked)}
        />{' '}
        Show construction lines
      </label>
      <canvas
        style={{ display: 'block', margin: '0 auto', position: 'relative' }}
        ref={canvasRef}
        width={800}
        height={600}
      />
      {/*<table width={'100%'}>
        <tbody>
          <tr>
            <td style={{ textAlign: 'center' }}>
              [
              <NumberInput
                value={vec.x.toFixed(2)}
                onChange={(e) => setVec({ ...vec, x: Number(e.target.value) })}
              />
              <NumberInput
                value={vec.y.toFixed(2)}
                onChange={(e) => setVec({ ...vec, y: Number(e.target.value) })}
              />
              ]
            </td>
            <td style={{ textAlign: 'center', color: 'red' }}>
              [<NumberInput readOnly value={rVec.x.toFixed(2)} />
              <NumberInput readOnly value={rVec.y.toFixed(2)} />]
            </td>
            <td style={{ textAlign: 'center', color: 'green' }}>
              [<NumberInput readOnly value={gVec.x.toFixed(2)} />
              <NumberInput readOnly value={gVec.y.toFixed(2)} />]
            </td>
            <td style={{ textAlign: 'center', color: 'blue' }}>
              [<NumberInput readOnly value={bVec.x.toFixed(2)} />
              <NumberInput readOnly value={bVec.y.toFixed(2)} />]
            </td>
          </tr>
          <tr>
            <td />
            <td style={{ textAlign: 'center' }}>
              <NumberInput defaultValue={rRot} onChange={(e) => setRRot(Number(e.target.value))} />
              <span style={{ fontSize: 12 }}>deg</span>
            </td>
            <td style={{ textAlign: 'center' }}>
              <NumberInput defaultValue={gRot} onChange={(e) => setGRot(Number(e.target.value))} />
              <span style={{ fontSize: 12 }}>deg</span>
            </td>
            <td style={{ textAlign: 'center' }}>
              <NumberInput defaultValue={bRot} onChange={(e) => setBRot(Number(e.target.value))} />
              <span style={{ fontSize: 12 }}>deg</span>
            </td>
          </tr>
        </tbody>
      </table>*/}
    </div>
  )
}
