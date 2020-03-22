const { body } = document
let candidate: number[] = []
let arr: number[] = []

function chooseNumber() {
  candidate = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  arr = []
  for (let i = 0; i < 4; i++) {
    const randomNumber = Math.floor(Math.random() * (9 - i))
    const chosen = candidate.splice(randomNumber, 1)[0]
    arr.push(chosen)
  }
}

chooseNumber()
console.log(arr)

const result = document.createElement('h1')
body.append(result)

const form = document.createElement('form')
document.body.append(form)

const input = document.createElement('input')
input.type = 'text'
input.maxLength = 4
form.append(input)

const button = document.createElement('button')
button.textContent = '입력!'
form.append(button)

let wrongCount = 0
form.addEventListener('submit', e => {
  e.preventDefault()
  const answer = input.value
  if (answer === arr.join('')) {
    // 답이 맞으면
    result.textContent = '홈런'
    input.value = ''
    input.focus()
    chooseNumber()
    wrongCount = 0
  } else {
    // 답이 틀리면
    const answerArray = answer.split('')
    let strike = 0
    let ball = 0
    wrongCount += 1
    if (wrongCount > 10) {
      // 10번 넘게 틀린 경우
      result.textContent = `10번 넘게 틀려서 실패! 답은 ${arr.join(',')} 였습니다!`
      input.value = ''
      input.focus()
      chooseNumber()
      wrongCount = 0
    } else {
      // 10번 미만으로 틀린 경우
      console.log('답이 틀리면', answerArray)
      for (let i: number = 0; i < 4; i++) {
        if (Number(answerArray[i]) === arr[i]) {
          // 같은 자리인지 확인
          console.log('같은 자리?')
          strike += 1
        } else if (arr.indexOf(Number(answerArray[i])) > -1) {
          // 같은 자리는 아니지만, 숫자가 겹치는지 확인
          console.log('겹치는 숫자?')
          ball += 1
        }
      }
      result.textContent = `${strike}스트라이크 ${ball}볼입니다.`
      input.value = ''
      input.focus()
    }
  }
})
