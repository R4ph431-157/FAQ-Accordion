// Add event listener to get plus icon on click

document.querySelector('.plus-icon').addEventListener('click', showAnswer)


function showAnswer() {
  document.querySelector('.answer-container').style.display = 'block'
  document.querySelector('.plus-icon').style.display = 'none'
  document.querySelector('.hidden-minus').style.display = 'block'
}