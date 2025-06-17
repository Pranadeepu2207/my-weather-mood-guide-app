let searchCity = document.getElementById("searchCity");
let checkBtn = document.getElementById("checkBtn");
let city = document.getElementById("city");
let weatherIcon = document.getElementById("weatherIcon");
let temperature = document.getElementById("temperature");
let weatherType = document.getElementById("weatherType");
let moodValue = document.getElementById("moodValue");
let weatherCardItems = document.getElementById("weatherCardItems");
let errorMsg = document.getElementById("errorMsg");

let loader = document.getElementById("loader");


let apiKey = "de123e57548741e0adf22351251606";

let cityName;

function displayWeatherMood(weatherCondition) {
    let mood = "";
    const normalized = weatherCondition.toLowerCase().trim();

    switch (normalized) {
        case "sunny":
            mood = "☀️ It's bright! Go outside and feel the sun.";
            break;
        case "clear":
            mood = "It's clear! Go outside and feel the weather.";
            break;
        case "partly cloudy":
            mood = "🌤 A little cloudy, a little sunny—perfect for reflection.";
            break;
        case "cloudy":
            mood = "☁️ A grey day-time to focus or curl up with a book.";
            break;
        case "overcast":
            mood = "🌫 Overcast skies-slow down and embrace stillness.";
            break;
        case "mist":
            mood = "🌀 Misty vibes-walk through the dream.";
            break;
        case "patchy rain possible":
            mood = "🌦 It might rain-carry an umbrella and stay optimistic.";
            break;
        case "patchy rain nearby":
            mood = "🌦 It might rain-carry an umbrella and stay optimistic.";
            break;
        case "patchy snow possible":
            mood = "❄️ A soft snow tease-peaceful and playful.";
            break;
        case "patchy snow nearby":
            mood = "❄️ A soft snow tease-peaceful and playful.";
            break;
        case "patchy sleet possible":
            mood = "🌨 Sleet whispers-watch your step and thoughts.";
            break;
        case "patchy sleet nearby":
            mood = "🌨 Sleet whispers-watch your step and thoughts.";
            break;
        case "patchy freezing drizzle possible":
            mood = "🧊 A chill drizzle-move gently.";
            break;
         case "patchy freezing drizzle nearby":
            mood = "🧊 A chill drizzle-move gently.";
            break;
        case "thundery outbreaks possible":
            mood = "⚡ Something's building-get ready to pivot.";
            break;
        case "thundery outbreaks nearby":
            mood = "⚡ Something's building-get ready to pivot.";
            break;
        case "blowing snow":
            mood = "💨 Winds of snow-chaotic but cleansing.";
            break;
        case "blizzard":
            mood = "🌪 Blizzard mode-stay in, reset your world.";
            break;
        case "fog":
            mood = "🌁 Fog thickens-perfect for introspection.";
            break;
        case "freezing fog":
            mood = "🧊 Frozen silence-stay warm and stay grounded.";
            break;
        case "patchy light drizzle":
            mood = "🌦 Light drizzle-just enough to refresh.";
            break;
        case "light drizzle":
            mood = "🌧 Soft rain-let the rhythm calm your mind.";
            break;
        case "freezing drizzle":
            mood = "❄️ Delicate freeze-move with care.";
            break;
        case "heavy freezing drizzle":
            mood = "🧊 Heavy freeze-pause, this moment matters.";
            break;
        case "patchy light rain":
            mood = "🌧 A touch of rain-let it wash your worries.";
            break;
        case "light rain":
            mood = "🌧 Gentle rain-quiet your thoughts.";
            break;
        case "moderate rain at times":
            mood = "🌧 Moderate rain-good time to think deep.";
            break;
        case "moderate rain":
            mood = "🌧🌧 Steady rain-stay focused, stay inside.";
            break;
        case "heavy rain at times":
            mood = "🌊 Rain pours-emotions run high.";
            break;
        case "heavy rain":
            mood = "🌊 Torrents fall-release what you've been holding.";
            break;
        case "light freezing rain":
            mood = "🧊 Rain freezes-beauty in caution.";
            break;
        case "moderate or heavy freezing rain":
            mood = "🧊 Intense freeze-brace yourself.";
            break;
        case "light sleet":
            mood = "🌨 Light sleet-unexpected, like a twist in your day.";
            break;
        case "moderate or heavy sleet":
            mood = "🌨 Sleet storm-be strong, be safe.";
            break;
        case "patchy light snow":
            mood = "❄️ Soft flakes-let yourself wonder.";
            break;
        case "light snow":
            mood = "🌨 Snow glides-find peace in the white noise.";
            break;
        case "patchy moderate snow":
            mood = "❄️ Patchy snow-embrace the uneven beauty.";
            break;
        case "moderate snow":
            mood = "🌨 Steady snow-let silence guide you.";
            break;
        case "patchy heavy snow":
            mood = "🌨 Heavy flakes fall-pause and breathe.";
            break;
        case "heavy snow":
            mood = "❄️ Snowstorm-dig deep into your calm.";
            break;
        case "ice pellets":
            mood = "🧊 Pellets strike-small hits build strength.";
            break;
        case "light rain shower":
            mood = "🌦 Rain taps lightly-enjoy the freshness.";
            break;
        case "moderate or heavy rain shower":
            mood = "🌧 Showers roll in-refresh your mind.";
            break;
        case "torrential rain shower":
            mood = "🌊 Torrential burst-ride the emotional wave.";
            break;
        case "light sleet showers":
            mood = "🌨 Gentle sleet-let go of resistance.";
            break;
        case "moderate or heavy sleet showers":
            mood = "🌨 Heavier sleet-challenge accepted.";
            break;
        case "light snow showers":
            mood = "❄️ Snow sprinkles-just a whisper of winter.";
            break;
        case "moderate or heavy snow showers":
            mood = "🌨 Heavy snow showers-an invitation to slow down.";
            break;
        case "light showers of ice pellets":
            mood = "🧊 Ice droplets-quick, sharp moments.";
            break;
        case "moderate or heavy showers of ice pellets":
            mood = "🧊 Intense ice-grit meets grace.";
            break;
        case "patchy light rain with thunder":
            mood = "🌩 Light rain and thunder-storms bring clarity.";
            break;
        case "moderate or heavy rain with thunder":
            mood = "⛈ Heavy thunderstorm-time to reset your energy.";
            break;
        case "patchy light snow with thunder":
            mood = "⚡❄️ Snow and thunder-rare, intense beauty.";
            break;
        case "moderate or heavy snow with thunder":
            mood = "🌩❄️ Epic winter storm-find your inner fire.";
            break;
        default:
            mood = "🌈 Weather unknown—embrace the unexpected!";
    }

    moodValue.textContent = mood;
}


function displayWeather(data) {
    let temperatureValue = data.current.temp_c;
    let cityValue = data.location.name;
    let weatherImg = data.current.condition.icon;
    let weatherCondition = data.current.condition.text;

    city.textContent = cityValue;
    temperature.textContent = `${temperatureValue}°C`;
    weatherIcon.src = `https:${weatherImg}`;
    weatherIcon.setAttribute("alt", weatherCondition);
    weatherType.textContent = weatherCondition;

    displayWeatherMood(weatherCondition);
}

async function getWather(apiKey, cityName) {
    try {
        let response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${cityName}&aqi=no`);
        let data = await response.json();
        loader.classList.add("hidden");
        
        if (response.status === 200) {
            weatherCardItems.classList.remove("hidden");
            errorMsg.classList.add("hidden");
            displayWeather(data);
        } else {
            throw new Error(data.error.message);
        }
    } catch (error) {
        loader.classList.add("hidden");
        errorMsg.textContent = `Error: ${error.message}`;
        errorMsg.classList.remove("hidden");
        weatherCardItems.classList.add("hidden");
        city.textContent = "";
        temperature.textContent = "";
        weatherIcon.src = "";
        weatherIcon.alt = "";
        weatherType.textContent = "";
        moodValue.textContent = "";
    }
}


checkBtn.addEventListener("click", () => {
    cityName = searchCity.value;
    if (cityName === "") {
        alert("Please enter a city name");
    }
    else{
        loader.classList.remove("hidden");
        getWather(apiKey,cityName)
        searchCity.value = "";
    }
        
})

