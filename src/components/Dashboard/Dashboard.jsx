import React from 'react';

import { useState } from "react";

import logo from  '../../ADWAISEO.svg';
import nasaLogo from  '../../NASA.svg';
import style from'./Dashboard.module.css';

import SearchForm from './SearchForm/SearchForm';
import NasaPhoto from './NasaPhoto/NasaPhoto';
import Button from '../UI/Button';

import { ImageService } from '../../HttpServices/ImageService';
import { LoginService } from '../../HttpServices/LoginService';

function Dashboard() {

    const [isTokenSet, setIsTokenSet] = useState(false);
    const [nasaPhotos, setNasaPhotos] = useState(null);

    const getToken = async (username) => {
        const data = await new LoginService().logUser(username);

        setIsTokenSet(!isTokenSet);

        localStorage.setItem('TOKEN', data.BearerToken);

    }

    const showSearchForm = () => isTokenSet ? <SearchForm searchPhotos={searchPhotos} /> : null;

    const searchPhotos = async (rover, searchingParams) => {

        const data = await new ImageService(rover).getImages(searchingParams);

        setNasaPhotos(data.photos);
    }

    return (
      <div className={style.app}>
        <header className={style.appHeader}>
            <div className={style.logoHeader}>
              <img src={logo} className={style.appLogo} alt="logo"/>
              <img src={nasaLogo} className={style.appLogo} alt="logo"/>
            </div>
            
        </header>
        <div className={style.body}>
            <div className={style.preparationButton}>
                <Button onClick={() => getToken("NasaLaunching")}>You are ready for the launch (get token)</Button>
            </div>
            {showSearchForm()}
            {nasaPhotos !== null ? <NasaPhoto photos={nasaPhotos}/> : null}
        </div>
        <footer className={style.footer}>Ernesto Petit - Adwaiseo 2022.</footer>
      </div>
    );
}

export default Dashboard;