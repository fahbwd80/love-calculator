function love(){
var name1 = document.getElementById("NameOne").value;
var name2 = document.getElementById("NameTwo").value;
if(name1.lenght<=2){
    alert("Enter at least 3 character");
}
if(name2.lenght<=2){
    alert("Enter at least 3 character");
}
else{
    var random = Math.floor(Math.random()*100)
    document.getElementById("print").innerHTML = name1 + " and " + name2 + " = "  +random + "%" + " of love"
    if(random<=10 || random<=50){
        document.getElementById("statement").innerHTML = "Good Ralationship";
    }
    else if(random<=51 || random<=100){
        document.getElementById("statement").innerHTML = "Lovely Ralationship";
    }
 }
}