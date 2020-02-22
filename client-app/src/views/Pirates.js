import React,{useState,useEffect} from 'react';
import Axios from 'axios';

const Pirates = (props) => {
    const [pirates,setPirates] = useState([]);
    useEffect(() => {
        Axios.get('http://localhost:8000/api/pirates')
            .then(res => setPirates(res.data))
            .catch(err => console.log(err))
    },[])
    return(
        <div>
            <h1>Hey...</h1>
        </div>
    );
}
export default Pirates;