type TargetStats = {
    hp: number,
    pdef: number,
    edef: number,
}

type TargetData = {
    name: string,
    sprite: string,
    stats: TargetStats
}

const targetDataMap = new Map<string, TargetData>();

targetDataMap.set('gertrude', {
    name: 'Gertrude',
    sprite: '/sprites/Gertrude.png',
    stats: {
        hp: 764260,
        pdef: 126,
        edef: 113,
    }
})

export default targetDataMap;