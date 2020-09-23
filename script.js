let numbers = document.querySelectorAll(".number"),
  operations = document.querySelectorAll(".operator"),
  decimalBtn = document.getElementById("decimal"),
  clearBtns = document.querySelectorAll(".clear-btn"),
  howWorcBtn = document.getElementById("howWorkBtn"),
  resultBtn = document.getElementById("result"),
  display = document.getElementById("display"),
  MemoryCurrentNumber = 0,
  MemoryNewNumber = false,
  MemoryPendingOperation = "";

for (var i = 0; i < numbers.length; i += 1) {
  let number = numbers[i];
  number.addEventListener("click", function (e) {
    numberPress(e.target.innerText);
  });
}

for (var i = 0; i < operations.length; i += 1) {
  let operationBtn = operations[i];
  operationBtn.addEventListener("click", function (e) {
    operation(e.target.innerText);
    console.log(e);
  });
}

for (var i = 0; i < clearBtns.length; i += 1) {
  let clearBtn = clearBtns[i];
  clearBtn.addEventListener("click", function (e) {
    clear(e.srcElement.id);
  });
}

decimalBtn.addEventListener("click", decimal);

howWorcBtn.addEventListener("click", howWork);

resultBtn.addEventListener("click", result);

function numberPress(number) {
  if (MemoryNewNumber) {
    display.value = number;
    MemoryNewNumber = false;
  } else {
    if (display.value === "0") {
      display.value = number;
    } else {
      display.value += number;
    }
  }
}

function operation(oper) {
  let localMemoryOperation = display.value;

  if (MemoryNewNumber && MemoryPendingOperation !== "=") {
    display.value = MemoryCurrentNumber;
  } else {
    MemoryNewNumber = true;
    if (MemoryPendingOperation === "+") {
      MemoryCurrentNumber += parseFloat(localMemoryOperation);
    } else if (MemoryPendingOperation === "-") {
      MemoryCurrentNumber -= parseFloat(localMemoryOperation);
    } else if (MemoryPendingOperation === "*") {
      MemoryCurrentNumber *= parseFloat(localMemoryOperation);
    } else if (MemoryPendingOperation === "/") {
      MemoryCurrentNumber /= parseFloat(localMemoryOperation);
    } else if (MemoryPendingOperation === "**") {
      MemoryCurrentNumber **= parseFloat(localMemoryOperation);
    } else if (MemoryPendingOperation === "√") {
      MemoryCurrentNumber = Math.sqrt(parseFloat(localMemoryOperation));
    } else {
      MemoryCurrentNumber = parseFloat(localMemoryOperation);
    }
    display.value = MemoryCurrentNumber;
    MemoryPendingOperation = oper;
  }

  console.log("oper " + oper);
}

function decimal() {
  let localDecimaMemory = display.value;
  if (MemoryNewNumber) {
    localDecimaMemory = "0.";
    MemoryNewNumber = false;
  } else {
    if (localDecimaMemory.indexOf(".") === -1) {
      localDecimaMemory += ".";
    }
  }
  display.value = localDecimaMemory;
}

function clear(id) {
  if (id === "ce") {
    display.value = "0";
    MemoryNewNumber = true;
  } else if (id === "c") {
    display.value = "0";
    MemoryNewNumber = true;
    MemoryCurrentNumber = "0";
    MemoryPendingOperation = "";
  }
  console.log("click " + id + "!");
}

function howWork() {
  console.log("how");
}
document.querySelector(".how-work").onclick = function () {
  document.querySelector(".calc").classList.add("hidden");
  document.querySelector(".how-work").classList.add("hidden");
  document.querySelector(".alert").classList.add("visible");
};
