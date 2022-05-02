// Define UI variables
const form = document.getElementById('form');
const tableBody = document.getElementById('table-body');
const nameInput = document.getElementById('name-input');
const dateInput = document.getElementById('date-input');
const amountInput = document.getElementById('amount-input');
const clearButton = document.getElementById('clear-btn');

// button events
form.addEventListener('submit', addExpense); 
clearButton.addEventListener('click', clearTasks)

function addExpense(e) {
  const info = [];
  // Create new table data elements
  let nameData = document.createElement('td'); 
  let dateData = document.createElement('td');
  let amountData = document.createElement('td');

  // Give value to table data elements.
  nameData.innerText = nameInput.value;
  dateData.innerText = dateInput.value;

  // Check if amount entered is a number
  if (!isNaN(parseFloat(amountInput.value))) { 
    
    // Give value to amount element.
    amountData.innerText = '$' + amountInput.value;

    // Create new row and append table data
    let tr = document.createElement('tr');
    tr.append(nameData, dateData, amountData);
    
    // Add child nodes to array
    for(let i = 0; i < tr.childNodes.length; i++){
        info.push(tr.childNodes[i].innerText);
    }
    // Save to local storage
    localStorage.setItem(info[0], JSON.stringify(info));

    // Append created row to table body
    tableBody.appendChild(tr); 
  }
  else {
    alert("Please enter a valid amount.")
  }

  e.preventDefault();
}

function clearTasks(e) {
  localStorage.clear();
  location.reload();
}

// Load from local storage
for (let i = 0; i < localStorage.length; i++) {
    // Create elements
    let row = document.createElement('tr');
    let item = document.createElement('td');
    let date = document.createElement('td');
    let price = document.createElement('td');
    // Get local storage as array
    const storedInfo = JSON.parse(localStorage.getItem(localStorage.key(i)));
    // Asign info
    item.innerText = storedInfo[0];
    date.innerText = storedInfo[1];
    price.innerText = storedInfo[2];;
    row.append(item, date, price);
    tableBody.append(row);
}

