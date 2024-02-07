import { useEffect, useState } from "react";

const useFetch = () => {
    const [apiResponse, setApiResponse] = useState(null);
    const[loading , setLoading] = useState(true);

    const apiURL = "https://sharjeel-afridi.github.io/eCommerceJson/api.json";
    useEffect(() => {
        async function apifetch(){
            
            try{
                setApiResponse(await fetch(apiURL).then((resp)=>{return resp.json()}).then(data => {return data}));
            }catch{
                console.log("catch")
                setTimeout(() => {
                    apifetch();
                }, 5000);
            }finally {
                setLoading(false);
              }
        }

        apifetch();
    },[]);
    return {apiResponse, loading};
};

export default useFetch;