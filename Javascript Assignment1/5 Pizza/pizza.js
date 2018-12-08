var count=0;
var deliveryFee=0;
var flag1;
var flag2;
var flag3;
var flag4=false;
var method;

function countCheckboxes()
{

	
	var name=document.getElementById("name").value;
	var email=document.getElementById("email").value;
	var address=document.getElementById("address").value;

	var inputElems = document.getElementsByTagName("input");
	
	for (var i=0; i<inputElems.length; i++) {
	  if (inputElems[i].type === "checkbox" && inputElems[i].checked === true) {
		count++;
		
		}
	}
	if(count < 1){
	  alert("select atleast one topping");
	  flag1=false;
	}
	else if(count>=1){
		flag1=true;
	}

		if (name=="")
		{
		flag2=false;
		alert("Enter the name");
		}
		else
		{
		flag2=true;
		}

			if(email=="")
			{
				flag3=false;
				alert("Enter the email");
			}
			else
			{
				flag3=true;
			}

			if(document.getElementById("delivery").checked)
				{
					method=document.getElementById("delivery").value;
						flag4=true;
				}
				else if(document.getElementById("pickup").checked)
				{
					 method=document.getElementById("pickup").value;
					 flag4=true;
				}
				else
				{
					alert("select any method ");
				}
	
		if(flag1 && flag2 && flag3)
		document.getElementById("summary").disabled=false;
}
function showSummary()
{

	var name=document.getElementById("name").value;
	var email=document.getElementById("email").value;
	var address=document.getElementById("address").value;


	document.getElementById("tname").innerHTML=name;
	document.getElementById("temail").innerHTML=email;
	document.getElementById("taddress").innerHTML=address;

	var base=10;
	if(delivery.checked===true)
	 deliveryFee=5;
	else
	deliveryFee=0;
	
	var tip_percent=document.getElementById("tip").value;
	var tip=(tip_percent/100)*(base+(1.5*count)+deliveryFee);
	total=(base+(1.5*count)+deliveryFee)+tip;
	
	document.getElementById("tipamt").innerHTML=tip;
	document.getElementById("total").innerHTML=total;
	document.getElementById("tmethod").innerHTML=method;

	

	
	var x=document.getElementById("table");
	x.style.display="block";
}

