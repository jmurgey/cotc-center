import { getDamageClass } from './aux';
import travelerData from './traveler.data';
import { Action, DAMAGE_CLASS, DAMAGE_TYPE } from './traveler.types';

export default class Traveler {
    public name;
    public class;
    public sprite;
    public stats;
    public actions;
    public accessories = new Array(2);
    
    constructor(name: string) {
        const traveler = travelerData.get(name);
        if (traveler === undefined) {
            throw new Error();
        }
        this.name = traveler.name;
        this.class = traveler.class;
        this.sprite = traveler.sprite;
        this.stats = traveler.stats;
        this.actions = traveler.actions;
    }

    public getActions(): Action[] {
        return this.actions;
    }

    public getBaseAttack(damageType: DAMAGE_TYPE): number {
        const patk = this.stats[0].patk;
        const eatk = this.stats[0].eatk;
        const damageClass = getDamageClass(damageType); 
        switch (damageClass) {
            case DAMAGE_CLASS.PHYSICAL:
                return Math.max(patk, 0.75 * patk + 0.25 * eatk);
            case DAMAGE_CLASS.MAGIC:
                return Math.max(patk * 0.25 + 0.75 * eatk, eatk);
            default:
                const exhaustiveCheck: never = damageClass;
                throw new Error(exhaustiveCheck);
        }
    }

    public getTotalAttack(damageType: DAMAGE_TYPE): number {
        return this.stats[0].patk;
    }
}