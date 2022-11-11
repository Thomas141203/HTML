var prix=0;
var txt="";

function nom(choix){
	var ch=unescape("Entrée");
	switch(choix.name){
	case "p2": ch="Plat";
	break;
	case "p3": ch="Dessert";
	break;
	case "p4": ch="Boisson";
	}
	return ch;
}

function ajoute(choix){
	var pos=choix.selectedIndex;
	var pr=parseFloat(choix[pos ].value);
	prix+=eval(pr);
	var s=nom(choix);
	while (s .length < 15) s+=" ";
	s=s+": "+pr;
	txt=txt+s+"\n";
}

function calcul(){
	txt="Prix du repas : \n";
	prix=0;
	if (document.forms ["formu"].p1.selectedIndex==0 || document.forms ["formu"].p2.selectedIndex==0 ||document.forms ["formu"].p3.selectedIndex==0)
		txt+="Vous n'avez pas tout choisi";
	else {
		ajoute(document.forms ["formu"].p1);
		ajoute(document.forms ["formu"].p2);
		ajoute(document.forms ["formu"].p3);
		ajoute(document.forms ["formu"].p4);
		var s="-";
		while (s .length < 22) s+="-";
		txt=txt+s+"\n";
		s="Total";
		while (s .length < 15) s+=" ";
		txt=txt+s+": "+prix+unescape("%u20AC");
		}
document.forms ["formu"].commande.value=txt;
}

function init() {
	document.forms ["formu"].p1.selectedIndex=0;
	document.forms ["formu"].p2.selectedIndex=0;
	document.forms ["formu"].p3.selectedIndex=0;
	document.forms ["formu"].p4.selectedIndex=0;
	document.forms ["formu"].commande.value="Prix du repas :";
}