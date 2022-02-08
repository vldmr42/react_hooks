import {useState, useEffect, useCallback} from 'react';
import {Container} from 'react-bootstrap';
import './App.css';

const getSomeImages = ()=>{
    console.log('fetching');
    return [
        "https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg",
        "https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg",        
    ]
}

const Slider = (props) => {

    const [slide, setSlide] = useState(0);
    const [autoplay, setAutoplay] = useState(false);

    const getSomeImages = useCallback(()=>{
        console.log('fetching');
        return [
            "https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg",
            "https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg",        
        ]
    }, [slide])

    function logging(){
        console.log('Log!');
    }

    useEffect(()=>{
        console.log('Effect');
        document.title = `Slide: ${slide}`;
        // window.addEventListener('click', logging);

        // return () => {
        //     window.removeEventListener('click', logging);
        // }

    }, [slide]);

    useEffect(()=>{
        console.log('autoplay');
    }, [autoplay])

    function changeSlide(i){
        setSlide(slide => slide + i);
    }

    function toggleAutoplay(){
        setAutoplay(autoplay => !autoplay);
    }

    return (
        <Container>
            <div className="slider w-50 m-auto">

                {/* {
                    getSomeImages().map((url, i)=>{
                        return (
                            <img key={i} className="d-block w-100" src={url} alt="slide" />
                        )
                    })
                } */}
                <Slide getSomeImages={getSomeImages}/>

                <div className="text-center mt-5">Active slide {slide} <br/>{autoplay ? 'auto' : null}</div>
                <div className="buttons mt-3">
                    <button 
                        className="btn btn-primary me-2"
                        onClick={() => changeSlide(-1)}>-1</button>
                    <button 
                        className="btn btn-primary me-2"
                        onClick={() => changeSlide(1)}>+1</button>
                    <button 
                        className="btn btn-primary me-2"
                        onClick={toggleAutoplay}>toggle autoplay</button>
                </div>
            </div>
        </Container>
    )
}

const Slide = ({getSomeImages}) => {
    const [images, setImages] = useState([]);

    useEffect(()=>{
        setImages(getSomeImages());
    }, [getSomeImages])

    return (
        <>
            {images.map((url, i) => <img key={i} className="d-block w-100" src={url} alt="slide" />)}
        </>
    )
}


function App() {
  return (
        <Slider/>
  );
}

export default App;
