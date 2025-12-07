//hämta element genom olika DOM-funktioner

//checkbox hämtas från getElementById
const checkbox = document.getElementById("divStyle");

//textfälten hämtas från getElementsByClassName
const textFields = document.getElementsByClassName("textfield");

//knapp hämtas via querySelector
const removeButton = document.querySelector("#removeBtn");

//hämta Div via getElementById
const outputDiv = document.getElementById("outputDiv");

//funktionsdeklaration

//logga e.target
function handleInputEvent(e) {
  console.log("Event target:", e.target);
  //hämta name från target
  const targetName = e.target.name;
  console.log("Elementets namn:", targetName);
  //om det är content, skriv värdet till diven
  if (targetName === "content") {
    outputDiv.innerHTML = e.target.value;
  }
}

//eventlyssnare

//input och blur på textfälten
Array.from(textFields).forEach((field) => {
  field.addEventListener("input", handleInputEvent);
  field.addEventListener("blur", handleInputEvent);
});

//checkbox
//ändra bakgrundsfärg på diven
checkbox.addEventListener("change", () => {
  const colorValue = document.getElementById("color").value;
  outputDiv.style.backgroundColor = colorValue;
});

//knapp
//ta bort diven från DOM
removeButton.addEventListener("click", () => {
  outputDiv.remove();
  console.log("Div togs bort från DOM.");
});
