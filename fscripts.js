// this deal with forms functions and actions
var counter = 0;
function addField() {
    //increment the counter by 1
    counter++;
    // get the element related to the form
    var formContainer = document.getElementById("formContainer");
    // create elments for the form
    var divField = document.createElement("div");
    divField.classList.add("fieldForm");

    var labelField = document.createElement("label");
    labelField.textContent = `Field ${counter}:`;
    var inputField = document.createElement("input");
    inputField.type = "text";
    inputField.name = `fieldForm${counter}`;

    //add fields
    divField.appendChild(labelField);
    divField.appendChild(inputField);

    formContainer.appendChild(divField);

}
function closeWindow() {
    window.close();
}
//closeWindow.addEventListener("click", closeWindow);