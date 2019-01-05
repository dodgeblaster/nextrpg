import { compose, withState, withProps, lifecycle } from 'recompose'
import controllerSetup from './controllerSetup'
import locationEventSetup from './locationEventSetup'

const screenStyles = {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    background: 'red'
}

const characterStyles = {
    height: 80,
    width: 80,
    background: 'black',
    position: 'absolute',
    top: 3 * 80,
    left: 5 * 80,
    zIndex: 100
}

const RenderMap = props => {
    return <div>
        {
            props.maps[props.active].map((arr, i) => <div key={i} style={{display: 'flex'}}>
                {
                    arr.map((x, i) => <div key={i} style={{ ...x.css, height: 80, flex: '0 0 80px'}}></div>)
                }
            </div>)
        }
    </div>
}


const executeLocationEvents = (props, maps, active, mapPosition) => {
    const formattedHorizontal = (mapPosition.horizontal - 5) - ((mapPosition.horizontal - 5) * 2)
    const formattedVertical = (mapPosition.vertical - 3) - ((mapPosition.vertical - 3) * 2)
    const activeTile = maps[active][formattedVertical][formattedHorizontal]

    if (activeTile.event) {
        props.store.emit(activeTile.event.type, activeTile.event.props)
    }
}

const Comp = props => {
    executeLocationEvents(props, props.maps, props.activeMap, props.mapPosition)
    return <div>
        <div style={characterStyles}></div>
        <div 
            style={{
                ...screenStyles, 
                transform: `translate(${props.mapPosition.horizontal * 80}px, ${props.mapPosition.vertical * 80}px)`
            }}>
            <RenderMap maps={props.maps} active={props.activeMap}/>     
        </div>
    </div>
}


export default compose(
    withProps(props => {
        return {
            ...props,
            maps: props.services.maps
        }
    }),
    withState('mapPosition', 'updateMapPosition', {horizontal: 0, vertical: 0}),
    withState('activeMap', 'updateActiveMap', 0),
    controllerSetup,
    locationEventSetup
)(Comp)


