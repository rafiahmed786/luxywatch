import { useEffect, useState } from "react"

const useWatch=()=>{
    const [watches,setWatch]=useState([]);
    useEffect(()=>{
       fetch('https://young-cove-63019.herokuapp.com/watches')
        .then(res=>res.json())
        .then(data => setWatch(data))
    },[])
    return [watches]
}
export default useWatch;