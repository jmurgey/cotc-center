import { getDamageClass } from './aux';
import targetData from './target.data';
import { DAMAGE_CLASS, DAMAGE_TYPE } from './traveler.types';

export default class Target {
    
    public readonly name;
    public readonly stats;
    public readonly sprite;
    private damageTaken = 0;
    
    constructor(name: string) {
        const target = targetData.get(name);
        if (target === undefined) {
            throw new Error();
        }
        this.stats = target.stats;
        this.sprite = target.sprite;
        this.name = target.name;
    }

    public getDefense(damageType: DAMAGE_TYPE) {
        const damageClass = getDamageClass(damageType);
        switch(damageClass) {
            case DAMAGE_CLASS.PHYSICAL:
                return this.stats.pdef;
            case DAMAGE_CLASS.MAGIC:
                return this.stats.edef;
            default:
                const exhaustiveCheck: never = damageClass;
                throw new Error(exhaustiveCheck);
        }
    }

    /**
     * applyDamage
     */
    public applyDamage(amount: number) {
        this.damageTaken = this.damageTaken + amount;
    }

    public getRemainingHP(): number {
        return this.stats.hp - this.damageTaken;
    }
}