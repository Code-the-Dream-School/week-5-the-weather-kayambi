
const button  = document.querySelector(".button")
const  inputValue  = document.querySelector(".inputValue")
const  name  = document.querySelector(".name");
const  country = document.querySelector(".country");
const inforSevenDays = document.getElementById('info');
const inputVal= inputValue.value;


let latitude =  document.getElementById('info');
let longitude = document.getElementById('lon');
let minTemp = document.getElementById('temp');
let maxTemp = document.getElementById('max');

let newDaysList = document.getElementById('newDaysList');

// const lat;
// const lon;  


// let weather = document.querySelector(".")

// FETCH FUNCTION
// Get Weather Data


// coursesBtn.addEventListener('click',generateCourseData)
// function  generateCourseData (data){


  button.addEventListener('click', function(){
        

  fetch(`https://api.openweathermap.org/data/2.5/weather?q=london&appid=74c2eda2bb799d7a7aa09ac35d429d03`)
       .then(res =>{
         if(res.status === 200){
           return res.json()
         }else{
           alert("city was not found")
           throw 'error';

         }
       }).then(data =>
        // console.log(data))
        
        {

        name.innerHTML = `<p>City:${data.name} </p>`;
        country.innerHTML = `<p>Country:${data.sys.country}</p>`
        desc.innerHTML = `<p> Weather Desccription: ${data['weather'][0]['description']}<p>`;
        temp.innerHTML=`<p> Current Temperature: ${data['main']['temp']}<span>•c</span></p>`;
      
      });

      fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=37.8044&lon=122.2712&exclude={minutely,hourly}&appid=7432c602e487c2cf5ba43b3f4ea7e8d6`)
      
           .then(response => response.json())
           .then(data =>{ 

            console.log(data)

          let li =`
            <tr>
            <th>Day</th>
            <th>Max</th>
            <th>Min</th>
            <th>Weather</th>
            </tr>
                 `;
                for (let i=0 ; i < data.daily.length ; i ++) {

                 li +=`
                 <tr>
                 <td>${data}</td>
                 <td>${data.daily[0].temp.min}</td>
                 <td>${data.daily[0].temp.max}</td>
                 <td>${data.daily[0].weather[0].description}</td>
                 </tr>
                   `;
                }
                newDaysList.innerHTML = li;
          }); 


        });
   






  
 