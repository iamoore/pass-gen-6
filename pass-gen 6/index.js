const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let txtBlnk1 = document.getElementById("txtblnk1")
let txtBlnk2 = document.getElementById("txtblnk2")
//let ranNum = Math.floor(Math.random() * characters.length)


function randomPass(){
    let password1 = ""
    let password2 = ""
    for(let i = 0; i < 15; i++){
        let ranNum1 = Math.floor(Math.random() * characters.length);  
        password1 += characters[ranNum1];
    }
    for(let i = 0; i < 15; i++){
        let ranNum2 = Math.floor(Math.random() * characters.length);  
        password2 += characters[ranNum2];
    }
   txtBlnk1.textContent = password1;
   txtBlnk2.textContent = password2;
}



