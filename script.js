// rySelector(".task").innerHTML=text.value 
function getValue() {
    const input = document.getElementById("myInput");
    const text = input.value;
    document.querySelector(".tasks").innerHTML=input.value
    console.log("You typed:", text);
    input.value = "";
  }
  