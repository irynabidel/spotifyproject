//takes data from address bar and extract necessary info 
function loadData(){
    var hash = window.location.hash.substr(1);
    var params = hash.split("&");
    //taking seperated statments spliting them at "=" and storing left as key and right as value
    var splitParams = params.reduce((accumulator,currentValue) => {
        var [key, value] = currentValue.split("=");
        accumulator[key] = value;
        return accumulator;
    }, {});
    return splitParams;
}
//taking data from loading and saving into local storage (nothing account sensitive)...and making sure there is data to be loaded...if not user is sent back to login page (fixes issues of expired tokens)
function saveData(){
    var tokenData = loadData();
    console.log(tokenData.hasOwnProperty('access_token'));
    if (tokenData.hasOwnProperty('access_token')){
        const {access_token, token_type, expires_in} = tokenData;
        localStorage.clear();
        localStorage.setItem("accessToken", access_token);
        localStorage.setItem("tokenType", token_type);
        localStorage.setItem("expiresIn", expires_in);
    }
}
//Sennding first api request to get basic user info (for greeting)
async function getUserId(){
    var accessToken = localStorage.getItem("accessToken");
    const spotifyEndPoint = "https://api.spotify.com/v1/me";
    //sending proper request params
    const result = await fetch(spotifyEndPoint , {
        method: 'Get',
        headers:   {'Authorization' : 'Bearer ' + accessToken}
    });
    //parse though recieved JSON and display correct info
    const userId =  await result.json();
    document.getElementById("username").innerText = userId.display_name;
}
//All other funcitons follow same format...only params in spotifyEndPoint are different
async function getTopTrackMonth(){
    var accessToken = localStorage.getItem("accessToken");
    const spotifyEndPoint = "https://api.spotify.com/v1/me/top/tracks?time_range=short_term&limit=1&offset=0";
    const result = await fetch(spotifyEndPoint , {
        method: 'Get',
        headers:   {'Authorization' : 'Bearer ' + accessToken}
    });
    const topTrackMonth= await result.json();
    document.getElementsByTagName("img")[0].src = topTrackMonth.items[0].album.images[1].url;
    document.getElementById("track-name-month").innerText = topTrackMonth.items[0].name;
    document.getElementById("track-artist-month").innerText = topTrackMonth.items[0].artists[0].name;
    return topTrackMonth;
}
async function getTopTrackSix(){
    var accessToken = localStorage.getItem("accessToken");
    const spotifyEndPoint = "https://api.spotify.com/v1/me/top/tracks?time_range=medium_term&limit=1&offset=0";
    const result = await fetch(spotifyEndPoint , {
        method: 'Get',
        headers:   {'Authorization' : 'Bearer ' + accessToken}
    });
    const topTrackSix= await result.json();
    document.getElementsByTagName("img")[1].src = topTrackSix.items[0].album.images[1].url;
    document.getElementById("track-name-six").innerText = topTrackSix.items[0].name;
    document.getElementById("track-artist-six").innerText = topTrackSix.items[0].artists[0].name;
    return topTrackSix;
}
async function getTopTrackYear(){
    var accessToken = localStorage.getItem("accessToken");
    const spotifyEndPoint = "https://api.spotify.com/v1/me/top/tracks?time_range=long_term&limit=1&offset=0";
    const result = await fetch(spotifyEndPoint , {
        method: 'Get',
        headers:   {'Authorization' : 'Bearer ' + accessToken}
    });
    const topTrackYear= await result.json();
    document.getElementsByTagName("img")[2].src = topTrackYear.items[0].album.images[1].url;
    document.getElementById("track-name-year").innerText = topTrackYear.items[0].name;
    document.getElementById("track-artist-year").innerText = topTrackYear.items[0].artists[0].name;
    return topTrackYear;
}

function download() {
    const download = document.getElementById("download");
    let image = document.querySelector("canvas").toDataURL("image/png")
                        .replace("image/png", "image/octet-stream");
    download.setAttribute("href", image);
}


//testing function response
window.onload = function(){
    loadData();
    saveData();
    getUserId();
    getTopTrackMonth();
    getTopTrackSix();
    getTopTrackYear();
}
