// Create a variable and store all plus-icons

let icon = document.querySelectorAll('.plus-icon')

/* Loop through all the plus-icons starting from the first until the last plus-icon,, on each plus-icon select each answer-container, plus-icon and minus-icon within the same main container, display the answer-container and minus-icon then hide the plus-icon */

  for (let i = 0; i < icon.length; i++) {

    icon[i].addEventListener('click', function() {

      this.closest('.main-container').querySelector('.answer-container').style.display = 'block'

      this.closest('.main-container').querySelector('.plus-icon').style.display = 'none'

      this.closest('.main-container').querySelector('.minus-icon').style.display = 'block'
    })

/* Add keydown event listener to navigate the questions and show answers using keyboard navigation if the condition is true */

    icon[i].addEventListener('keydown', function(event) {
      if (event.key === 'Enter' || event.key === '') {
        this.closest('.main-container').querySelector('.answer-container').style.display = 'block'

        this.closest('.main-container').querySelector('.plus-icon').style.display = 'none'

        this.closest('.main-container').querySelector('.minus-icon').style.display = 'block'
      }
    })

  }



// Create a variable and store all minus-icons

let icon2 = document.querySelectorAll('.minus-icon')

/* Loop through all the minus-icons starting from the first until the last minus-icon,, on each minus-icon select each answer-container, plus-icon and minus-icon within the same main container, hide the answer-container and minus-icon then display the plus-icon */

  for (let i = 0; i < icon2.length; i++) {

    icon2[i].addEventListener('click', function() {

      this.closest('.main-container').querySelector('.answer-container').style.display = 'none'

      this.closest('.main-container').querySelector('.plus-icon').style.display = 'block'

      this.closest('.main-container').querySelector('.minus-icon').style.display = 'none'
    })


/* Add keydown event listener to navigate the questions and hide answers using keyboard navigation if the condition is true */

    icon2[i].addEventListener('keydown', function(event) {
      if (event.key === 'Enter' || event.key === '') {
        this.closest('.main-container').querySelector('.answer-container').style.display = 'none'

        this.closest('.main-container').querySelector('.plus-icon').style.display = 'block'

        this.closest('.main-container').querySelector('.minus-icon').style.display = 'none'
      }
    })

  }
  