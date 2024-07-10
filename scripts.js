//First we define variable to hold value for the elements

var title = document.getElementById("title");
var subtitle = document.getElementById("subtitle");
var description = document.querySelector(".description");
var btnChange = document.getElementById("btnChange");
var btnRefresh = document.getElementById("btnRefresh");

//Second define the event, that an element does
btnChange.addEventListener("click", function () {
    title.innerHTML = "If you got here.....";
    subtitle.innerHTML = "You were able to implement some javascript code";
    description.innerHTML = "And all you did is appearing on the screen after you click on the button";
    title.classList.toggle("highlight");
});
//create a function to refresh page
function handleClick() {
    window.location.reload();
}
//call the function when click on button
btnRefresh.addEventListener("click", handleClick);

// handling selectors page scripts
function demoSelectors() {
    var elementById = document.getElementById("exampleId");
    elementById.style.color = "blue";
    console.log("Selected By ID:", elementById);

    var elementByClass = document.querySelectorAll(".exampleClass");
    elementByClass.forEach(element => {
        element.style.backgroundColor = "yellow";
        console.log("Selected By Class:", element);
    });

    var elementByTag = document.querySelectorAll("p");
    elementByTag.forEach(element => {
        element.style.fontWeight = "bold";
        console.log("Selected By Tag:", element);
    });

    var elementByQuery = document.querySelector(".paragraph");
    elementByQuery.style.fontsize = "20px";
    console.log("Selected By Query Selector:", elementByQuery);

    var elementByQueryAll = document.querySelectorAll(".paragraph");
    elementByQueryAll.forEach(element => {
        element.style.textDecoration = "underline";
        console.log("Selected By Query Selector All:", element);

    });
}

// call function to close page after
var linkIndex = document.getElementById("linkIndex");
function closeWindow() {
    linkIndex = window.close("selectors.html");
}
linkIndex.addEventListener("click", closeWindow);

// this deal with forms functions and actions
var linkForms = document.getElementById("linkForms");
//create a counter and iniciate as zero
//create a function to add fields
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
linkForms.addEventListener("click", addField);
