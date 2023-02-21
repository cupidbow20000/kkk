import '../css/home.css';
import * as React from 'react';

function Home() {

    const [ind, setInd] = React.useState(1);

    const showSlides = (n) => {
        let i, slideIndex=ind;
        let slides = document.getElementsByClassName("mySlides");
        let dots = document.getElementsByClassName("dot");
        if (n > slides.length) {slideIndex = 1}
        if (n < 1) {slideIndex = slides.length}
        for (i = 0; i < slides.length; i++) {
          slides[i].style.display = "none";
        }
        for (i = 0; i < dots.length; i++) {
          dots[i].className = dots[i].className.replace(" active", "");
        }
        //slides[slideIndex-1].setStyle("display:block");
        //dots[slideIndex-1].className += " active";
        console.log(slides, "-----", slideIndex); 
    }

    const plusSlides = (val) => {
        console.log("-----onplus");
        showSlides(ind+val);
    }

    const currentSlide = (val) => {
        showSlides(ind);
    }

    return (
        <div className="myHome">
            <div className="slideshow-container">
                <div className="mySlides fade">
                <div className="numbertext">1 / 3</div>
                <img src="../img1.jpg" style={{width:"100%"}} />
                <div className="text">Caption Text</div>
                </div>

                <a className="prev" onClick={plusSlides(-1)}>&#10094;</a>
                <a className="next" onClick={plusSlides(1)}>&#10095;</a>
                </div>
                <br/>

                <div style={{textAlign:"center"}}>
                <span className="dot" onClick={currentSlide(1)}></span>
                <span className="dot" onClick={currentSlide(2)}></span>
                <span className="dot" onClick={currentSlide(3)}></span>
                </div>
        </div>
    );
}

export default Home;