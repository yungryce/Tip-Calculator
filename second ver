const billInput = document.getElementById('billInput');
const tipInput = document.getElementById('tipInput');
const numberOfPeople = document.getElementById('numberOfPeople');
const splitButton = document.querySelectorAll('.splitButton');
const personTotal = document.getElementById('personTotal');
let billInputValue, tipInputValue, numberOfPeopleValue, personTotalValue, bill;




const calculateBill = () => {
    billInputValue = Number(billInput.value); // ' '
    tipInputValue = Number(tipInput.value); // ' '
    bill = ((tipInputValue / 100) * billInputValue) + billInputValue
    personTotal.textContent = bill.toFixed(2)
    return bill
};


const increasePeople = () => {
    numberOfPeopleValue = Number(numberOfPeople.textContent); // '1'
    numberOfPeopleValue ++
    bill = calculateBill() / numberOfPeopleValue
    personTotal.textContent = bill.toFixed(2)
    numberOfPeople.textContent = numberOfPeopleValue
}

const decreasePeople = () => {
    numberOfPeopleValue = Number(numberOfPeople.textContent); // '1'
    numberOfPeopleValue --
    if (numberOfPeopleValue <= 1) {
        personTotal.textContent = calculateBill().toFixed(2)
        numberOfPeople.textContent = 1
    } else {
        bill = calculateBill() / numberOfPeopleValue
        personTotal.textContent = bill.toFixed(2)
        numberOfPeople.textContent = numberOfPeopleValue
    }
}
