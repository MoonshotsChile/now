var result = document.getElementById("result").value;
var username = document.getElementById("username").value;
var holder_type = document.getElementById("holder_type").value;
var institution_id = document.getElementById("institution_id").value;
window.parent.goToThePage(
    result,
    username,
    holder_type,
    institution_id
    );