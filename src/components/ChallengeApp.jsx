import React from 'react';
import Logo1 from '../assets/images/Logo1.svg';
import Discord from '../assets/images/Discord.svg';
import Window1 from '../assets/images/Window1.svg';
import Twitter from '../assets/images/Twitter.svg';
import styles from '../styles/Challenge.module.css';
import VectorC from '../assets/images/VectorC.svg';
import Logo2 from '../assets/images/Logo2.svg'

const ChallengeApp = () => {
    return (
        <div className={`pt-[40px] flex justify-center gap-[94px] flex-wrap`}>
            <section className={`${styles.section} pt-[27px] pb-[27px] pl-[35px] pr-[35px]`}>
                <img src={Logo1} alt="" className={`pb-[14px]`} />
                <h1 className={`${styles.title} pb-[17px]`}>
                    Desafío de Antisat
                </h1>
                <div className={`flex w-[139px] justify-between ${styles.social}`}>
                    <img src={Discord} alt="" />
                    <img src={Window1} alt="" />
                    <img src={Twitter} alt="" />
                </div>
                <p className={`mt-[14px] mb-[24px] ${styles.comp}`}>
                    Competencia
                </p>
                <div className={`${styles.players}`}>
                    <div className={`mr-[40px]`}>
                        <p className={`${styles.p1}`}>
                            7
                        </p>
                        <p className={`${styles.p2}`}>
                            Jugadores
                            inscritos
                        </p>
                    </div>
                    <div className={`mr-[40px]`}>
                        <p className={`${styles.p1}`}>
                            $20
                        </p>
                        <p className={`${styles.p2}`}>
                            USDC a
                            ahorrar
                        </p>
                    </div>
                    <div>
                        <p className={`${styles.p1}`}>
                            4
                        </p>
                        <p className={`${styles.p2}`}>
                            Quincenas <br />
                            de ahorro
                        </p>
                    </div>
                </div>
                <div className={`flex justify-between`}>
                    <p className={`${styles.close}`}>
                        Cierra inscripción en:
                    </p>
                    <p className={`${styles.time}`}>
                        34:14:47
                    </p>
                </div>
                <button className={`${styles.btnChallenge} mt-[24px]`}>
                    <img src={VectorC} alt='VectorC' />
                    <span className={`${styles.btnText}`}>
                        VER RETO
                    </span>
                </button>
            </section>
            <section className={`${styles.section} pt-[27px] pb-[27px] pl-[35px] pr-[35px]`}>
                <img src={Logo2} alt="" className={`pb-[14px]`} />
                <h1 className={`${styles.title} pb-[17px]`}>
                    Desafío de BSL
                </h1>
                <div className={`flex w-[139px] justify-between ${styles.social}`}>
                    <img src={Discord} alt="" />
                    <img src={Window1} alt="" />
                    <img src={Twitter} alt="" />
                </div>
                <p className={`mt-[14px] mb-[24px] ${styles.comp}`}>
                    Desafío de BSL
                </p>
                <div className={`${styles.players}`}>
                    <div className={`mr-[40px]`}>
                        <p className={`${styles.p1}`}>
                            10
                        </p>
                        <p className={`${styles.p2}`}>
                            Jugadores
                            inscritos
                        </p>
                    </div>
                    <div className={`mr-[40px]`}>
                        <p className={`${styles.p1}`}>
                            $50
                        </p>
                        <p className={`${styles.p2}`}>
                            USDC a
                            ahorrar
                        </p>
                    </div>
                    <div>
                        <p className={`${styles.p1}`}>
                            8
                        </p>
                        <p className={`${styles.p2}`}>
                            Quincenas <br />
                            de ahorro
                        </p>
                    </div>
                </div>
                <div className={`flex justify-between`}>
                    <p className={`${styles.close}`}>
                        Cierra inscripción en:
                    </p>
                    <p className={`${styles.time}`}>
                        34:14:47
                    </p>
                </div>
                <button className={`${styles.btnChallenge} mt-[24px]`}>
                    <img src={VectorC} alt='VectorC' />
                    <span className={`${styles.btnText}`}>
                        VER RETO
                    </span>
                </button>
            </section>
        </div>
    );
};

export default ChallengeApp;