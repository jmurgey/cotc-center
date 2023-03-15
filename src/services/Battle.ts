import Target from './Target';
import Traveler from './Traveler';
import { Action, Hit } from './traveler.types';

type BattleState = {
}

type RowNumber = 0 | 1 | 2 | 3;
type Position = 'front' | 'back';

export default class Battle {
    private readonly travelers: Traveler[][] = Array.from({ length: 4 }, () => new Array(2) as Traveler[]);
    private target: Target;
    protected stateByTurn: BattleState[] = [];

    constructor(target: Target) {
        this.target = target;
    }

    public getTravelers(): Traveler[][] {
        return this.travelers;
    }

    public setTraveler(traveler: Traveler, row: RowNumber, position: Position): void {
        const positionIndex = position === 'front' ? 0 : 1;
        this.travelers[row][positionIndex] = traveler;
    }

    public getTarget(): Target {
        return this.target;
    }

    public setTarget(target: Target): void {
        this.target = target;
    }

    public applyAction(traveler: Traveler, action: Action, target: Target, boostLevel: number = 0): void {
        action.effect[boostLevel].hits.forEach((hit) => this.applyHit(hit, traveler, target))
    }

    private applyHit(hit: Hit, traveler: Traveler, target: Target): void {
        const baseAttack = traveler.getBaseAttack(hit.damageType);
        const totalAttack = traveler.getTotalAttack(hit.damageType);
        const defense = target.getDefense(hit.damageType);

        const damage = baseAttack * (totalAttack - defense) * hit.potency;
    }
}