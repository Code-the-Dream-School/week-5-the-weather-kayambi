


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


  


  