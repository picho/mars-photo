import React from 'react';

import { useState } from "react";

import Button from "../../UI/Button";

import style from'./SearchForm.module.css';

function SearchForm(props) {

    const [rover, setRover] = useState('');
    const [sol, setSol] = useState('');
    const [page, setPage] = useState('');
    const [camera, setCamera] = useState('');
    const [isFormValid, setisFormValid] = useState(true);

    const sendParams = () => {

        if(sol === "" || rover === "")
            setisFormValid(false);
        else {
            
            let queryParams = `photo?sol=${sol}`;
        
            queryParams += page !== "" ? `&pages=${page}` : "";
            queryParams += camera !== "" ? `&camera=${camera}` : "";
    
            props.searchPhotos(rover,queryParams);
        }
    }

    return (
        <>
        <h1>You are ready for the launch Set the parameters</h1>
        <div className={style.inputs}>
                <select value={rover} onChange={e => setRover(e.target.value)}>
                    <option value="">-- Select Rover --</option>
                    <option value="Curiosity">Curiosity</option>
                    <option value="Opportunity">Opportunity</option>
                    <option value="Spirit">Spirit</option>
                </select>
                <input value={sol} onChange={e => setSol(e.target.value)}  placeholder="Sol"/>
                <input value={page} onChange={e => setPage(e.target.value)}  placeholder="Page"/>
                <select value={camera} onChange={e => setCamera(e.target.value)}>
                    <option value="">-- Select Camera --</option>
                    <option value="FHAZ">FHAZ</option>
                    <option value="RHAZ">RHAZ</option>
                    <option value="MAST">MAST</option>
                    <option value="CHEMCAM">CHEMCAM</option>
                    <option value="MAHLI">MAHLI</option>
                    <option value="MARDI">MARDI</option>
                    <option value="NAVCAM">NAVCAM</option>
                    <option value="PANCAM">PANCAM</option>
                    <option value="MINITES">MINITES</option>
                </select>
            </div>
            {isFormValid ? null : <div>Parameter rover or sol is empty</div>}
            <div className={style.launchButton}>
                <Button onClick={() => sendParams()}>Launch Rover</Button>
            </div> 
        </>
    );

}

export default SearchForm;