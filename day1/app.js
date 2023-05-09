const tipCalc = (total, percent) => {
  let actualPercent = percent * 0.01
  let tip = total * actualPercent
  displayData(tip)
}


  document.getElementById('submitBtn').addEventListener('click', (e) => {
    e.preventDefault()
    let total = document.getElementById('total').value
    let percent = document.getElementById('percent').value
    tipCalc(total, percent)
  })
  
const displayData = (tip) => {

  let tipOwed = document.createElement('p')
  tipOwed.innerText = tip

  document.getElementById('tipOwedSection').append(tipOwed)
}