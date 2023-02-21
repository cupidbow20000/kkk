import '../css/home.css';
import * as React from 'react';

import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

function Home() {

    const [ind, setInd] = React.useState(1);

    const showSlides = (n) => {
        console.log(ind);
        let i, slideIndex;
    }

    const nextSlide = () => {
        console.log("next");
        if(ind!=5) setInd(ind+1);
        else setInd(1);
        showSlides(ind+1);
    }

    const prevSlide = () => {
        console.log("prev");
        if(ind!=1) setInd(ind-1);
        else setInd(5);
        showSlides(ind-1);
    }

    const currentSlide = (val) => {
        console.log(val);
        setInd(val);
        showSlides(ind);
    }

    return (
        <div className="myHome" style={{position:"relative"}}>
            <div className="slideshow-container">
                <div className="mySlides fade">
                <div className="numbertext">1 / 3</div>
                <img src={"../img"+ind+".png"} style={{width:"100%"}} />
                <div className="text">Caption Text</div>
                </div>

                <a className="prev" onClick={prevSlide.bind()}>&#10094;</a>
                <a className="next" onClick={nextSlide.bind()}>&#10095;</a>
            </div>
            <br/>
            <div style={{textAlign:"center"}}>
                <span className="dot" onClick={currentSlide.bind(this, 1)}></span>
                <span className="dot" onClick={currentSlide.bind(this, 2)}></span>
                <span className="dot" onClick={currentSlide.bind(this, 3)}></span>
                <span className="dot" onClick={currentSlide.bind(this, 4)}></span>
                <span className="dot" onClick={currentSlide.bind(this, 5)}></span>
            </div>
            <h2>Paxos is a regulated blockchain infrastructure platform, building a new, open financial system.</h2>
            <div className="flex-container">
                <div>
                    <img src="../custody.png" width="64px"></img>
                    <h3>Custody</h3>
                    <p>We hold and safeguard physical and digital assets as a regulated Trust Company</p>
                </div>
                <div>
                    <img src="../digitize.png" width="64px"></img>
                    <h3>Digitize</h3>
                    <p>We build technology that allows assets to live and move on any blockchain</p>
                </div>
                <div>
                    <img src="../mobilize.png" width="64px"></img>
                    <h3>Mobilize</h3>
                    <p>We enable the movement of assets through an ecosystem of products and services</p>
                </div>
            </div>
            <div className="product">
                <p className="proheader">Our Products</p>
                <p className="probody">Cutting-edge technology with bank-level oversight so you can trade, settle and manage assets with confidence</p>
            </div>
            <div className="flex-container2" style={{paddingTop:"20px"}}>
                <div className='crypto'>
                    <a href="#">Crypto Brokerage</a>
                    <p>The trusted way to add crypto to your application</p>
                    <a style={{fontSize:"20px"}}href="#">Learn More</a>
                </div>
                <div className='secure'>
                    <a href="#">Securities Settlement</a>
                    <p>Settle U.S. equities with delivery-vs-payment</p>
                    <a style={{fontSize:"20px"}}href="#">Learn More</a>
                </div>
                <div className='commo'>
                    <a href="#">Commodities Settlement</a>
                    <p>The first OTC precious metals simultaneous settlement solution offering for both cash and precious metals</p>
                    <a style={{fontSize:"20px"}}href="#">Learn More</a>
                </div>
            </div>
            <div className="flex-container2" style={{paddingTop:"20px"}} id="second">
                <div className='crypto'>
                    <a href="#">Crypto Brokerage</a>
                    <p>The trusted way to add crypto to your application</p>
                    <a style={{fontSize:"20px"}}href="#">Learn More</a>
                </div>
                <div className='secure'>
                    <a href="#">Securities Settlement</a>
                    <p>Settle U.S. equities with delivery-vs-payment</p>
                    <a style={{fontSize:"20px"}}href="#">Learn More</a>
                </div>
                <div className='commo'>
                    <a href="#">Commodities Settlement</a>
                    <p>The first OTC precious metals simultaneous settlement solution offering for both cash and precious metals</p>
                    <a style={{fontSize:"20px"}}href="#">Learn More</a>
                </div>
            </div>
        </div>
    );
}

export default Home;