

export async function fetchCars(){
    const headers = {
        'X-RapidAPI-Key': 'b197b917c4mshdc2f5f79bbf19a4p11f062jsn865caefb1504',
        'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
    }

    const response = await fetch ('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla',{
        headers: headers,
    });

    const result = await response.json()

    return result
}