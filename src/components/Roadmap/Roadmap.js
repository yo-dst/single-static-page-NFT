import "./Roadmap.css";
import { RoadmapContent } from "../../data";

const Roadmap = () => {
    return (
        <div id="section-roadmap">
            <h1 className="section-roadmap-title">{RoadmapContent.title}</h1>
            {RoadmapContent.blocks.map((block, index) => (
                <div className="section-roadmap-block" key={`section-roadmap-block-${index}`}>
                    <img src={block.img} alt="unkown" className={`section-roadmap-block-img-${index % 2 ? "right" : "left"}`} />
                    <div className="section-roadmap-block-txt">
                        <h3 className="section-roadmap-block-txt-title">{block.title}</h3>
                        <p className="section-roadmap-block-txt-txt">{block.txt}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Roadmap;