
const sevenDayHost = "https://api.openweathermap.org/data/2.5/onecall?exclude=minutely,hourly&";
const weatherHost = "https://api.openweathermap.org/data/2.5/weather?q=";
const authLock = "appid=7432c602e487c2cf5ba43b3f4ea7e8d6";

var city = "name"; //input.value;
var lat, lon, forecastData;

// Build weather data url for api call to get lat and lon
function weatherURL() {
  return `${weatherHost}${city}&${authLock}`;
}

// Build forecast data url for api call to get seven forecast info
function forecastURL() {
  return `${sevenDayHost}&lat=${lat}&lon=${lon}&${authLock}`;
}

// // Global fetch function that creates a promise to return data.
async function getData(dataURL) {
  let response = await fetch(dataURL);
  return response.json();
}

// Returns seven day forecast data
function getForecastData(url) {
  return getData(url).then(data =>

    // console.log(data))
  // }
    
    {
    // Then set the forecastData variable to the data received
    forecastData = data;
 
  });
}





// // Returns weather data for lat and lon
function getAllData(url) {
  // first get lat and lon from weather api
  getData(url)
    .then(data => {
      // Once data is received, update global vars {lat and lon}
      lat = data.coord.lat;
      lon = data.coord.lon;
    })
    .then((displaycoords) => {
      function displaycoords(weather){

        return console.log(weather)
        

    const searchbox = document.querySelector(".search");

      searchbox.addEventListener('keypress',setQuery);
      function setQuery(event) {
      if (event.keyCode == 13) {
      getForecastData(searchbox.value);
      console.log(searchbox.value);
    }



      }
    }
  })
}



// {




      
        // return console.log(weather)
//       }
//     });
//   }
//   console.log("I am here")

//       // Once the lat and lon have been update, Call/Invoke the function to get the seven day forecast data
//       getForecastData(forecastURL());
//       console.log()

//     }).then((displayResults)=>{

//       function displayResults(weather){
//         return console.log(weather)
//       }

//     })
//     .then(() => { 


//   }

//     });

// }

// (getAllData(weatherURL()));

