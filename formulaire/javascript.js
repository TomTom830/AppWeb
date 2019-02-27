

function verifPseudo(champ)
{
    
   if(champ.value.length < 2 || champ.value.length > 25)
   {
      surligne(champ, true);
      return false;
   }
   else
   {
      surligne(champ, false);
      return true;
   }
}

function verifAge(champ){

   var regex = /[0-9]{1,3}/;

   if(!regex.test(champ.value))
   {
      surligne(champ, true);
      return false;
   }
   else
   {
      surligne(champ, false);
      return true;
   }

}

function verifNom(champ){

   var regex = /^[A-Z][a-z]{2,}/;

   if(!regex.test(champ.value))
   {
      surligne(champ, true);
      return false;
   }
   else
   {
      surligne(champ, false);
      return true;
   }

}

function surligne(champ, erreur)
{
   if(erreur)
      champ.style.backgroundColor = "#fba";
   else
      champ.style.backgroundColor = "";
}

function verifMail(champ)
{
   var regex = /^[a-zA-Z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/;

   if(!regex.test(champ.value))
   {
      surligne(champ, true);
      return false;
   }
   else
   {
      surligne(champ, false);
      return true;
   }
}

function F(){
    var i = document.getElementById("nom");
    var k = document.getElementById("prenom");
    var j = document.getElementById("email");
    var l = document.getElementById("pseudo");
    var m = document.getElementById("age");
   i.addEventListener("input",F)
   j.addEventListener("input",F)
   k.addEventListener("input",F)
   l.addEventListener("input",F)
   m.addEventListener("input",F)
    verifNom(i);
    verifNom(k);
    verifMail(j);
    verifPseudo(l);
    verifAge(m);
}

document.addEventListener( "DOMContentLoaded", F);




