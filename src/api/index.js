const baseURL =
    "https://api.weatherapi.com/v1/current.json?key=77ad170d3d934fada9674849240107"

export const getWeatherDataForCity = async (city) => {
    const response = await fetch(`${baseURL}&q=${city}&api=yes`)
    return await response.json();
}

export const getWeatherDataForLocation = async (lat,lon) => {
    const response = await fetch(`${baseURL}&q=${lat},${lon}&api=yes`)
    return await response.json();
}