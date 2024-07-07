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
    var elementById = document.getElementById(exampleId);
    elementById.style.color = "blue";
    console.log("Selected By ID:", elementById);
}
var elementByClass = document.querySelectorAll(".exampleClass");
elementByClass.forEach(element => {
    element.style.backgroundcolor = "yellow";
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

