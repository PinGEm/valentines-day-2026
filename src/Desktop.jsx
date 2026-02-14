import { useState , useEffect } from 'react'
import styles from './Desktop.module.css'
import Draggable from 'react-draggable'
import { useRef } from "react";
import { useParams } from "react-router-dom";
import Background from './Background.jsx'
import DesktopIcon from './DesktopIcon.jsx'
import useSound from 'use-sound';

// Icon Images
import message_icon from './icons/message_icon.jpg'
import us_1 from './icons/us_1.jpg'
import us_2 from './icons/us_2.jpg'
import missu from './icons/missu.jpg'
import secret from './icons/secret.jpg'
import draft from './icons/draft.jpg'
import chrome from './icons/chrome.jpg'

// Other Images
import cat_surprise from './images/cat_surprised.jpg'
import web_cat_icon from './images/tab_icon.jpg'
import us_img_1 from './images/us_click_img_1.jpg'
import us_img_2 from './images/us_click_img_2.jpg'
import heart from './images/heart.png'
import car_kissing from './images/car_kissing.gif'

// Sounds
import click_icon from './sounds/click_icon.mp3'
import click_off from './sounds/click_off.mp3'

function Desktop() {
  const [playClick] = useSound(click_icon, {volume: 0.7});
  const [missUClick] = useSound(click_icon, {volume: 0.3});
  const [stopClick] = useSound(click_off, {volume: 0.7});

  const { yourName, partnerName } = useParams();
  const [finishLoading, setFinishLoading] = useState(false);
  const [loadingMessage, setLoadingMessage] = useState("LOADING");
  useEffect(() => {
    let dots = 0;

    const interval = setInterval(() => {
      dots = (dots + 1) % 4; // cycles 0 → 3
      setLoadingMessage("LOADING" + ".".repeat(dots));
    }, 666);

    const finalTimer = setTimeout(() => {
      clearInterval(interval);
      setFinishLoading(true);
    }, 2500);

    return () => {
      clearInterval(interval);
      clearTimeout(finalTimer);
    };
  }, []);

  const [isClosed_chrome, setClosed_chrome] = useState(true);
  const [isClosed_missu, setClosed_missu] = useState(true);
  const [isClosed_us1, setClosed_us1] = useState(true);
  const [isClosed_us2, setClosed_us2] = useState(true);
  const [isClosed_draft, setClosed_draft] = useState(true);
  const [isClosed_secret, setClosed_secret] = useState(true);

  const [isClosed_mainMessage, setClosed_mainMessage] = useState(true);
  const [messageStep, setMessageStep] = useState(0);


  const nodeRef_chrome = useRef(null);
  const nodeRef_missu = useRef(null);
  const nodeRef_us1 = useRef(null);
  const nodeRef_us2 = useRef(null);
  const nodeRef_draft = useRef(null);
  const nodeRef_secret = useRef(null);

  const [missU, setMissU] = useState(0);

  const messageIconClicked = () => {
    playClick();
    console.log("message button clicked!");
    setClosed_mainMessage(false);

    setMessageStep(0);

    setTimeout(() => setMessageStep(1), 5200);
    setTimeout(() => setMessageStep(2), 10400);
    setTimeout(() => setMessageStep(3), 15400);
  }

  const chromeClicked = () => {
    playClick();
    setClosed_chrome(false);
  }

  const missUClicked = () => {
    playClick();
    setClosed_missu(false);
  }

  const us_1Clicked = () => {
    playClick();
    setClosed_us1(false);
  }

  const us_2Clicked = () => {
    playClick();
    setClosed_us2(false);
  }

  const draftClicked = () => {
    playClick();
    setClosed_draft(false);
  }

  const secretClicked = () => {
    playClick();
    setClosed_secret(false);
  }
  
  const incrementMissU = () => {
    missUClick();
    setMissU(missU + 1);
  }

  const [fontSizeYes, setYesSize] = useState(2);
  const [fontSizeNo, setNoSize] = useState(2);
  const [yesHasPressed, setYesPress] = useState(false);
  
  const noPress = () => {
    setNoSize(prevSize => prevSize - 0.025);
    setYesSize(prevSize => prevSize + 1);
  }

  const yesPress = () => {
    setYesPress(true);
  }

  return (
    <>
      <div className={`${finishLoading ? styles.fadeOut : ""}` + " " + styles.loadingBG}>
        <h2>{loadingMessage}</h2>
      </div>

      <Background/>
      <DesktopIcon image={message_icon} label="my message to you" onClick={messageIconClicked} 
                  xPos={47} yPos={45}/>
      <DesktopIcon image={us_1} label="us_1.jpg" onClick={us_1Clicked} 
                  xPos={20} yPos={4}/>
      <DesktopIcon image={us_2} label="us_2.jpg" onClick={us_2Clicked} 
                  xPos={76} yPos={4}/>
      <DesktopIcon image={missu} label="missu.exe" onClick={missUClicked} 
                  xPos={76} yPos={90}/>
      <DesktopIcon image={secret} label="secret.txt" onClick={secretClicked} 
                  xPos={3} yPos={45}/>
      <DesktopIcon image={draft} label="draft.txt" onClick={draftClicked} 
                  xPos={93} yPos={45}/>
      <DesktopIcon image={chrome} label="Chrome" onClick={chromeClicked} 
                  xPos={20} yPos={90}/>


      {/* Google Chrome Tab */}


      <div className={`${isClosed_chrome ? styles.disabled : ""}` + " " + styles.chrome_container}>
        <Draggable nodeRef={nodeRef_chrome}>
          <div ref={nodeRef_chrome} className={styles.window}>
            <div className={styles.window_header}>
              <p onClick={() => {setClosed_chrome(true); stopClick();}}>[x]</p>
            </div>

            <div className={styles.web_header}>
              <img src={web_cat_icon}/>
              <h3>New Tab</h3>
            </div>
            <h2>NEWS FLASH: YOUR THE PRETTIEST PERSON ON THE PLANET!</h2>
            <img src={cat_surprise} draggable={false}/>
            <p>Craziest thing right?? I never knew either! But turns out research proves this fact. 100% of me agrees with this statement!!!!</p>
          </div> 
        </Draggable>
      </div>


      {/* Us Image 1 Tab */}
      <div className={`${isClosed_us1 ? styles.disabled : ""}` + " " + styles.us1_container}>
        <Draggable nodeRef={nodeRef_us1}>
          <div ref={nodeRef_us1} className={styles.window}>
            <div className={styles.window_header}>
              <p onClick={() => {setClosed_us1(true); stopClick();}}>[x]</p>
            </div>

            <img className={styles.image} src={us_img_1} draggable={false}/>
          </div> 
        </Draggable>
      </div>

      {/* Us Image 2 Tab */}
      <div className={`${isClosed_us2 ? styles.disabled : ""}` + " " + styles.us2_container}>
        <Draggable nodeRef={nodeRef_us2}>
          <div ref={nodeRef_us2} className={styles.window}>
            <div className={styles.window_header}>
              <p onClick={() => {setClosed_us2(true); stopClick();}}>[x]</p>
            </div>

            <img className={styles.image} src={us_img_2} draggable={false}/>
          </div> 
        </Draggable>
      </div>


      {/* Draft.Txt */}

      <div className={`${isClosed_draft ? styles.disabled : ""}` + " " + styles.draft_container}>
        <Draggable nodeRef={nodeRef_draft}>
          <div ref={nodeRef_draft} className={styles.window}>
            <div className={styles.window_header}>
              <p onClick={() => {setClosed_draft(true); stopClick();}}>[x]</p>
            </div>

            <div className={styles.notepad_header}>
              <h2>File</h2>
              <h2>Edit</h2>
              <h2>Search</h2>
              <h2>Help</h2>
            </div>

            <p className={styles.notepadText}>
              soo... hey i've been meanining to. (oh god damn it what was i gonna say?)<br/><br/>so I was gonna say I think I want to eat hamburgers with you and watch the sun rise? Wait is that oh my god. <br/> <br/>So I want to show you what I've been, wait what was I gonna say?
            </p>
          </div> 
        </Draggable>
      </div>


      {/* Secret.Txt */}

      <div className={`${isClosed_secret ? styles.disabled : ""}` + " " + styles.secret_container}>
        <Draggable nodeRef={nodeRef_secret}>
          <div ref={nodeRef_secret} className={styles.window}>
            <div className={styles.window_header}>
              <p onClick={() => {setClosed_secret(true); stopClick();}}>[x]</p>
            </div>

            <div className={styles.notepad_header}>
              <h2>File</h2>
              <h2>Edit</h2>
              <h2>Search</h2>
              <h2>Help</h2>
            </div>

            <p className={styles.notepadText}>
              my secret confession ^_^... hehehe. you'll never know how much I... I... <br/> <br/> want to spend time with you, and... <br/> <br/> spend time eating sausages and ruling the world ૮ ˶ᵔ ᵕ ᵔ˶ ა
            </p>
          </div> 
        </Draggable>
      </div>


      {/* missu.exe */}


      <div className={`${isClosed_missu ? styles.disabled : ""}` + " " + styles.missu_container}>
        <Draggable nodeRef={nodeRef_missu}>
          <div ref={nodeRef_missu} className={styles.missubackground + " " + styles.window}>
            <div className={styles.window_header}>
              <p onClick={() => {setClosed_missu(true); stopClick();}}>[x]</p>
            </div>

            <p>missu.exe</p>

            <div className={styles.heartContainer}>
              <img src={heart} draggable={false}/>
              <h1>{missU} <br/>Times!</h1>
            </div>

            <button onClick={incrementMissU}>Miss U!</button>
          </div> 
        </Draggable>
      </div>



      {/* MESSAGE TO YOU */}
      <div className={`${isClosed_mainMessage ? styles.static_disable : ""}` + " " + styles.mainMessageContainer}>
        {messageStep >= 0 && (
          <div className={`${messageStep == 0 ? styles.fadeIn : styles.fadeOut}` + " " + styles.firstSet}> 
            <h1>Hey soooo {partnerName}....</h1>

            <h1>Throughout our time together, you really made my world c:</h1>

            <h1>you made something magical within me <span style={{color: "yellow"}}>*SPARK*!</span> Like I’d never felt before...</h1>
          </div>
        )}

        {messageStep >= 1 && (
          <div className={`${messageStep == 1 ? styles.fadeIn : styles.fadeOut}` + " " + styles.secondSet}> 
            <h1>So on this Valentine’s day, I just wanted to let you know three things:</h1>

            <h1><span style={{color: "red"}}>First</span>, is that I cherish you and all our moments together</h1>

            <h1><span style={{color: "yellow"}}>Second</span>, is that I dream of us snuggling and taking over the world >:D</h1>
          </div>
        )}

        {messageStep >= 2 && (
          <div className={`${messageStep == 2 ? styles.fadeIn : styles.fadeOut}` + " " + styles.thirdSet}> 
            <h1>And <span style={{color: "blue"}}>third</span>, is that you make really good hamburgers c:</h1>

            <h1>And throughout all this, I just wanted to let you know something today</h1>

            <h1>Something that I’ve always wanted to ask deep inside but never had the courage to...</h1>
          </div>
        )}

        {messageStep >= 3 && (
          <div className={`${messageStep == 3 && !yesHasPressed ? styles.fadeIn : styles.fadeOut}` + " " + styles.fourthSet}>
            <h1 className={styles.mainMessageText}>Will you be my valentines? C:</h1>
            <h2>From {yourName}</h2>

            <button className={styles.yesButton} style={{ fontSize: `${fontSizeYes}em` }} onClick={yesPress}>Yes!</button>
            <button className={styles.noButton} onClick={noPress} style={{fontSize: `${fontSizeNo}em`}}>lol no...</button>
          </div>
        )}

        <div className={`${yesHasPressed ? '' : styles.static_disable}`}>
          <h1>YAY! We will eat burgers and rule the world together ↻(𓄼 .̀  ̮.́)Ψ</h1>
          <img src={car_kissing}/>
        </div>
      </div>
    </>
  )
}

export default Desktop
