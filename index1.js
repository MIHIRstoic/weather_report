const input=document.getElementById("input");
const button=document.getElementById("btn");
const cityname=document.getElementById("city");
const time=document.getElementById("time");
const temp=document.getElementById("temp");
const hum=document.getElementById("hum");
async function getData(cityName){
    const promise=await fetch(`http://api.weatherapi.com/v1/current.json?key=cc01e83b6c614966b7b102559241606&q=${cityName}&aqi=yes`);
    return await promise.json();
}
button.addEventListener("click",async()=>{
    const value=input.value;
    const result=await getData(value);
    console.log(result);
    time.innerText="timezone: "+result.location.localtime;
    hum.innerText="humidity: "+result.current.humidity;
    temp.innerText="temperature in celsius: "+result.current.temp_c;
    cityname.innerText="location: "+result.location.name+","+result.location.country;
});
