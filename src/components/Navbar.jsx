import React, { useState } from 'react';
import Buks from '../assets/images/Buks.svg';
import Network from '../assets/images/Network.svg';
import Wallet from '../assets/images/Wallet.svg';
import styles from '../styles/Navbar.module.css';
const Navbar = ({selectedCh, selectedLeaders, selectedCripto, setSelectedCh, setSelectedLeaders, setSelectedCripto}) => {


    const savingCha = () => {
        setSelectedCh(true)
        if (selectedLeaders === true) {
            setSelectedLeaders(false)
        }
        if (selectedCripto === true) {
            setSelectedCripto(false)
        }
    };

    const leadersTable = () => {
        setSelectedLeaders(!selectedLeaders)
        if (selectedCripto === true) {
            setSelectedCripto(false)
        }
        if (selectedCh === true) {
            setSelectedCh(false)
        }
    };

    const buyCripto = () => {
        setSelectedCripto(!selectedCripto)
        if (selectedLeaders === true) {
            setSelectedLeaders(false)
        }
        if (selectedCh === true) {
            setSelectedCh(false)
        }
    };

    console.log(selectedCh)
    return (
        <div className='z-[1000]'>
            <ul className={`flex justify-around pt-[27px] items-center`}>
                <li>
                    <img src={Buks} alt="Buks logo" />
                </li>
                <li>
                    <div className={`flex items-center ${styles.challengeNav}`}>
                        <button onClick={savingCha}
                            style={{
                                background: selectedCh ? 'linear-gradient(93.63deg, #484848 5.36%, rgba(72, 72, 72, 0.36) 47.78%, #484848 91.69%)'
                                    : 'transparent'
                            }}
                            className={`${styles.menu}`}>
                            Retos de ahorro
                        </button>
                        <button onClick={leadersTable}
                            style={{
                                background: selectedLeaders ? 'linear-gradient(93.63deg, #484848 5.36%, rgba(72, 72, 72, 0.36) 47.78%, #484848 91.69%)'
                                    : 'transparent'
                            }}
                            className={`${styles.menu}`}>
                            Tabla de líderes
                        </button>
                        <button onClick={buyCripto}
                            style={{
                                background: selectedCripto ? 'linear-gradient(93.63deg, #484848 5.36%, rgba(72, 72, 72, 0.36) 47.78%, #484848 91.69%)'
                                    : 'transparent'
                            }}
                            className={`${styles.menu}`}>
                            Compra cripto
                        </button>
                    </div>
                </li>
                <li>
                    <img src={Network} alt="Network" />
                </li>
                <li>
                    <img src={Wallet} alt="Wallet" />
                </li>
            </ul>
        </div>
    );
};

export default Navbar;