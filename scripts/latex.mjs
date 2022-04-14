// #!/usr/bin/env sh
// cd ./src/latex/graph
//
// pdflatex ./oriented.tex
// pdftocairo ./oriented.tex ../../../public/images/graph/oriented.svg -svg
// pdflatex ./unoriented.tex
// pdftocairo ./unoriented.tex ../../../public/images/graph/unoriented.svg -svg
// pdflatex ./mixed.tex
// pdftocairo ./mixed.tex ../../../public/images/graph/mixed.svg -svg

import { exec } from 'child_process'

process.chdir('./src/latex/graph')

let images = [
  // 'oriented',
  // 'unoriented',
  // 'mixed',
  // 'acyclic',
  // 'cyclic',
  // 'disconnected',
  // 'weighted',
  'trie',
]

for (let image of images) {
  // console.log('latex :: 21', image)
  exec(`pdflatex ./${image}.tex`, () => {
    exec(`pdftocairo ./${image}.pdf ../../../public/images/graph/${image}.svg -svg`)
  })

  // await sleep(500)
}

// async function sleep(ms) {
//   return new Promise((resolve) => setTimeout(() => resolve(), ms))
// }

process.on('error', (error) => {
  console.log('latex :: 32', error)
})
