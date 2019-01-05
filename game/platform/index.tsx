import {compose, withState, lifecycle, withProps, withHandlers } from 'recompose' 
import Screen from './Screen'

import MenuScreen from './MenuScreen'
import BattleScreen from './BattleScreen'
import WorldMapScreen from './WorldMapScreen'
import OverheadScreen from './OverheadScreen'
import * as EventEmitter from 'eventemitter3'


const init = lifecycle({
    componentDidMount() {
        const store = this.props.store
        const screenActive = this.props.screenActive
        const updateScreenActive = this.props.updateScreenActive
        this.props.io.keyboard({
            up: () => this.props.store.emit('key-up'),
            down: () => this.props.store.emit('key-down'),
            left: () => this.props.store.emit('key-left'),
            right: () => this.props.store.emit('key-right'),
            menu: this.props.keyMenu
                // console.log('men')
                // this.props.menuActive ? this.props.updateMenuActive(false) : this.props.updateMenuActive(true)
            
            ,
            accept: () => this.props.store.emit('key-accept'),
            cancel: () => this.props.store.emit('key-cancel')
        })    
    }
})

const Comp = props => {
    console.log(' -- ', props.screenActive)
    

    return <div>
        <Screen>
            {props.screenActive === 'menu' ? <MenuScreen {...props} store={props.store} /> : ''}
            {props.screenActive === 'overhead' ? <OverheadScreen {...props } store={props.store} /> : ''}
            {props.screenActive === 'worldmap' ? <WorldMapScreen {...props } store={props.store} /> : ''}
            {props.screenActive === 'battle'   ? <BattleScreen   {...props } store={props.store} /> : ''}
        </Screen>
    </div>
}

export default compose(
    withState('menuActive', 'updateMenuActive', false),
    withState('screenActive', 'updateScreenActive', 'overhead'),
    // withState('mapPosition', 'updateMapPosition', {horizontal: 0, vertical: 0}),
    // withState('activeMap', 'updateActiveMap', 0),
    withProps(props => {
        return {
            ...props,
            store: new EventEmitter()
        }
    }),
    withHandlers({
        keyMenu: props => () => {
            if (props.screenActive === 'menu') {
                props.updateScreenActive('overhead')
            }

            if (props.screenActive === 'overhead') {
                props.updateScreenActive('menu')
            }
        }
    }),
    init
)(Comp)