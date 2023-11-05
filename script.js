const apikey = "d118b927959cdbabec12acb363ac3629";
            const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
            const searchbox=document.querySelector(".center_centered input");
            const searchbtn=document.querySelector(".search");
            const weathericon=document.querySelector(".weather-icon");
            async function checkweather(city){
                const response = await fetch(apiurl + city + `&appid=${apikey}`);
                var data = await response.json();
                // console.log(data);
                document.querySelector(".city").innerHTML=data.name;
                document.querySelector(".temp").innerHTML=Math.round(data.main.temp) +'*C';
                document.querySelector(".humidity").innerHTML=data.main.humidity+'%';
                document.querySelector(".wind").innerHTML=data.wind.speed+'km/h';
                
                if(data.weather[0].main=="Clear"){
                    weathericon.src="images/clear.png";
                }
                else if (data.weather[0].main=="Clouds"){
                    weathericon.src="images/clouds.png";
                }
                else if (data.weather[0].main=="Rain"){
                    weathericon.src="images/rain.png";
                }
                else if (data.weather[0].main=="Drizzle"){
                    weathericon.src="images/drizzle.png";
                }
                else if (data.weather[0].main=="Mist"){
                    weathericon.src="images/mist.png";
                }
                else if (data.weather[0].main=="Snow"){
                    weathericon.src="images/snow.png";
                }
                document.querySelector(".weather").style.display="block";
            }
            searchbtn.addEventListener("click", ()=>{
                checkweather(searchbox.value)
            })
            