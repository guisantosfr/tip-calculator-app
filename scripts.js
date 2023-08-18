const billInput = document.querySelector('input[id=bill]')
const tipButtons = document.querySelector('.tip-buttons')
const radioButtons = document.querySelectorAll('input[type=radio]')
const customInput = document.querySelector('input[id=custom]')
const peopleInput = document.querySelector('input[id=people]')
const tipsPerPersonOutput = document.querySelector('.tip-person')
const totalPerPersonOutput = document.querySelector('.total-person')
const resetButton = document.querySelector('.reset')

let bill = 0
let tip = 0
let people = 0
let total = 0

function calculate() {
    if (bill <= 0 || tip <= 0 || people <= 0)
        return
    else {
        total = bill * tip
        tipsPerPersonOutput.value = `$${((total - bill) / people).toFixed(2)}`
        totalPerPersonOutput.value = `$${(total / people).toFixed(2)}`
    }
}


billInput.addEventListener('input', e => {
    bill = e.target.value
    calculate()
})

tipButtons.addEventListener('click', e => {
    tip = e.target.value
    calculate()
})

customInput.addEventListener('input', e => {
    tip = e.target.value / 100 + 1
    radioButtons.forEach(input => input.checked = false)
    calculate()
})

peopleInput.addEventListener('input', e => {
    people = e.target.value
    calculate()
})

resetButton.addEventListener('click', e => {
    bill = 0
    tip = 0
    people = 0
    total = 0

    billInput.value = ''
    radioButtons.forEach(input => input.checked = false)
    customInput.value = ''
    peopleInput.value = ''
    tipsPerPersonOutput.value = '$0.00'
    totalPerPersonOutput.value = '$0.00'
})