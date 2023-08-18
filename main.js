var elMainForm = document.querySelector(".form");
var elInputBefore = elMainForm.querySelector(".first-input");
var elInputAfter = elMainForm.querySelector(".last-input");
var elRemoveBefore = document.querySelector(".remove-before");
var elRemoveAfter = document.querySelector(".remove-after");
var elMainList = document.querySelector(".list");

var arr = ["olma", "nok", "uzum"];

function myFunction() {

    for (var iterator of arr) {
        var newItem = document.createElement("li");
        
        newItem.textContent = iterator;
        elMainList.appendChild(newItem);
    }
}

elMainForm.addEventListener("submit", function(evt) {
    evt.preventDefault();
    
    elMainList.innerHTML = "";

    var elInputBeforeVal = elInputBefore.value;
    var elInputAfterVal = elInputAfter.value;

    if(!elInputBeforeVal == '') {
        arr.unshift(elInputBeforeVal);
    }
    if(!elInputAfterVal == '') {
        arr.push(elInputAfterVal);
    }    
    
    myFunction();
    
})

console.log(arr);
elRemoveBefore.addEventListener("click", function() {
    elMainList.innerHTML = ""
    arr.shift();
    myFunction();
})
elRemoveAfter.addEventListener("click", function() {
    elMainList.innerHTML = ""
    arr.pop();
    myFunction();
}); 


myFunction()