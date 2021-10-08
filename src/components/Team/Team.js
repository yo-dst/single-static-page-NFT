import "./Team.css";
import { TeamContent } from "../../data";

const Team = () => {
    return (
        <div id="section-team">
            <h1 className="section-team-title">{TeamContent.title}</h1>
            <div className="team-wrapper">
                {TeamContent.team.map((member, index) => (
                    <div className="block-member" key={`team-member-${index}`}>
                        <img src={member.avatar_url} alt="avatar" className="member-avatar" />
                        <p className="member-name">{member.name}</p>
                        <p className="member-title">{member.title}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Team;