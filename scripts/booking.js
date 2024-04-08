/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?

let costPerDay = 35;
let numberOfDays = 0; 
let totalCost;



/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!
let ul = document.querySelector('ul');
let li = document.querySelectorAll('li');
ul.addEventListener('click', (e) => {
    e.target.classList.toggle('clicked');
    ul.classList.remove('clicked');
    if(e.target.classList.contains('blue-hover')){
    if(e.target.classList.contains('clicked')){
        numberOfDays += 1;
    }else{
        numberOfDays -= 1;
    }}
    totalcost();
})



/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.

let clearButton = document.querySelector('#clear-button');
clearButton.addEventListener('click', () => {
    for(let i =0 ; i< li.length; i++){
        li[i].classList.remove('clicked');
    };
    numberOfDays = 0;
    totalcost();
})



/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.
const halfDayButton = document.querySelector('#half');
halfDayButton.addEventListener('click',() => {
    fullDayButton.classList.remove('clicked');
    halfDayButton.classList.toggle('clicked');
    costPerDay = 20;
    totalcost();
    if(!halfDayButton.classList.contains('clicked')){
        fullDayButton.classList.add('clicked');
        costPerDay = 35;
        totalcost();
    }
})



// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.
const fullDayButton = document.querySelector('#full');fullDayButton.addEventListener('click', () => {
    halfDayButton.classList.remove('clicked');
    fullDayButton.classList.toggle('clicked');
    costPerDay = 35;
    totalcost();
    if(!fullDayButton.classList.contains('clicked')){
        halfDayButton.classList.add('clicked');
        costPerDay = 20;
        totalcost();
    }
})





/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value

function totalcost(){
    const calculatedCost = document.querySelector('#calculated-cost');
    totalCost = numberOfDays*costPerDay;
    calculatedCost.textContent = totalCost;
}
