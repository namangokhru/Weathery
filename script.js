const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '66c5eca4d5msh0fb79b90c8dbea0p1d698cjsn6aec07ee0345',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};


function getWeather(city){
    cityName.innerHTML  = city ; 
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
	.then(response => response.json())
	.then((response) => {
		console.log(response);
        cloud_pct.innerHTML =  response.cloud_pct 
        temp.innerHTML = response.temp   
        temp2.innerHTML = response.temp   
        feels_like.innerHTML = response.feels_like  
        
        humidity.innerHTML = response.humidity
        humidity2.innerHTML = response.humidity
        min_temp.innerHTML = response.min_temp  
        max_temp.innerHTML = response.max_temp  
        wind_speed.innerHTML = response.wind_speed 
        wind_speed2.innerHTML = response.wind_speed
        wind_degrees.innerHTML= response.wind_degrees 
        sunrise.innerHTML = response.sunrise 
        sunset.innerHTML = response.sunset 


	})
	.catch(err => console.error(err));
}


submit.addEventListener( "click" ,  (e)=>{
      e.preventDefault() 
      getWeather(city.value) 
})
getWeather("Varanasi") 



fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Chennai', options)
	.then(response => response.json())
	.then((response) => {
		console.log(response);
        Chennai_temp.innerHTML = response.temp   

        Chennai_cloud_pct.innerHTML =  response.cloud_pct 

        Chennai_feels_like.innerHTML = response.feels_like  
        Chennai_humidity.innerHTML = response.humidity

        Chennai_min_temp.innerHTML = response.min_temp  
        Chennai_max_temp.innerHTML = response.max_temp  
        Chennai_wind_speed.innerHTML = response.wind_speed 
        Chennai_wind_degrees.innerHTML= response.wind_degrees 

	})
	.catch(err => console.error(err));

    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Delhi', options)
	.then(response => response.json())
	.then((response) => {
		console.log(response);
        Delhi_temp.innerHTML = response.temp   

        Delhi_cloud_pct.innerHTML =  response.cloud_pct 
        Delhi_feels_like.innerHTML = response.feels_like  
        Delhi_humidity.innerHTML = response.humidity

        Delhi_min_temp.innerHTML = response.min_temp  
        Delhi_max_temp.innerHTML = response.max_temp  
        Delhi_wind_speed.innerHTML = response.wind_speed 
        Delhi_wind_degrees.innerHTML= response.wind_degrees 


	})
	.catch(err => console.error(err));



    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Kolkata', options)
	.then(response => response.json())
	.then((response) => {
		console.log(response);
        Kolkata_temp.innerHTML = response.temp   

        Kolkata_cloud_pct.innerHTML =  response.cloud_pct 
        Kolkata_feels_like.innerHTML = response.feels_like  
        Kolkata_humidity.innerHTML = response.humidity

        Kolkata_min_temp.innerHTML = response.min_temp  
        Kolkata_max_temp.innerHTML = response.max_temp  
        Kolkata_wind_speed.innerHTML = response.wind_speed 
        Kolkata_wind_degrees.innerHTML= response.wind_degrees 


	})
	.catch(err => console.error(err));

    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Udaipur', options)
	.then(response => response.json())
	.then((response) => {
		console.log(response);
        Udaipur_temp.innerHTML = response.temp   

        Udaipur_cloud_pct.innerHTML =  response.cloud_pct 
        Udaipur_feels_like.innerHTML = response.feels_like  
        Udaipur_humidity.innerHTML = response.humidity

        Udaipur_min_temp.innerHTML = response.min_temp  
        Udaipur_max_temp.innerHTML = response.max_temp  
        Udaipur_wind_speed.innerHTML = response.wind_speed 
        Udaipur_wind_degrees.innerHTML= response.wind_degrees 


	})
	.catch(err => console.error(err));

    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Bangalore', options)
	.then(response => response.json())
	.then((response) => {
		console.log(response);
        Bangalore_temp.innerHTML = response.temp   

        Bangalore_cloud_pct.innerHTML =  response.cloud_pct 
        Bangalore_feels_like.innerHTML = response.feels_like  
        Bangalore_humidity.innerHTML = response.humidity

        Bangalore_min_temp.innerHTML = response.min_temp  
        Bangalore_max_temp.innerHTML = response.max_temp  
        Bangalore_wind_speed.innerHTML = response.wind_speed 
        Bangalore_wind_degrees.innerHTML= response.wind_degrees 


	})
	.catch(err => console.error(err));
