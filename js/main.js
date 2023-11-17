document.addEventListener('DOMContentLoaded', () => {

  document.querySelector('button').addEventListener('click', () => {
    const form = document.querySelector('form')
    const items = Object.entries(form)
    const invalidItems = items.filter(item => !item[1].validity.valid);

    invalidItems.forEach(item => {
      console.log(item[1].validationMessage)
    })

  })

  document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault()
  })

})
