import React from 'react';

const Input = ({ type, placeholder}) => {
    return (
        <>
            <input type={type} placeholder={placeholder} className="border bg-gray-100 border-gray-500 w-full rounded-md py-3 px-2"/>
        </>
    );
};

export default Input;