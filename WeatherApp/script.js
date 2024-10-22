const apiKey = '6559f65f4c9587e85cf1be8866c038b8';
const form = document.getElementById('form');
const city = document.getElementById('city');
const weatherDiv = document.getElementById('weather');
const iconDiv = document.getElementById('icon');
const temperatureDiv = document.getElementById('temperature');
const descriptionDiv = document.getElementById('description');
const detailsDiv = document.getElementById('details');


form.addEventListener('submit',(e)=>{
    e.preventDefault()
    const cityValue = city.value;
    getWeather(cityValue);
})

async function getWeather(cityValue){

    try 
    {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${apiKey}&units=metric`);

        const data = await response.json();
        console.log(data);
    
        const temperature = Math.round(data.main.temp);
        const icon = data.weather[0].icon;
        const details = [
            `Feels Like: ${Math.round(data.main.feels_like)}`,
            `Humidity: ${data.main.humidity}%`,
            `Wind: ${data.wind.speed} m/s`,
            
    
        ]
    
    
        iconDiv.innerHTML = `<img src="http://openweathermap.org/img/wn/${icon}.png" alt="Weather Icon"> `;
        temperatureDiv.textContent = `${temperature}°C`
    
        let detailsNew = details.map((detail)=>`<div>${detail}</div>`).join('');
        console.log(detailsNew)
    
        detailsDiv.innerHTML = detailsNew;

        descriptionDiv.textContent = '';
    } 
    catch (error)
    {
        iconDiv.innerHTML = '';
        temperatureDiv.textContent = '';
        detailsDiv.innerHTML = '';
        descriptionDiv.textContent = "Please enter a valid city.";
    }





}