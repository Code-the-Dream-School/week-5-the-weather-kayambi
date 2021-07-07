
const button  = document.querySelector(".button")
const  inputValue  = document.querySelector(".inputValue")
const  name  = document.querySelector(".name");
const  country = document.querySelector(".country");
const inforSevenDays = document.getElementById('info');
const newDaysList = document.getElementById('newDaysList');
const description = document.querySelector('.desc');
const temp = document.querySelector('.temp')
const myData = document.getElementById("data");

// FETCH FUNCTION
button.addEventListener('click', function(){ 


   var post;
   // Call the API
   fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputValue.value}&appid=74c2eda2bb799d7a7aa09ac35d429d03`)
   .then(function (response) {
     if (response.ok) {
       return response.json();
     } else {
       return Promise.reject(response);
     }
   }).then(function (data) {
   
     // Store the post data to a variable called Post
     post = data;
     console.log(post);
     name.innerHTML = `<p>City:${data.name} </p>`;
     country.innerHTML = `<p>Country:${data.sys.country}</p>`
     description.innerHTML = `<p> Weather: ${data.weather[0].description}<p>`
   
     // Fetch another API
    return fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${post.coord.lat}&lon=${post.coord.lon}&units=imperial&exclude={minutely,hourly}&appid=7432c602e487c2cf5ba43b3f4ea7e8d6`);
   
   }).then(function (response) {
     if (response.ok) {
       return response.json();
     } else {
       return Promise.reject(response);
     }
   }).then(function (data) {

    // Extract values from the table header 

      li =`
        <tr>
        <th>Day</th>
        <th>Max</th>
        <th>Min</th>
        <th>Weather</th>
        </tr>
            `;

     //  loop through an the sevendays weather Data and output the result

          for (let i=0; i < data.daily.length; i ++){
            li +=`
            <tr>
            <td>${i}</td>
            <td>${data.daily[i].temp.min}</td>
            <td>${data.daily[i].temp.max}</td>
            <td>${data.daily[i].weather[0].main}</td>
            </tr>
              `;
            
            }
                     
                  newDaysList.innerHTML =li;

   })
  
                 
   });

