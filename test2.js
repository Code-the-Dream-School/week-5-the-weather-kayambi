const button  = document.querySelector(".button")
const  inputValue  = document.querySelector(".inputValue")
const  name  = document.querySelector(".name");
const  country = document.querySelector(".country");
let desc  = document.querySelector(".desc");  
let temp = document.querySelector(".temp");
let date = document.querySelector(".date");
// let lat = position.coords.latitude;
// let long = position.coords.longitude;
// let city = "nam"; 


// ------------------------------------------
// button.addEventListener('click', function(){

function fetchData(url) {
  return fetch(url)
          //  .then(checkStatus)  
           .then(res => res.json())
           .catch(error => console.log('Looks like there was a problem!', error))
}
button.addEventListener('click',generateWeatherForecast(data))




Promise.all([

  fetchData(`https://api.openweathermap.org/data/2.5/weather?q=oakland&appid=74c2eda2bb799d7a7aa09ac35d429d03`),
  fetchData(`https://api.openweathermap.org/data/2.5/onecall?lat=42.67&lon=83.4&exclude={minutely,hourly}&appid=7432c602e487c2cf5ba43b3f4ea7e8d6`)
  // fetchData(`https://api.openweathermap.org/data/2.5/onecall/timemachine?lat={lat}&lon={lon}&dt={time}&appid=7432c602e487c2cf5ba43b3f4ea7e8d6`)
]).then(data => 
  console.log(data))
  
  // {
  const weatherForcast = data[0].coord;
  const daysForcast = data[1];
  
  generateWeatherForecast(weatherForcast);
  generatedaysForecast(daysForcast);
// });

// ------------------------------------------
//  HELPER FUNCTIONS
// ------------------------------------------

function checkStatus(response) {
  if (response.ok) {
    return Promise.resolve(response);
  } else {
    return Promise.reject(new Error(response.statusText));
  }
}


function generateWeatherForecast(data) {

  name.innerHTML = `<p>City : ${data.name} </p>`;
  country.innerHTML = `<p>Country : ${data.sys.country}</p>`
  desc.innerHTML = `<p> Weather Desccription: ${data['weather'][0]['description']}<p>`;
  temp.innerHTML=`<p> Current Temperature: ${data['main']['temp']}<span>•c</span></p>`;

}

// function generatedaysForecast(){

//   //  Days will go here

// }



 

// const button  = document.querySelector(".button");
// const  inputValue  = document.querySelector(".inputValue");
//    let lat = position.coords.latitude;
//     let long = position.coords.longitude;

// button.addEventListener('click', function(){

//   fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}lon=${long}
//   &exclude={minutely,hourly}&appid=7432c602e487c2cf5ba43b3f4ea7e8d6`)
//   .then(response => response.json())
//   .then(data => {

//     console.log(data)

//     //  I want to map days first 
    

//   });
// });
      
