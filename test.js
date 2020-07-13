
const button  = document.querySelector(".button")
const  inputValue  = document.querySelector(".inputValue")
const  name  = document.querySelector(".name");
const  country = document.querySelector(".country");
let desc  = document.querySelector(".desc");  
let temp = document.querySelector(".temp");
let date = document.querySelector(".date");
let day = document.querySelector(".thDay");

// let weather = document.querySelector(".")

// FETCH FUNCTION
// Get Weather Data


  button.addEventListener('click', function(){
        

  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputValue.value}&appid=74c2eda2bb799d7a7aa09ac35d429d03`)
       .then(res =>{
         if(res.status === 200){
           return res.json()
         }else{
           alert("city was not found")
           throw 'error';

         }
       }).then(data => {

        name.innerHTML = `<p>City : ${data.name} </p>`;
        country.innerHTML = `<p>Country : ${data.sys.country}</p>`
        desc.innerHTML = `<p> Weather Desccription: ${data['weather'][0]['description']}<p>`;
        temp.innerHTML=`<p> Current Temperature: ${data['main']['temp']}<span>•c</span></p>`;
      
      });
   
      

      // fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude={minutely,hourly}&appid=7432c602e487c2cf5ba43b3f4ea7e8d6`)
      //      .then(response => response.json())
      //      .then(data => 

      //       console.log(data)) 
                  

          })






    
   
   

