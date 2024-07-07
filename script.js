const input = document.getElementById("inputcity");
const api = "c3430496286dfdc98b20a5c5ceebd505";
const button = document.getElementById("btn");

// button.addEventListener("click", async event => {
//     event.preventDefault();
//     let city = input.value;
//     if (city) {
//         try {
//             const getweather = await getdata(city);
//             display(getweather);
//         } catch (error) {
//             console.log(error);
//         }
//     } else {
//         window.alert("Please enter a city");
//     }
// });

// async function getdata(city) {
//     const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api}`;
//     const response = await fetch(url);
//     if(response.ok==false){
//         document.getElementById("city").innerText="Enter Valid City Name!"
//     }
//     const data = await response.json();
//     return await data;
// }

// function display(data) {
//     const{name : city, main:{temp,humidity},weather:[{description}]}=data;
//     document.getElementById("city").innerText=city
//     document.getElementById("temperature").innerText=`${Math.round(temp-273.15)} °C`
//     document.getElementById("humidity").innerText=`Humidity: ${humidity} %`
//     document.getElementById("sky").innerText=description
// }




button.addEventListener("click",async event=>{
    event.preventDefault()
    const city=input.value;
    if(city){
        try{
            const info=await getdata(city);
             display(info);
        }
        catch(error){
            console.error(error)
        }
    }else{
        window.alert("Enter City Name!")
    }
})

async function getdata(city){
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api}`
    const response=await fetch(url);
    console.log(response)
    if(response.ok==false){
        document.getElementById('city').innerText="Invalid City Name!"
    }
    const data=await response.json()
    return await data;
}

function display(data){
    const{name : city, main:{temp,humidity},weather:[{description}]}=data;
    document.getElementById("city").innerText=city
    document.getElementById("temperature").innerText=`${(temp-273.15).toFixed(1)} °C`
    document.getElementById("humidity").innerText=`Humidity: ${humidity} %`
    document.getElementById("sky").innerText=description
}