import Target from "../services/Target";
import Sprite from "./Sprite";

/**
 * Character React component
 * Should display character sprite, name, HP, and SP
 */
const TargetUI = ({ target }: { target: Target }) => {

    return (
        <div className="character">
        <Sprite character={target} />
        <div className="character__name">{ target.name }</div>
        <div className="character__hp">HP: { target.getRemainingHP() }</div>
        </div>
    );
};

export default TargetUI;