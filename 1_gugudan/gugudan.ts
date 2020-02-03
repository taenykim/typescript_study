let first = Math.ceil(Math.random() * 9)
let second = Math.ceil(Math.random() * 9)
let result = first * second

const questionDivTag = document.createElement('div')
questionDivTag.textContent = `${first} 곱하기 ${second}`
document.body.append(questionDivTag)

const formTag = document.createElement('form')
document.body.append(formTag)

const inputTag = document.createElement('input')
inputTag.type = 'number'
formTag.append(inputTag)

const buttonTag = document.createElement('button')
buttonTag.textContent = '입력'
formTag.append(buttonTag)

const resultDivTag = document.createElement('div')
document.body.append(resultDivTag)

formTag.addEventListener('submit', e => {
  e.preventDefault()
  if (result === Number(inputTag.value)) {
    resultDivTag.textContent = '딩동댕'
    first = Math.ceil(Math.random() * 9)
    second = Math.ceil(Math.random() * 9)
    result = first * second
    questionDivTag.textContent = `${first} 곱하기 ${second}`
  } else {
    resultDivTag.textContent = '땡'
  }
  inputTag.value = ''
  inputTag.focus()
})
