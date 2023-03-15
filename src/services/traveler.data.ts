import { Action, ACTION_TYPE, CLASSES, DAMAGE_TYPE, TravelerData } from "./traveler.types";

const travelerDataMap = new Map<string, TravelerData>();

const attackAction = (damageType: DAMAGE_TYPE): Action => ({
    name: 'Attack',
    type: ACTION_TYPE.ATTACK,
    effect: [
        {  
            hits: [{ 
                damageType,
                potency: 50,
            }],
        },
        {  
            hits: [{ 
                damageType,
                potency: 50,
            }, { 
                damageType,
                potency: 50,
            }],
        },
        {  
            hits: [{ 
                damageType,
                potency: 50,
            }, { 
                damageType,
                potency: 50,
            }, { 
                damageType,
                potency: 50,
            }],
        },
        {  
            hits: [{ 
                damageType,
                potency: 50,
            }, { 
                damageType,
                potency: 50,
            },{ 
                damageType,
                potency: 50,
            }, { 
                damageType,
                potency: 50,
            }],
        }
    ] 
})

travelerDataMap.set('fiore', {
        name: 'Fiore',
        sprite: '/sprites/Fiore.png',
        class: CLASSES.WARRIOR,
        stats: [
            {
                hp: 3222,
                sp:  286,
                patk: 404,
                pdef: 343,
                eatk: 237,
                edef: 241,
                crit: 333,
                speed: 310
            }
        ],
        actions: [
            attackAction(DAMAGE_TYPE.SWORD),
            {
                name: 'Crumbling Cut',
                type: ACTION_TYPE.ATTACK,
                effect: [
                    {  
                        hits: [{ 
                            damageType: DAMAGE_TYPE.SWORD,
                            potency: 230,
                        }],
                    },
                    {  
                        hits: [{ 
                            damageType: DAMAGE_TYPE.SWORD,
                            potency: 260,
                        }],
                    },
                    {  
                        hits: [{ 
                            damageType: DAMAGE_TYPE.SWORD,
                            potency: 300,
                        }],
                    },
                    {  
                        hits: [{ 
                            damageType: DAMAGE_TYPE.SWORD,
                            potency: 400,
                        }],
                    }
                ] 
            }
        ]
    }
);

export default travelerDataMap;