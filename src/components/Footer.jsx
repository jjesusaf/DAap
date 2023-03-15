import React from 'react';
import GitHub from '../assets/images/GitHub.svg';
import Twitter from '../assets/images/Twitter.svg';
import Discord from '../assets/images/Discord.svg';
import styles from '../styles/Footer.module.css';



const Footer = () => {
    return (
        <div className={`mt-[105px] flex justify-between ml-[41px] mb-[37px]  mr-[41px]`}>
            <p className={`${styles.copy}   `}>
                Copyright (c) 2023
                <span style={{fontWeight:'900', paddingLeft:'3px'}}>Buks</span>
            </p>
            <div className='flex items-center'>
                <div className='w-[265px] flex  justify-between'>
                    <p className={`${styles.Buks} pr-[24px]`}>
                        Feedback
                    </p>
                    <p className={`${styles.Buks} pr-[24px] pl-[12px]`}>
                        FAQs
                    </p>
                    <p className={`${styles.Buks} pr-[24px] pl-[12px]`}>
                        Docs
                    </p>
                </div>
                <div className={`flex w-[120px] justify-between ml-[24px]`}>
                    <img src={GitHub} alt="GitHub" />
                    <img src={Twitter} alt="Twitter" />
                    <img src={Discord} alt="Discord" />
                </div>
            </div>

        </div>
    );
};

export default Footer;