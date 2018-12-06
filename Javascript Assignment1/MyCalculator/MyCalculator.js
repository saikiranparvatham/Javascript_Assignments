function fun(){
    
    var x=prompt("please select one option\n 1. Add \n 2. Subtract\n3. Multiply\n4. Divide\n5. Exponent\n6. Mean\n7. Quit\n");
    
        
    
    switch(x)
    {
        case "1":
        var y=prompt("enter first number");
        var z=prompt("enter second number");
        if(isNaN(y)==true||isNaN(z)==true)
        {
            alert("not a number");
        }
        else {
        var num1 = parseInt(y);
        var num2 = parseInt(z);
        document.getElementById("op").value=num1+num2;
        }
        break;
        case "2":
        var y=prompt("enter first number");
        var z=prompt("enter second number");
        if(isNaN(y)==true||isNaN(z)==true)
        {
            alert("not a number");
        }
        else {
        var num1 = parseInt(y);
        var num2 = parseInt(z);
        document.getElementById("op").value=num1-num2;
        }
        break;
        case "3": 
        var y=prompt("enter first number");
        var z=prompt("enter second number");
        if(isNaN(y)==true||isNaN(z)==true)
        {
            alert("not a number");
        }
        else {
        var num1 = parseInt(y);
        var num2 = parseInt(z);
        document.getElementById("op").value=num1*num2;
        }
        break;
        case "4":
        var y=prompt("enter first number");
        var z=prompt("enter second number");
        if(isNaN(y)==true||isNaN(z)==true)
        {
            alert("not a number");
        }
        else {
        var num1 = parseInt(y);
        var num2 = parseInt(z);
        document.getElementById("op").value=num1/num2;
        }
        break;
        case "5":
        var y=prompt("enter base");
        var z=prompt("enter exponent");
        if(isNaN(y)==true||isNaN(z)==true)
        {
            alert("not a number");
        }
        else {
        var base = parseInt(y);
        var exponent = parseInt(z);
        document.getElementById("op").value=Math.pow(base,exponent);
        }
        break;
        case "6":
        var e=0;
        var i=0;
        while((q=prompt("enter the numbers to find mean"))!="***" && isNaN(q)!=true)
        {
            var w=parseInt(q);
            
            e=e+w;
            i++;

        }
        document.getElementById("op").value=e/i;
        
        break;
        case "7":
        document.getElementById("op").value=num1+num2;
        break;
        default:
        alert("choose correct option");
       
    }
    
}