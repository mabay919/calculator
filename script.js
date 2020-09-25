let numbers = document.querySelectorAll(".number"),
  operations = document.querySelectorAll(".operator"),
  decimalBtn = document.getElementById("decimal"),
  clearBtns = document.querySelectorAll(".clear-btn"),
  howWorkBtn = document.getElementById("howWorkBtn"),
  resultBtn = document.getElementById("result"),
  display = document.getElementById("display"),
  minusButton = document.querySelector(".minus"),
  MemoryCurrentNumber = 0,
  squareRootBtn = document.querySelector(".squareRoot"),
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

squareRootBtn.addEventListener("click", squareRoot);

minusButton.addEventListener("click", negativeNumber);

decimalBtn.addEventListener("click", decimal);

howWorkBtn.addEventListener("click", howWork);

resultBtn.addEventListener("click", result);

function squareRoot() {
  let localSquareMemory = display.value;
  if (parseFloat(localSquareMemory) >= 0) {
    MemoryNewNumber = true;
    localSquareMemory = Math.sqrt(parseFloat(display.value));
    display.value = +localSquareMemory.toFixed(10);
    MemoryCurrentNumber = display.value;
    MemoryNewNumber = false;
  } else {
    display.value = "Аауууу=) Error!=(";
    MemoryNewNumber = true;
  }
}

function negativeNumber() {
  if (MemoryNewNumber) {
    display.value = "-";
    MemoryNewNumber = false;
  }
  display.value = "-";
}

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
  console.log(localMemoryOperation);

  if (MemoryNewNumber && MemoryPendingOperation !== "=") {
    display.value = MemoryCurrentNumber;
  } else {
    MemoryNewNumber = true;
    if (MemoryPendingOperation === "+") {
      MemoryCurrentNumber += parseFloat(localMemoryOperation);
    } else if (MemoryPendingOperation === "-") {
      MemoryCurrentNumber -= parseFloat(localMemoryOperation);
    } else if (MemoryPendingOperation === "*") {
      console.log(MemoryCurrentNumber);
      MemoryCurrentNumber *= parseFloat(localMemoryOperation);
    } else if (MemoryPendingOperation === "/") {
      MemoryCurrentNumber /= parseFloat(localMemoryOperation);
    } else if (MemoryPendingOperation === "**") {
      MemoryCurrentNumber **= parseFloat(localMemoryOperation);
    } else {
      MemoryCurrentNumber = parseFloat(localMemoryOperation);
    }
    display.value = +MemoryCurrentNumber.toFixed(10);
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
document.querySelector(".joke").onclick = function () {
  document.querySelector(".calc").classList.add("hidden");
  document.querySelector(".how-work").classList.add("hidden");
  document.querySelector(".alert").classList.add("visible");
};
document.querySelector(".how-work").onclick = function () {
  document.querySelector(".examples").classList.remove("hidden");
};
document.querySelector(".close").onclick = function () {
  document.querySelector(".examples").classList.add("hidden");
};
