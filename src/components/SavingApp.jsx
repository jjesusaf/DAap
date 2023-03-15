import React from 'react';
import styles from '../styles/Saving.module.css';
import { useState } from 'react';
import ChallengeApp from './ChallengeApp';
import MyChallenge from './MyChallenge';
import LastChallenge from './LastChallenge';
const SavingApp = () => {

    const [selectedExp, setSelectedExp] = useState(true);
    const [selectedMyCh, setSelectedMyCh] = useState(false);
    const [selectedLastCh, setSelectedLastCh] = useState(false);


    const exploreChallenge = () => {
        setSelectedExp(true)
        if (selectedMyCh === true) {
            setSelectedMyCh(false)
        }
        if (selectedLastCh === true) {
            setSelectedLastCh(false)
        }
    };

    const myChallenges = () => {
        setSelectedMyCh(!selectedMyCh)
        if (selectedLastCh === true) {
            setSelectedLastCh(false)
        }
        if (selectedExp === true) {
            setSelectedExp(false)
        }
    };

    const lastChallenges = () => {
        setSelectedLastCh(!selectedLastCh)
        if (selectedMyCh === true) {
            setSelectedMyCh(false)
        }
        if (selectedExp === true) {
            setSelectedExp(false)
        }
    };

    return (
        <div className='flex flex-col items-center pt-[53px] gap-7'>
            <h1 className={`${styles.title}`}>
                AHORRO
            </h1>
            <p className={`${styles.subtitle}`}>
                Explora retos de ahorro y gana premios
            </p>
            <div className={`flex items-center ${styles.challengeNav}`}>
                <button onClick={exploreChallenge}
                    style={{
                        background: selectedExp ? 'linear-gradient(93.63deg, #484848 5.36%, rgba(72, 72, 72, 0.36) 47.78%, #484848 91.69%)'
                            : 'transparent'
                    }}
                    className={`${styles.menu}`}>
                    Explora retos
                </button>
                <button onClick={myChallenges}
                    style={{
                        background: selectedMyCh ? 'linear-gradient(93.63deg, #484848 5.36%, rgba(72, 72, 72, 0.36) 47.78%, #484848 91.69%)'
                            : 'transparent'
                    }}
                    className={`${styles.menu}`}>
                    Mis retos
                </button>
                <button onClick={lastChallenges}
                    style={{
                        background: selectedLastCh ? 'linear-gradient(93.63deg, #484848 5.36%, rgba(72, 72, 72, 0.36) 47.78%, #484848 91.69%)'
                            : 'transparent'
                    }}
                    className={`${styles.menu}`}>
                    Retos pasados
                </button>
            </div>
            {selectedExp && (
                <ChallengeApp />
            )}
            {selectedMyCh && (
                <MyChallenge />
            )}
            {selectedLastCh && (
                <LastChallenge />
            )}
        </div>
    );
};

export default SavingApp;