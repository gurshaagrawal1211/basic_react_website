import React from 'react'
import vg from "../assests/2.webp"
import {AiFillGoogleCircle,AiFillAmazonCircle,AiFillYoutube,AiFillInstagram} from "react-icons/ai"
const Home = () => {
  return (
    <>
        <div className="home" id='home'>
        <main>
            <h1>TechStar</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus, animi!</p>
        </main>
    </div>

    <div className="home2">
        <img src={vg} alt="graphics"/>
        <div>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Dicta eius praesentium quis hic nostrum,
                amet pariatur saepe aut quam commodi!
            </p>
        </div>
    </div>

    <div className="home3" id='about'>
        <div>
            <h1>Who we are?</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt nisi deleniti molestias quis repellendus. Error, fuga dolor? Est, reprehenderit. Quae molestias blanditiis alias doloribus, debitis esse, eos quos, qui hic rerum corporis et sint ab eius cum perspiciatis illo sequi.</p>
        </div>
    </div>

    <div className="home4" id='brands'>
        <div>
            <h1>Brands</h1>
            <article>
                <div style={{animationDelay:"0.3s"}}>
                    <AiFillGoogleCircle/>
                    <p>Google</p>
                </div>
                <div style={{animationDelay:"0.5s"}}>
                    <AiFillAmazonCircle/>
                    <p>Amazon</p>
                </div>
                <div style={{animationDelay:"0.7s"}}>
                    <AiFillYoutube/>
                    <p>Youtube</p>
                </div>
                <div style={{animationDelay:"1s"}}>
                    <AiFillInstagram/>
                    <p>Instagram</p>
                </div>
            </article>
        </div>
    </div>
    </>
  )
}

export default Home