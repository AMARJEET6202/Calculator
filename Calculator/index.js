const display = document.getElementById("display");
function appendToDisplay(input){
    display.value +=input;
}
function clearDisplay(){
    display.value = "";
    console.log("clear")

}
function calculate(){
    try{
        display.value =eval(display.value);

    }
    catch(error){
        display.value="error";
    }
    

}