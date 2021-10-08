import { useState } from "react";

import "./About.css";
import { AboutContent } from "../../data";

const Block = ({block}) => {
    return (
        <div className={`section-about-block section-about-block-${block.type}`}>
            <img src={block.img} alt="unkown" className={`section-about-block-${block.type}-img`} />
            <p className={`section-about-block-${block.type}-txt`}>{block.txt}</p>
        </div>
    );
}

const About = (props) => {
    const [extend, setExtend] = useState(false);

    return (
        <div id="section-about">
            <h2 className="section-about-title">{AboutContent.title}</h2>
            <div className="section-about-block-wrapper">
                {AboutContent.blocksShown.map((block, index) => (
                    <Block block={block} key={`section-about-block-${index}`} />
                ))}
                {extend ?
                    AboutContent.blocksHiden.map((block, index) => (
                        <Block block={block} key={`section-about-block-${index}`} />
                    ))
                    :
                    null
                }
            </div>
            {extend ? 
                <button className="section-about-btn section-about-btn-close" onClick={e => {e.preventDefault(); setExtend(false); props.navigate("#section-about");}}>Read less</button>
                :
                <button className="section-about-btn section-about-btn-extend" onClick={e => setExtend(true)}>Keep reading</button>
            }
            
        </div>
    );
}

export default About;