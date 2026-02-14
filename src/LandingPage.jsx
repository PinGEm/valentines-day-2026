import style from './landing.module.css'
import {useState} from 'react';

function LandingPage(){
    const [yourName, setYourName] = useState("");
    const [partnerName, setPartnerName] = useState("");
    const [url, setURL] = useState("");

    const generateLink = () => {
        if (!yourName || !partnerName) return;
        setURL(`${window.location.origin}/#/${yourName}/${partnerName}`);
    };

    return (
        <div className={style.UNIQUE_TEXT + " " + style.page}>
        <h1 className={style.UNIQUE_TEXT}>Valentine's Day Site</h1>


        <h2 className={style.UNIQUE_TEXT}>Enter your name: </h2>
        <input
            className={style.UNIQUE_TEXT}
            placeholder="Your Name"
            value={yourName}
            onChange={(e) => setYourName(e.target.value)}
        />
    
        <h2 className={style.UNIQUE_TEXT}>Enter your partner's name: </h2>
        <input
            className={style.UNIQUE_TEXT}
            placeholder="Partner Name"
            value={partnerName}
            onChange={(e) => setPartnerName(e.target.value)}
        /> <br></br>

        <button className={style.UNIQUE_TEXT} onClick={generateLink}>
            Generate Site
        </button>


        <p><a className={style.UNIQUE_TEXT} href={url}>{url}</a></p>
        </div>
    );
}

export default LandingPage;