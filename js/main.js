document.addEventListener('DOMContentLoaded', () => {

  document.querySelector('button').addEventListener('click', () => {
    // const form = document.querySelector('form')
    //
    // const items = Object.entries(form)
    //
    // items.forEach(([key, item]) => {
    //   const isValid = item.validity.valid
    //   const value = item.value
    //
    //   if (isValid) {
    //     console.log(key, value)
    //   }
    // })

    // const formData = new FormData(form)
    //
    // formData.forEach((value, key) => {
    //   console.log(key, value)
    // })
    // Object.entries(form)[0][1].validity.valid
    // items = Object.entries(document.querySelector('form'))
    // items.map(item => typeof item[1] === 'object')
    // items.map(item => item[1].localName === 'input')
    // items.map(item => item[1].validity.valid)
  })

  document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault()
  })

})
