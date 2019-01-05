import { TileDefinition } from './interfaces'

const convertMapDefinition = (x) => {
    let arr = []
 
    x.map.forEach((row, i) => {
        row.split('').forEach(str => {
            if (!arr[i]) {
                arr[i] = []
            }

            let tile = x.tiles[str]
            if (tile.graphics.type === 'css') {
                tile.css = tile.graphics.css
            }

            // if (tile.event.type === 'door') {
            //     const loc = Object.assign({}, { map: tile.event.map})
            //     tile.event = emit => {
            //         // debugger
            //         emit('location')
            //         console.log('emitting location ', loc.map)
            //     }
            // }
            arr[i].push(tile)
        })
    })
    return arr
}

export default (tileMap) => {

    let mapObject = {}

    Object.keys(tileMap).forEach((x, i) => {
        mapObject[i] = convertMapDefinition(tileMap[x])
    })

    return mapObject
}