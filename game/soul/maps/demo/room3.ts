const wall = {
    graphics: {
        type: 'css', // css | img
        css: {
            background: 'black'
        },
    },
    type: 'block', // solid | transparent
    layer: 0,
    event: false
}


const floor = {
    graphics: {
        type: 'css', // css | img
        css: {
            background: 'blue'
        },
    },
    type: 'clear', // solid | transparent
    layer: 0,
    event: false
}

const door = {
    graphics: {
        type: 'css', // css | img
        css: {
            background: 'brown'
        },
    },
    type: 'clear', // solid | transparent
    layer: 0,
    event: {
        type: 'location',
        props: '0-1'
    }
}

const door2 = {
    graphics: {
        type: 'css', // css | img
        css: {
            background: 'brown'
        },
    },
    type: 'clear', // solid | transparent
    layer: 0,
    event: {
        type: 'location',
        props: '1-1'
    }
}

const end = {
    graphics: {
        type: 'css', // css | img
        css: {
            background: 'yellow'
        },
    },
    type: 'clear', // solid | transparent
    layer: 0,
    event: false
}

const tileMap = {
    'x': { ...wall },
    '.': { ...floor },
    'c': { ...door },
    'd': { ...door2 },
    'i': { ...floor, door: 1 },
    'e': { ...end }
}


const mapPlan = [
    'xxxxxxxxxxxxx',
    'x...xxxx....x',
    'ci..........x',
    'x...........x',
    'x...........xxxxxxx',
    'xxxxxx............x',
    'xxxxxx............x',
    'xxxxxx............x',
    'xxxxxx...........ex',
    'xxxxxxxxxxxxxxxxxxx'
]

export default {
    map: mapPlan,
    tiles: tileMap
}
