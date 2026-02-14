import styles from './DesktopIcon.module.css'

function DesktopIcon({image, label, onClick, xPos, yPos}) {
    return(
        <div className={styles.icon} onClick={onClick} style={{left: xPos + "%", top: yPos + "%"}} >
            <img src={image}/> <br/>
            <span>{label}</span>
        </div>
    )
}

export default DesktopIcon