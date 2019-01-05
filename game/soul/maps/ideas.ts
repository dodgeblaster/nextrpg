import { TileDefinition, LocationEvent, DialogueEvent } from '../../services/map/interfaces'



// tile definition example
const wall= {
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



// map defintion example
const events = {
    door1: <LocationEvent> {
        type: 'location',
        location: 'town-01',
    },

    dialogue1: <DialogueEvent> {
        type: 'dialogue',
        text: 'Text from a person'
    }
}


const tileMap = {
    'x': { tile: wall }, 
    '.': { tile: floor },
    'c': { tile: wall, events: [ events.door1 ]}
}


const mapPlan = [
    'xxxxxxx',
    'x.....x',
    'c.....x',
    'xxxxxxx'
]

