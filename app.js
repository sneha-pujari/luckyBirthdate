function calc() {
    var userinput = document.getElementById("DOB").value;
    var dob = new Date(userinput);
    if(userinput==null || userinput=='') {
      document.getElementById("message").innerHTML = "**Choose a date please!";  
      return false; 
    } else {
    
   var yr= dob.getFullYear();
   var mnt = dob.getMonth() + 1;
   var dt = dob.getDate();

   sumy = 0;
while (yr) {
   sumy += yr % 10;
   yr = Math.floor(yr / 10);
}

summ = 0;
while (mnt) {
   summ += mnt % 10;
   mnt = Math.floor(mnt / 10);
}

sumd = 0;
while (dt) {
   sumd += dt % 10;
   dt = Math.floor(dt / 10);
}

sum = sumy+summ+sumd;
var luck = document.getElementById("num");
console.log(luck.value)
var lu = luck.value;
if(sum % lu == 0){
    txt = "Luckyy!!"
    var t = document.getElementById("dpi");
    t.style.display = "flex";

 //   document.
}
else{
    txt="So sorry! No luck here!"
    var x = document.getElementById("dpi");
    x.style.display = "none";
}
console.log("Total of DOB  "+sum);
console.log("Total of y "+sumy);
console.log("Total of m "+summ);
console.log("Total of D "+sumd);


console.log(dob.getTime())
    console.log(dob.getFullYear())
    console.log(dob.getMonth() + 1)
    console.log(dob.getDate())
var h = document.getElementById("result")
h.innerHTML = txt;
console.log("txt "+txt)


    
   
}
}
