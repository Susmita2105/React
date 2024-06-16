import { useState, useEffect } from "react";

function useCurrencyInfo(currency){
    const [data, setData] = useState(null);
    useEffect(()=>{
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-03-06/v1/currencies/${currency}.json`)
        .then((res) => res.json())
        .then((res) => setData(res[currency]))
        .catch((error) => console.error('Error fetching data:', error));
    },[currency])
    
    console.log(data)
    return data;
}
// always remember, data returned from an api is always string, u need to convert it into json

export default useCurrencyInfo;