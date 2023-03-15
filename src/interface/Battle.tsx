/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import Battle from '../services/Battle';
import Traveler from '../services/Traveler';
import Target from '../services/Target';
import BattleActions from './BattleActions';
import TravelerUI from './Traveler';
import TargetUI from './Target';

/**
 * Battle React component
 * Should display traveler, enemy and battle actions
 */
const BattleUI = () => {

    const gertrude = new Target('gertrude');
    const fiore = new Traveler('fiore');

    const battle = new Battle(gertrude);
    battle.setTraveler(fiore, 0, 'front');
    return (
        <div css={css`
        display: flex;
            flex-direction: column;
        `}>
            <div css={css`
                display: flex;
                flex-direction: row;
                justify-content: center;
                align-items: center;
                width: 80vw;
                padding: 0 10vw;
            `}>
                <div>
                    <TargetUI target={battle.getTarget()} />
                </div>
                <div css={css`
                    margin: 0 50px;
                `}>VS</div>
                <div> 
                    {battle.getTravelers().map((rows) => {
                        return rows.map((traveler) => {
                            return (
                                <TravelerUI traveler={traveler} />
                            );
                        });
                    })}
                </div>
            </div>
            <div css={css``}>
                <BattleActions battle={battle} />
            </div>
        </div>
        
    );
}

export default BattleUI;
