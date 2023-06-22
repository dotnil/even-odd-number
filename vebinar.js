const getNumber = () => Math.round(Math.random() * 100)
const isEven = (number) => !(number % 2)

const playRound = () => {
  const number = getNumber()
  const userAnswer = prompt(`Является ли число ${number} четным? Пожалуйста, введите ответ 'да' или 'нет'`)
  const correctAnswer = isEven(number) ? 'да' : 'нет'

  if (!userAnswer) {
    alert('Вы не ввели ответ. Игра окончена!')
    return false
  } else if (userAnswer.toLowerCase() === correctAnswer) {
    alert('Правильно!')
    return true
  } else {
    alert(`Неправильно! Правильный ответ: ${correctAnswer}`)
    return false
  }
}

const playGame = () => {
  for (let i = 0 i < 3 i++) {
    const isCorrect = playRound()
    if (!isCorrect) {
      return
    }
  }
  alert('Вы выиграли!')
}

const startButton = document.querySelector('button')
startButton.addEventListener('click', playGame)
