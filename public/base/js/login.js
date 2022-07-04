// route 
var rToLogin = server + "auth/user/login";
// vue object 
var appLogin = new Vue({
    el : '#divLogin',
    data : {

    },
    methods : {
        loginAtc : function()
        {
            let username = document.querySelector("#txtUsername").value;
            let password = document.querySelector("#txtPassword").value;
            let config =  {headers: {'Content-Type': 'application/x-www-form-urlencoded', 'Accept' : '*/*'}}
            let ds = {'username':username, 'password':password}
            $.post(rToLogin, ds, function(data){
                let status = data.status;
                if(status === 'no_user'){
                    pesanUmumApp('warning','No user !!!','Tidak ada user terdaftar ...');
                }else if(status === 'wrong_password'){
                    pesanUmumApp('warning', 'Wrong password ...', 'Username / Password salah !!!');
                }else{
                    document.cookie = "ADA_TOKEN="+data.token;
                    window.location.assign('/dashboard');
                }
            });
            // axios.post(rToLogin, ds, config).then(function(res){
            //     console.log(res.data);
            // });
        }
    }
});
// inisialisasi 
document.querySelector("#txtUsername").focus();
function pesanUmumApp(icon, title, text)
{
  Swal.fire({
    icon : icon,
    title : title,
    text : text
  });
}