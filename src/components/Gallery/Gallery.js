import { useState, useEffect } from "react";
import { CSSTransition, SwitchTransition } from "react-transition-group";

import "./Gallery.css";

const getRandomInt = (max) => {
    return (Math.floor(Math.random() * max));
}

const shuffle = (array) => {
    const newArray = [...array];
    let currentIndex = newArray.length;
    let randomIndex;
  
    // While there remain elements to shuffle...
    while (currentIndex !== 0) {
  
      // Pick a remaining element...
      randomIndex = getRandomInt(currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [newArray[currentIndex], newArray[randomIndex]] = [
        newArray[randomIndex], newArray[currentIndex]];
    }
    return newArray;
}

const isInList = (list, elToFind) => {
    for (let i = 0; i < list.length; i++)
        if (list[i] === elToFind)
            return (1);
    return (0);
}

const Gallery = ({imgBank, freq, nbImgs}) => {
    const [state, setState] = useState({
        imgBank: imgBank,
        imgs: shuffle(imgBank).slice(0, nbImgs),
        prevImgsSwitched: [],
        indexPrevImgSwitched: -1
    }); 


    const switchImage = (indexOldImg) => {
        const { imgBank, imgs } = state;

        let indexNewImg = getRandomInt(imgBank.length);
        while (isInList(imgs, imgBank[indexNewImg]))
            indexNewImg = getRandomInt(imgBank.length);

        const newImgs = imgs.map((img, index) => {
            if (index === indexOldImg)
                return (imgBank[indexNewImg]);
            return (img);
        });

        setState({
            ...state,
            imgs: newImgs
        });
    }

    useEffect(() => {
        const switchOneImage = (state) => {
            const { imgBank, imgs, prevImgsSwitched, indexPrevImgSwitched } = state;
    
            let newPrevImgsSwitched = [...prevImgsSwitched];
            if (newPrevImgsSwitched.length === nbImgs)
                newPrevImgsSwitched = [];
    
            let indexOldImg = getRandomInt(nbImgs);
            while (newPrevImgsSwitched.includes(indexOldImg) || indexPrevImgSwitched === indexOldImg)
                indexOldImg = getRandomInt(nbImgs);
            newPrevImgsSwitched.push(indexOldImg);
    
            let indexNewImg = getRandomInt(imgBank.length);
            while (isInList(imgs, imgBank[indexNewImg]))
                indexNewImg = getRandomInt(imgBank.length);
    
            const newImgs = imgs.map((img, index) => {
                if (index === indexOldImg)
                    return (imgBank[indexNewImg]);
                return (img);
            });
    
            return ({
                ...state,
                imgs: newImgs,
                prevImgsSwitched: newPrevImgsSwitched,
                indexPrevImgSwitched: indexOldImg,
            });
        }

        const intervalId = setInterval(() => {
            setState(state => switchOneImage(state));
        }, freq);

        return () => clearInterval(intervalId);
    }, [freq, nbImgs]);


    return (
        <div className="gallery">
            {state.imgs.map((img, index) => {
                return (
                    <SwitchTransition mode="out-in">
                        <CSSTransition
                            key={img}
                            addEndListener={(node, done) => node.addEventListener("transitionend", done, false)}
                            classNames="fade"
                        >
                            <img src={img} alt="unknown" className="gallery-img" onClick={e => switchImage(index)} />
                        </CSSTransition>
                    </SwitchTransition>
                );
            })}  
        </div>
    );
}

export default Gallery;