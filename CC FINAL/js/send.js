//sends user to spotify log-in link
//Using implicit grant Flow *Does not use client Secret...no server app needed*
//https://developer.spotify.com/documentation/general/guides/authorization-guide/
//https://patrickmcalinden.github.io/spotfiy-stats/stats.html
var client_id = 'd51e2ab42e9a440f97ed3651601e7a76';
var client_secret = 'https://accounts.spotify.com/authorize'; 
var redirect_uri = 'http://127.0.0.1:5500/index.html'; 
var joiner = "%20"

var scopes = ["user-top-read"]
var redirect_url = scopes.join(joiner);

window.onload = function(){
    document.getElementById('log-in').onclick = function() {
        window.location = `${client_secret}?client_id=${client_id}&redirect_uri=${redirect_uri}&scope=${scopes}&response_type=token&show_dialog=true`;
    }
}