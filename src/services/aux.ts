import { DAMAGE_CLASS, DAMAGE_TYPE } from "./traveler.types";

export const getDamageClass = (damageType: DAMAGE_TYPE): DAMAGE_CLASS => {
    switch (damageType) {
        case DAMAGE_TYPE.SWORD:
        case DAMAGE_TYPE.POLEARM:
        case DAMAGE_TYPE.DAGGER:
        case DAMAGE_TYPE.AXE:
        case DAMAGE_TYPE.BOW:
        case DAMAGE_TYPE.STAFF:
        case DAMAGE_TYPE.TOME:
        case DAMAGE_TYPE.FAN:
            return DAMAGE_CLASS.PHYSICAL;
        case DAMAGE_TYPE.FIRE:
        case DAMAGE_TYPE.ICE:
        case DAMAGE_TYPE.LIGHTNING:
        case DAMAGE_TYPE.WIND:
        case DAMAGE_TYPE.LIGHT:
        case DAMAGE_TYPE.DARK:
            return DAMAGE_CLASS.MAGIC;
        default:
            const exhaustiveCheck: never = damageType;
            throw new Error(exhaustiveCheck);
    }
}