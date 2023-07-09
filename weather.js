// Weather App API key and URL
const ApiKey="a1c16b980342059f65ed412c58a6d028";
const ApiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

//DOM elements
const searchbox=document.querySelector(".search input");
const searchbtn=document.querySelector(".search button")
const weatherIcon=document.querySelector(".weather-icon")

//Function to check weather of a City 
async function checkweather(city){
    const response=await fetch(ApiUrl+city+`&appid=${ApiKey}`);

    if(response.status==404){
        document.querySelector(".error").style.display="block";
        document.querySelector(".weather").style.display="none";
    }

    else{
        var data=await response.json();

    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp").innerHTML=Math.round(data.main.temp )+ "°C";
    const descriptionElement = document.querySelector(".description");
    const description = data.weather[0].main;

    //Set weather Icon based on weather condition
    document.querySelector(".humidity").innerHTML=data.main.humidity +"%";
    document.querySelector(".wind").innerHTML=data.wind.speed +" kmph";
    if(data.weather[0].main=="Clouds"){
        weatherIcon.src="images/clouds.png";
    }
    else if(data.weather[0].main=="Rain"){
        weatherIcon.src="images/rain.png";
    }
    else if(data.weather[0].main=="Clear"){
        weatherIcon.src="images/clear.png";
    }
    else if(data.weather[0].main=="Drizzle"){
        weatherIcon.src="images/drizzle.png";
    }
    else if(data.weather[0].main=="Mist"){
        weatherIcon.src="images/mist.png";
    }
    else if(data.weather[0].main=="Haze"){
        weatherIcon.src="images/haze.png";
    }
    else if(data.weather[0].main="Snow"){
        weatherIcon.src="images/snow.png";
    }
   
    
    document.querySelector(".weather").style.display="block";
    document.querySelector(".error").style.display="none";
}
}

//Event listener for search button click
searchbtn.addEventListener("click",()=>{
    checkweather(searchbox.value);
})       