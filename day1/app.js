const tipCalc = (total, percent) => {
  let tip = total * percent
  console.log(tip)
}


const btnClick = () => {
  document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault()
    let total = document.querySelector('#total').value
    let percent = document.querySelector('#percent').value
    tipCalc(total, percent)
  })
  
}