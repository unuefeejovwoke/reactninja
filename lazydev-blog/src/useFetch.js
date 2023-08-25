import { useState, useEffect } from "react"

const useFetch = (url) => {
    const [data, setData] = useState(null)
    const [isPending, setPending] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        setTimeout(() =>{
          fetch(url)
            .then(res => {
              if(!res.ok){
                throw Error("Could not fecth the data for that resource")
              }
              return res.json();
            })
            .then(data => {
              setData(data)
              setPending(false)
              setError(null)
            }) 
            .catch(err => {
              setPending(false)
              setError(err.message)
            })
        }, 1000)
      }, [url]);

      return {data, isPending, error }
}

export default useFetch;
