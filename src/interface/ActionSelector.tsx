import Traveler from "../services/Traveler";
import { Action } from "../services/traveler.types";

/**
 * Actions React component
 * Should display battle actions through a dropdown menu
 */
const Actions = ({ travelers, setAction }: { travelers: Traveler[], action: Action | null, setAction: (action: Action) => void }) => {
    const availableActions = travelers.map(traveler => traveler.getActions());

    
    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        
    }
    
    return (
        <div className="actions">
        <select>
            <option value="attack">Attack</option>
        </select>
        </div>
    );
}

export default Actions;
