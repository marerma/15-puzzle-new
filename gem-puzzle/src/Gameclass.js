
import {getMatrix, setGridTemplate} from './additionalFunc.js'
import {numbers, sortNumbers, sortNumbersSolvable, sortArraySolvable} from './numbers.js'

const newGameGrid = {
  field: document.createElement("div"),
  drawNewGame: function() {
    this.field.className = 'field opacity'
    this.field.width = 500;
    this.field.height = 500;
    document.body.append(this.field)
  },
  fillCells: function(level) {
    //let sortedNumbers = sortNumbers(numbers(level))
    let sortedNumbers = sortArraySolvable(numbers(level), level).flat(Infinity)

   
    this.field.style.gridTemplateColumns = `repeat(${level}, 1fr)`
    this.field.style.gridTemplateRows = `repeat(${level}, 1fr)`

    for(let i = 0; i < level*level; i++) {
      const textBlock = document.createElement('div')
      textBlock.className = 'number-cell'
      if (sortedNumbers[i] === 0) {
        textBlock.textContent = ''
        textBlock.setAttribute('id', 'empty')
      } else {textBlock.textContent = `${sortedNumbers[i]}`}
      this.field.append(textBlock)
      textBlock.setAttribute('order', `${i+1}`) 
   }

  let allTiles = Array.from(document.querySelectorAll('.number-cell'))
  let allTilesMatrix = getMatrix(allTiles, level)
  setGridTemplate (allTilesMatrix)
   },

  clearCells: function() {
    this.field.innerHTML = ''
    this.field.removeAttribute('order')
    this.field.removeAttribute('style')
  }
  }
  

function getStart(level) {
  newGameGrid.drawNewGame()
  newGameGrid.fillCells(level)
}

  
export {newGameGrid, getStart}
