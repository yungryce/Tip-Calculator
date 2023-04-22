const billInput = document.getElementById('billInput');
const tipInput = document.getElementById('tipInput');
const numberOfPeople = document.getElementById('numberOfPeople');
const splitButton = document.querySelectorAll('.splitButton');
const personTotal = document.getElementById('personTotal');
let tipValue, billValue, tipPercent, bill;;

const value = () => {
    tipValue = Number(tipInput.value);
    billValue = Number(billInput.value);
    tipPercent = (tipValue / 100) * billValue;
    bill = (tipPercent + billValue);
    return bill;
};

const increasePeople = () => {
    increase = Number(numberOfPeople.textContent++);
    increase ++;
    personTotal.textContent = value() / increase;
};

const decreasePeople = () => {
    decrease = Number(numberOfPeople.textContent--);
    if (numberOfPeople.textContent <= 1) {
        numberOfPeople.textContent = 1;
        personTotal.textContent = value();
    } else {
        decrease --;
        personTotal.textContent = value() / decrease;
    };
};


const calculateBill = () => {
    personTotal.textContent = value();
};
