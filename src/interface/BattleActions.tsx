import { useState } from "react";
import { Action, ACTION_TYPE } from "../services/traveler.types";
import ActionSelector from "./ActionSelector";
import Battle from "../services/Battle";

type RowNumber = 0 | 1 | 2 | 3;

const BattleActions = ({ battle }: { battle: Battle }) => {
    const travelers = battle.getTravelers();
    const [actions, setActions] = useState<(Action | null)[][]>([new Array(4).fill(null)]);

    const setAction = (turnCount: number, row: RowNumber) => (action: Action) => {
        const newActions = [...actions];
        newActions[turnCount][row] = action;
        setActions(newActions);
    }

    // <ActionSelector travelers={travelers} setAction={setAction(index)} />
    return (
        <div>
            {actions.map((actionsOnTurn, turnCount) => {
                return (
                    <table>
                        <tr>
                            {actionsOnTurn.map((action, row) => {
                                return (
                                    <td>
                                        <ActionSelector travelers={travelers[row]} action={action} setAction={setAction(turnCount, row as RowNumber)} />
                                    </td>
                                );
                            })}
                        </tr>
                    </table>
                );
            })}
        </div>
    );
}

export default BattleActions;
