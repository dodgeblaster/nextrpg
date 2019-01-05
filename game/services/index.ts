import maps from './map'


export default soul => {
    return {
        maps: maps(soul.maps)
    }
}