import React from 'react';
import { useNavigate } from "react-router-dom";

function Button() {
    let navigate = useNavigate(); 
    const routeChange = () =>{ 
        let path = `newPath`; 
        navigate(path);
    }
    return (
      <button></button>
    );
}

export default Button;