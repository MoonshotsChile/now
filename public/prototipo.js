

window.onload=function(){

    /*
 
    var buttonfake = document.getElementById("buttonfake"); 
  
    buttonfake.addEventListener("click", handler);
    */

}


function handler() {
    var lighbox = document.getElementById("lightbox")
    lighbox.style.display = "block";
}

function closeLighbox(result){
    alert(result);
}

function goToThePage(
    result,
    username,
    holder_type,
    institution_id
    ){
        window.location='/hola?result='+result+
        '?username='+username+
        '?holder_type='+holder_type+
        '?institution_id='+institution_id
}