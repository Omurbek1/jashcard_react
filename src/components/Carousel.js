import React from 'react'
import Carousel from "react-multi-carousel";
import './Carousel.css'
import "react-multi-carousel/lib/styles.css";
import img1 from '../images/user1.png'
import img2 from '../images/user2.png'
import img4 from '../images/user3.png'
import img3 from '../images/user4.png'
import img5 from '../images/Vector.png'
function Carousels() {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 3
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 2
        }
    };
    return (
        <div className='carousel-div'>
            <div>
                <h1>Фото молодежи с картой</h1>
                <p> Равным образом, выбранный нами инновационный путь однозначно определяет каждого участника как способного принимать собственные решения касаемо дальнейших направлений.</p>
            </div>
            <div style={{ position: "relative" }}>
                <Carousel responsive={responsive}
                    autoPlay={true}
                    autoPlaySpeed={1000}
                    swipeable={true}
                    arrows={false}
                    containerClass="container-padding-bottom"

                    infinite={true}
                    transitionDuration={1000}
                    customButtonGroup={<CustomButtonGroup />}

                >
                    <div className='img'><img src={img1} /></div>
                    <div className='img'><img src={img2} /></div>
                    <div className='img'><img src={img3} /></div>
                    <div className='img'><img src={img4} /></div>
                    <div className='img'><img src={img1} /></div>
                    <div className='img'><img src={img2} /></div>
                    <div className='img'><img src={img3} /></div>
                    <div className='img'><img src={img4} /></div>

                </Carousel>
                <hr />

            </div>
        </div >
    )
}
const CustomButtonGroup = ({ next, previous, goToSlide, carouselState }) => {

    return (
        <div className="custom-button-group">
            {/* 
            <button onClick={() => previous()}>Previous slide</button> */}
            <button onClick={() => next()} className='react-multiple-carousel__arrow-right'><img src={img5} /></button>

        </div>
    );
};

export default Carousels