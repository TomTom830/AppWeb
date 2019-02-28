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

   var regex = /^[A-Z][a-z]{2,}$/;

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

function Fct(){
   VerifGenerale();
} 

function VerifGenerale(){
   var nom = document.getElementById("nom");
   var prenom = document.getElementById("prenom");
   var email = document.getElementById("email");
   var pseudo = document.getElementById("pseudo");
   var age = document.getElementById("age");
   nom.addEventListener("input",VerifGenerale)
   prenom.addEventListener("input",VerifGenerale)
   email.addEventListener("input",VerifGenerale)
   pseudo.addEventListener("input",VerifGenerale)
   age.addEventListener("input",VerifGenerale)
   verifNom(nom);
   verifNom(prenom);
   verifMail(email);
   verifPseudo(pseudo);
   verifAge(age);
}

//document.addEventListener( "DOMContentLoaded", VerifGenerale);