const tipCalc = (total, percent) => {
  let actualPercent = percent * 0.01
  let tip = total * actualPercent
  console.log(tip)
}


const btnClick = () => {
  document.getElementById('submitBtn').addEventListener('click', (e) => {
    console.log('hi')
    e.preventDefault()
    let total = document.getElementById('#total').value
    let percent = document.getElementById('#percent').value
    tipCalc(total, percent)
  })
  
}