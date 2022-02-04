var rIndex,
  table = document.getElementById("table");

// check the empty input
function checkEmptyInput() {
  var isEmpty = false,
    date = document.getElementById("date").value,
    expense = document.getElementById("expen").value,
    amount = document.getElementById("amou").value;

  if (date === "") {
    alert("Date Connot Be Empty");
    isEmpty = true;
  } else if (expense === "") {
    alert("Expense Connot Be Empty");
    isEmpty = true;
  } else if (amount === "") {
    alert("amount Connot Be Empty");
    isEmpty = true;
  }
  return isEmpty;
}

// add Row
function addHtmlTableRow() {
  // get the table by id
  // create a new row and cells
  // get value from input text
  // set the values into row cell's
  if (!checkEmptyInput()) {
    var newRow = table.insertRow(table.length),
      cell1 = newRow.insertCell(0),
      cell2 = newRow.insertCell(1),
      cell3 = newRow.insertCell(2),
      date = document.getElementById("date").value,
      expense = document.getElementById("expen").value,
      amount = document.getElementById("amou").value;

    cell1.innerHTML = date;
    cell2.innerHTML = expense;
    cell3.innerHTML = amount;
    // call the function to set the event to the new row
    selectedRowToInput();
  }
}

// display selected row data into input text
function selectedRowToInput() {
  for (var i = 1; i < table.rows.length; i++) {
    table.rows[i].onclick = function () {
      // get the seected row index
      rIndex = this.rowIndex;
      document.getElementById("date").value = this.cells[0].innerHTML;
      document.getElementById("expen").value = this.cells[1].innerHTML;
      document.getElementById("amou").value = this.cells[2].innerHTML;
    };
  }
}
selectedRowToInput();

function editHtmlTbleSelectedRow() {
  var date = document.getElementById("date").value,
    expense = document.getElementById("expen").value,
    amount = document.getElementById("amou").value;
  if (!checkEmptyInput()) {
    table.rows[rIndex].cells[0].innerHTML = date;
    table.rows[rIndex].cells[1].innerHTML = expense;
    table.rows[rIndex].cells[2].innerHTML = amount;
  }
}

function removeSelectedRow() {
  table.deleteRow(rIndex);
  // clear input text
  document.getElementById("date").value = "";
  document.getElementById("expen").value = "";
  document.getElementById("amou").value = "";
}

var table = document.getElementById("table"),
  sumVal = 0;

for (var i = 1; i < table.rows.length; i++) {
  sumVal = sumVal + parseInt(table.rows[i].cells[2].innerHTML);
}

document.getElementById("val").innerHTML = "Total = " + sumVal;
console.log(sumVal);

document.getElementById("form").addEventListener("submit", (e) => {
  e.preventDefault();
  // console.log("patel form");
});
