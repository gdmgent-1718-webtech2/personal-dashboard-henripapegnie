 // code Json 
 const getJSON = function(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'json';
    xhr.onload = function() {
      var status = xhr.status;
      if (status === 200) {
        callback(null, xhr.response);
      } else {
        callback(status, xhr.response);
      }
    };
    xhr.send();
};

// weer gent

getJSON("http://api.openweathermap.org/data/2.5/weather?q=ghent,belgium&APPID=e031fa905408ce8ec319900a8851fe57", function(error,data) {

    if(error) {
        console.log(error);
        return false;
    }
    else{
        document.getElementById('weer_gent').innerHTML="In Mariakerke is het momenteel" + (parseInt(data["main"]["temp"])-273) + "°C.";
    }

});

// weer ruien

getJSON("http://api.openweathermap.org/data/2.5/weather?q=ruien,belgium&APPID=e031fa905408ce8ec319900a8851fe57", function(error,data) {

    if(error) {
        console.log(error);
        return false;
    }
    else{
        document.getElementById('weer_ruien').innerHTML="In Ruien is het momenteel" + (parseInt(data["main"]["temp"])-273) + "°C.";
    }

});

//nieuws wallstreet

getJSON("https://newsapi.org/v2/everything?q=bitcoin&sortBy=publishedAt&apiKey=9ac2320934ad4833a64832e758865700", function(error,data) {

if(error) {  
    console.log(error);
    return false;
}
else{
    let random = Math.floor((Math.random() * 8000) + 1);
    document.getElementById("nieuws_wallstreet1").innerHTML= data["articles"][random]["title"];
    document.getElementById("nieuws_wallstreet2").innerHTML= data["articles"][random]["description"];
    document.getElementById("nieuws_wallstreet3").href= data["articles"][random]["url"];
}
});

//Nieuws techcrunch

getJSON("https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=9ac2320934ad4833a64832e758865700", function(error,data) {

if(error) {  
    console.log(error);
    return false;
}
else{
    let random = Math.floor((Math.random() * 10) + 1);
    document.getElementById("nieuws_techcrunch1").innerHTML= data["articles"][random]["title"];
    document.getElementById("nieuws_techcrunch2").innerHTML= data["articles"][random]["description"];
    document.getElementById("nieuws_techcrunch3").href= data["articles"][random]["url"];
}
});

//random joke

getJSON("https://icanhazdadjoke.com/slack", function(error,data) {

    if(error) {
        console.log(error);
        return false;
    }
    else{
        document.getElementById('joke').innerHTML=data["attachments"][0]["fallback"];
    }

});

//quote van de dag

getJSON("http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1", function(error, data) {

    if(error) {  
        console.log(error);
        return false;
    }
    else{
        document.getElementById("quote1").innerHTML= data[0]["title"];
        document.getElementById("quote2").innerHTML= data[0]["content"];
    }
});

//Random dog picture

getJSON("https://dog.ceo/api/breeds/image/random", function(error, data) {

    if(error) {  
        console.log(error);
        return false;
    }
    else{
        document.getElementById("dog").src= data ["message"];
        
    }
});



