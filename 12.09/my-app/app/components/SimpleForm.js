"use client";
import { useState } from "react";
function SimpleForm({ label, placeholder }) {
    const [inputValue, setInputValue] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Wprowadzono:", inputValue);
    };
    return (
        <form onSubmit={handleSubmit}><label>{label} </label><input style={{ border: '1px solid black' }} type="text"placeholder={placeholder}value={inputValue}onChange={(e) => setInputValue(e.target.value)} />
        <button style={{ background: "grey", color: "black"}} type="submit">Wyślij</button></form>
    );
}

export default SimpleForm;