export enum CLASSES {
    WARRIOR='warrior',
    MERCHANT='merchant',
    THIEF='thief',
    APOTHECARY='apothecary',
    HUNTER='hunter',
    CLERIC='cleric',
    SCHOLAR='scholar',
    DANCER='dancer',
}

type Stats = {
    hp: number,
    sp:  number,
    patk: number,
    pdef: number,
    eatk: number,
    edef: number,
    crit: number,
    speed: number,
}

export enum ACTION_TYPE {
    ATTACK='attack',
}
export enum DAMAGE_TYPE {
    SWORD='sword',
    POLEARM='polearm',
    DAGGER='dagger',
    AXE='axe',
    BOW='bow',
    STAFF='staff',
    TOME='tome',
    FAN='fan',
    FIRE='fire',
    ICE='ice',
    LIGHTNING='lightning',
    WIND='wind',
    LIGHT='light',
    DARK='dark',
}

export enum DAMAGE_CLASS {
    PHYSICAL='physical',
    MAGIC='magic'
}

export type Hit = {
    damageType: DAMAGE_TYPE,
    potency: number,
}

export type ActionEffect = {
    hits: Hit[],
}

export type Action = {
    name: string,
    type: ACTION_TYPE,
    effect: ActionEffect[],
};

export type TravelerData = {
    name: string,
    sprite: string,
    class: CLASSES,
    stats: Stats[],
    actions: Action[],
}
