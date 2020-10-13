function btn_click(val)
{
    document.getElementById("screen").value+=val;
}
function clearDisplay()
{
    document.getElementById("screen").value="";
    console.log("hai");
}

function equal_click(val)
{
    var text=document.getElementById("screen").value;
    var result=eval(text);
    document.getElementById("screen").value=result;
}