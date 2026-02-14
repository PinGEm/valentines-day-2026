import bgCSS from './background.module.css'

// Gifs
import gif_1 from './background_gifs/cute-cuddling.gif'
import gif_2 from './background_gifs/gwenchana.gif'
import gif_3 from './background_gifs/lovely-cats.gif'
import gif_4 from './background_gifs/peach-cat-kiss.gif'

function Background(){
    return(
        <>
            <img className={bgCSS.backgroundElement + " " + bgCSS.topLeft} src={gif_1} alt = "cute cats cuddling"/>
            <img className={bgCSS.backgroundElement + " " + bgCSS.topRight} src={gif_2} alt = "gwenchana"/>
            <img className={bgCSS.backgroundElement + " " + bgCSS.bottomLeft} src={gif_3} alt = "cats kissing"/>
            <img className={bgCSS.backgroundElement + " " + bgCSS.bottomRight} src={gif_4} alt = "peach cat kissing"/>
        </>
    )
}

export default Background