import Traveler from "../services/Traveler";

/**
 * Character React component
 * Should display character sprite, name, HP, and SP
 */
const Character = ({ traveler }: { traveler: Traveler}) => {
    return (
        <div className="character">
        <div className="character__sprite">
            <img src={traveler.sprite} alt="Character sprite" />
        </div>
        <div className="character__name">{ traveler.name }</div>
        <div className="character__hp">HP: { traveler.stats[0].hp }</div>
        <div className="character__sp">SP: { traveler.stats[0].sp }</div>
        </div>
    );
};

export default Character;