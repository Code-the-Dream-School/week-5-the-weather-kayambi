


  // another option that I would consider
  
  // function weatherData () {
  //      let key= '{key goes here}'
  //      fetch(`https://api.openweathermap.org/data/2.5/weather?q=San Francisco&appid=7432c602e487c2cf5ba43b3f4ea7e8d6`)
  //      .then(function(response){ return response.json() })  // convert to json 
  //     .then(function(data){
  //            getWeather(data);  // calling weather to my page   
  //      })
  //      .catch(function(){
  //        // display that the weather data do go eat them lol , then error message
  //      });
  // } 
  //  window.onload = function () {
  //    weatherData();
  //  }

  // function helper   

  // This function will take the weather data as a parameter and insert it into 
  // the description,temp and location div elements.

  // function getWeather (d) {
  //   var celcius = Math.round(parseFloat(d.main.temp) -273.15);
  //   var fahreinheit = Math.round(((parseFloat(d.main.temp)-273.15)*1.8)+32);
  //   var description = d.weather[0].description;

  //   document.getElementById('description').innerHTML=d.weather[0].description;
  //   document.getElementById('temp').innerHTML=celcius + '&deg';
  //   document.getElementById('location').innerHTML=d.name;  

  //   if (description.indexOf('rain') > 0) {
  //     document.body.className ='rainy'
        
  //     }else if (description.indexOf('cloud') > 0 ) {
  //       document.body.className = 'cloudy';
  //     }else if (description.indexOf('sunny') > 0 ){
  //       document.body.className = 'sunny';
  //     }else {
  //       document.body.className='clear';
  //     }
  //   }
  //   window.onload = function() {
  //     weatherData();
  //   } 
    // Adding Event listiner, getting data into EventListiner using object. 
    
    // searchBtn.addEventListener('click',  






// //  creating fetch function 

// feth(`https://api.openweathermap.org/data/2.5/weather?q=San Francisco&appid=7432c602e487c2cf5ba43b3f4ea7e8d6`) 
//      .then(res => res.json()) 
//      .the(data => console.log(data))



// //  Creating a reusable function  

// function fetchData(url){
//     return fetch(url)
//            .then(checkStatus)
//            .then(res => res.json())
//            .catch(error => console.log ('looks like the dog eaat your site', error))
// }

//     // Fetch All weather for 7 days and  it's geographic coordinate
//   Promise.all([
//   fetchData(`https://api.openweathermap.org/data/2.5/weather?q=San Francisco&appid=7432c602e487c2cf5ba43b3f4ea7e8d6`),
//   fetchData(`https://api.openweathermap.org/data/2.5/onecall?lat=37.77&lon=-122.42&exclude=minutely,hourly&appid=7432c602e487c2cf5ba43b3f4ea7e8d6`)

//   ])
//   .then(data => {

//     const weatherCoords = data[0].message;
//     const sevenDaysCall = data[1].message;

//     generateGeoCoords(weatherCoords);
//     generateSevenDaysData(sevenDaysCall);
   
//   })

//   //  Helper Functions 
//   //  checking the status 

//   function checkStatus (response){
//     if (response.ok) {
//       return Promise.resolve (response);

//     } else {
//     return Promise.reject(new Error(response.statustext));
//   }
//   }


//     //  function to generate data for geographical coordinate

//     function generateGeoCoords (data) { 

//       const geocords = `<input src='${data}' >
//       <p>I want my in put to be here of 
      
//       `;



//     }

//   //  function generatedata for seven days  to the html
  
//   function generateSevenDaysData (data) {

//   }


//   //  Event Listners  


  














  


  