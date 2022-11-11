var bol=0;
function init() {
	bol=0;
	document.forms ["form1"].fraisReels .selectedIndex =0;
	document.forms ["form1"].valeur.value=" ";
	document.forms ["form1"].netImp.value=0;
	document.forms ["form1"].nombre.value=1;
	document.getElementById("res").innerHTML="";
}

function calcul(){
	var idRes=document.getElementById("res");
	var revenu= parseFloat(document.forms ["form1"].netImp.value);
	var Nbpart= parseFloat(document.forms ["form1"].nombre.value);
	if(isNaN(revenu) || isNaN(Nbpart))
		alert("le revenu et/ ou le nombre de parts est incorrect, veuillez ressaisir une valeur");
	else{
		if(document.forms ["form1"].fraisReels .selectedIndex ==2 && !isNaN(document.forms ["form1"].valeur.value))
		{
			frais= parseInt(document.forms ["form1"].valeur.value);
			revenu=revenu-frais ;
			bol++;
		}
		else if(document.forms ["form1"].fraisReels .selectedIndex ==1 )
		{
			frais=parseInt(10*revenu/100);
			document.forms ["form1"].valeur.value= frais ;
			revenu=revenu*0.9;
			bol++;
		}
	if(revenu<9690)
		taxe=0;
		else if(revenu<26764)
			taxe = ((revenu*0.14)-(1356.60*Nbpart));
		else if(revenu< 151956)
			taxe =((revenu*0.30)-(5638.84*Nbpart));
			else if(revenu<151956)
				taxe = ((revenu*0.41)-(13531.78*Nbpart));
				else taxe =((revenu*0.45)-(19610.02*Nbpart));
	if(bol==1)
		if (parseInt(taxe)<0 )
			idRes .innerHTML+=" 0 Euros.";
				else idRes .innerHTML+=parseInt(taxe)+ " Euros.";
		}
}