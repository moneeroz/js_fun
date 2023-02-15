// When the user clicks on the style me button the following will run
document.querySelector('#styleMe').addEventListener('click', formStyle)

function formStyle () {
  const darkStyle = document.querySelector('form')
  darkStyle.classList.toggle('darkForm')
}

// When the user clicks on the sort arry button the following will run
document.querySelector('#sortArray').addEventListener('click', sortArr)

function sortArr () {
  const userInput = document.querySelector('#myInput').value
  const result = userInput.split(' ').map(function (item) {
    return (` ${parseInt(item, 10)}`)
  })

  result.sort((a, b) => a - b)
  document.querySelector('#formOutput').innerText = result
}

// When the user clicks on the sum n % 5 button the following will run
document.querySelector('#sumNumsArr').addEventListener('click', sumNums)

function sumNums () {
  const userInput = document.querySelector('#myInput').value
  const result = userInput.split(' ').map(function (item) {
    return parseInt(item, 10)
  })

  result.sort((a, b) => a - b)

  const divisableElements = []
  for (const e of result) {
    if (e % 5 === 0) {
      divisableElements.push(e)
    }
  }
  console.log(divisableElements)

  let sum = 0
  for (const n of divisableElements) {
    sum += n
  }

  document.querySelector('#formOutput').innerText = sum
}
