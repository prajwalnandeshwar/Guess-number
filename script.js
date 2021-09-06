var guess = Math.floor((Math.random()*100)+1)

function guessnumber(){
    if(document.getElementById("in").value=='')
    {
        document.getElementById("out").innerHTML = "enter a number"
        return
    }

var num = parseInt(document.getElementById("in").value)
if(num > 100 || num <1){
document.getElementById("out").innerHTML = "Be In Range"
return
}
if(num===guess){
    document.getElementById("out").innerHTML = "YOU GOT IT!!"
}
else if(num<guess){
    document.getElementById("out").innerHTML = "Guess a greater number"
}
else{
        document.getElementById("out").innerHTML = "Guess a smaller number"
    }
}
