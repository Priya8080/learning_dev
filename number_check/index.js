function checkNum(){
    let num = document.getElementById("textB").value;
    
    if(num === ""){
        document.getElementById("result").innerText = "Please Enter a number";
        return;
    }
    let newnum = Number(num);
    if(newnum%2 === 0 ){
        document.getElementById("result").innerText = "Even Number";
        if(newnum===2){
            document.getElementById("result").innerHTML ="Even Number</br>Prime Number"
        }
    }
    else if(newnum%newnum===0&& newnum%1===0){
        document.getElementById("result").innerText="Prime Number";
    }

}
