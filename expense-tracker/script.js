/*
==========================================
Expense Tracker

Features:
✔ Add Expense
✔ Display Expenses
✔ Delete Expense
✔ Calculate Total
✔ Save Data using localStorage
✔ Load Saved Data after Refresh

Created By: Sudarshan Murade
==========================================
*/

// HTML Elements

const expenseInput = document.getElementById("expenseName");
const amountInput = document.getElementById("expenseAmount");
const categoryInput = document.getElementById("category");
const addButton = document.getElementById("addBtn");
const totalAmount = document.getElementById("totalAmount");
const expenseList = document.getElementById("expenseList");


// Store all expenses

let expenses = [];


// Load saved expenses

const savedExpenses = localStorage.getItem("expenses");

if (savedExpenses) {

    expenses = JSON.parse(savedExpenses);

}


// Event Listener

addButton.addEventListener("click", function () {

    addExpense();

});



// 5. ADD EXPENSE


function addExpense() {

    let expenseName = expenseInput.value;

    let expenseAmount = amountInput.value;

    let expenseCategory = categoryInput.value;

if (expenseName.trim() === "") {

    alert("Please Enter Expense Name");

    return;

}

if (expenseAmount.trim() === "") {

    alert("Please Enter Amount");

    return;

}
    // Create a new expense object

    let expense = {

        name: expenseName,

        amount: Number(expenseAmount),

        category: expenseCategory

    };



    expenses.push(expense);

    localStorage.setItem("expenses", JSON.stringify(expenses));


    displayExpenses();

    calculateTotal();


    // Clear input fields

    expenseInput.value = "";

    amountInput.value = "";

    categoryInput.value = "";

}


// 6. DISPLAY EXPENSES

function displayExpenses() {

    expenseList.innerHTML = "";

    for (let i = 0; i < expenses.length; i++) {

        expenseList.innerHTML += `

<div class="expense">

    <div>

        <h3>${expenses[i].name}</h3>

        <p>${expenses[i].category}</p>

    </div>

    <div class="amount">

        ₹${expenses[i].amount}

    </div>

    <button onclick="deleteExpense(${i})">

        Delete

    </button>

</div>

`;

    }

}

//  DELETE EXPENSE

function deleteExpense(index) {

    expenses.splice(index, 1);

    localStorage.setItem("expenses", JSON.stringify(expenses));

    displayExpenses();

    calculateTotal();

}


// CALCULATE TOTAL

function calculateTotal() {

    let total = 0;

    for (let i = 0; i < expenses.length; i++) {

        total = total + expenses[i].amount;

    }


    totalAmount.innerText = "₹" + total;

}

// Show saved data when page loads

displayExpenses();

calculateTotal();