//create an event listener for the element with the id of nightlight
document.getElementById("nightlight").addEventListener("click", function(){

    console.log("event listener");

    //set up a style element to write our changes to
    var sheet = document.createElement('style');

    console.log("document.cookie: " + document.cookie);

    if(document.cookie.includes("nightlight=light") || document.cookie === "") {

        console.log("document.cookie: " + document.cookie);

        //change the text of the element that we clicked
        document.getElementById("nightlight").innerHTML = "Light";

        //change the background and text colors of the html
        sheet.innerHTML = "body { background-color: #222222; color: #ffffff; }";
        document.body.appendChild(sheet);

        //set a cookie so we know which mode we're in globally
        document.cookie = "nightlight=dark";

    }else if(document.cookie.includes("nightlight=dark")) {

        console.log("document.cookie: " + document.cookie);

        //change the text of the element that we clicked
        document.getElementById("nightlight").innerHTML = "Dark";

        //change the background and text colors of the html
        sheet.innerHTML = "body { background-color: #ffffff; color: #000000; }";
        document.body.appendChild(sheet);

        //set a cookie so we know which mode we're in globally
        document.cookie = "nightlight=light";
    }
});