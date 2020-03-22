var body = document.body;
var candidate = [];
var arr = [];
function chooseNumber() {
    candidate = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    arr = [];
    for (var i = 0; i < 4; i++) {
        var randomNumber = Math.floor(Math.random() * (9 - i));
        var chosen = candidate.splice(randomNumber, 1)[0];
        arr.push(chosen);
    }
}
chooseNumber();
console.log(arr);
var result = document.createElement('h1');
body.append(result);
var form = document.createElement('form');
document.body.append(form);
var input = document.createElement('input');
input.type = 'text';
input.maxLength = 4;
form.append(input);
var button = document.createElement('button');
button.textContent = '입력!';
form.append(button);
var wrongCount = 0;
form.addEventListener('submit', function (e) {
    e.preventDefault();
    var answer = input.value;
    if (answer === arr.join('')) {
        // 답이 맞으면
        result.textContent = '홈런';
        input.value = '';
        input.focus();
        chooseNumber();
        wrongCount = 0;
    }
    else {
        // 답이 틀리면
        var answerArray = answer.split('');
        var strike = 0;
        var ball = 0;
        wrongCount += 1;
        if (wrongCount > 10) {
            // 10번 넘게 틀린 경우
            result.textContent = "10\uBC88 \uB118\uAC8C \uD2C0\uB824\uC11C \uC2E4\uD328! \uB2F5\uC740 " + arr.join(',') + " \uC600\uC2B5\uB2C8\uB2E4!";
            input.value = '';
            input.focus();
            chooseNumber();
            wrongCount = 0;
        }
        else {
            // 10번 미만으로 틀린 경우
            console.log('답이 틀리면', answerArray);
            for (var i = 0; i < 4; i++) {
                if (Number(answerArray[i]) === arr[i]) {
                    // 같은 자리인지 확인
                    console.log('같은 자리?');
                    strike += 1;
                }
                else if (arr.indexOf(Number(answerArray[i])) > -1) {
                    // 같은 자리는 아니지만, 숫자가 겹치는지 확인
                    console.log('겹치는 숫자?');
                    ball += 1;
                }
            }
            result.textContent = strike + "\uC2A4\uD2B8\uB77C\uC774\uD06C " + ball + "\uBCFC\uC785\uB2C8\uB2E4.";
            input.value = '';
            input.focus();
        }
    }
});
