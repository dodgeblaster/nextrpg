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
        props: '2-1'
    }
}

const tileMap = {
    'x': { ...wall },
    '.': { ...floor },
    'c': { ...door },
    'd': { ...door2 },
    'i': { ...floor, door: 1 }
}


const mapPlan = [
    'xxxxxxxxxxxxx',
    'x...xxxx....x',
    'c...........x',
    'x...........x',
    'x.......i...d',
    'xxxxxxxxxxxxx'
]

export default {
    map: mapPlan,
    tiles: tileMap
}
