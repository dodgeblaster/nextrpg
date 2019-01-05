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
        props: '1-1'
    }
}

const tileMap = {
    'x': { ...wall },
    '.': { ...floor },
    'c': { ...door },
    'i': { ...floor, door: 1 }
}


const mapPlan = [
    'xxxxxxxxxxxxx',
    'x...........x',
    'xi..........x',
    'x...........x',
    'x...........c',
    'xxxxxxxxxxxxx'
]

export default {
    map: mapPlan,
    tiles: tileMap
}
