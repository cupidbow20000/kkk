import '../css/home.css';
import * as React from 'react';

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
        <div className="myHome" style={{position:"absolute", zIndex:"-1"}}>
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
        </div>
    );
}

export default Home;