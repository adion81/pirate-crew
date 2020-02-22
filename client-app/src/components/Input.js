import React from 'react';

const Input = ({handleChange,value,name,type,error,label}) => {
    return(
        <div className="form-group">
            <span>{error ? error.message : ""}</span>
            <label>{label}</label>
            <input name={name} className="form-control" type={type} onChange={(e) => handleChange(e)} value={value}/>
        </div>

    );
}

export default Input;