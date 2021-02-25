var result = document.getElementById("result").value;
var link_id = document.getElementById("link_id").value;
var username = document.getElementById("username").value;
var holder_type = document.getElementById("holder_type").value;
var institution_id = document.getElementById("institution_id").value;
window.parent.goToThePage(
    result,
    link_id,
    username,
    holder_type,
    institution_id
    );