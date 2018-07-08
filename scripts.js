function hideElements(element) {
    var x = document.getElementsByClassName(element);
    for (var i = 0; i < x.length; i++)
        x[i].style.display = "none";
}
// try to do a generic method to all element types, or at least the more common ones
// like block-level, inline, table...
function showElements(element) {
    var x = document.getElementsByClassName(element);
    for (var i = 0; i < x.length; i++)
        x[i].style.display = "table";
}
function changeText(elementID) {
    var x = document.getElementById(elementID).innerHTML = "https://www.fct.unl.pt";
}
// doesn't have to be all functions. Also executes script statements
// e.g. document.getElementById("demo").innerHTML = "Hello World!";
