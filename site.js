function addGrid() {
  var gridCont = document.getElementById('gridCont')
  var cell = document.getElementById('cell')
  var newBox
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 20; j++) {
      newBox = document.createElement('div')
      if (i == 0 && j == 0) {
        newBox.className = 'firstRow firstInRow'
      } else if (i == 0) {
        newBox.className = 'firstRow'
      } else if (j == 0) {
        newBox.className = 'firstInRow'
      }
      gridCont.appendChild(newBox)
    }
  }
}
