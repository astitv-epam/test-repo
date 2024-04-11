var cnt = 0;
function myFunc() {
    cnt++;
    document.getElementById("content").innerHTML += "<button>Button " + cnt + "</button><br>";
}

function jsonToText() {
    let jobj = '{"firstName":"Lol", "lastName":"lmao"}';
    let obj = JSON.parse(jobj);

    document.getElementById("content").innerHTML = obj.firstName+" "+obj.lastName;
}