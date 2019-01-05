import {compose, lifecycle, withHandlers} from 'recompose'

const formattedPosition = (mapPosition) => {
    const formattedHorizontal = (mapPosition.horizontal - 5) - ((mapPosition.horizontal - 5) * 2)
    const formattedVertical = (mapPosition.vertical - 3) - ((mapPosition.vertical - 3) * 2)
    return {
        h: formattedHorizontal,
        v: formattedVertical
    }
}


// this.props.store.removeListener('key-up', function)

export default lifecycle({
    componentDidMount() {
        this.props.store.on('key-up', () => {
            const p = formattedPosition(this.props.mapPosition)
            const horizontal = this.props.mapPosition.horizontal
            const vertical = this.props.mapPosition.vertical + 1

            const possibleMovement = this.props.maps[this.props.activeMap][p.v - 1]
            if (!possibleMovement) {
                return
            }

            const upcomingTile = possibleMovement[p.h]
            if (upcomingTile.type === 'block') {
                return
            }

            this.props.updateMapPosition({ horizontal, vertical })
            
        })
        this.props.store.on('key-down', () => {
            const p = formattedPosition(this.props.mapPosition)
            const horizontal = this.props.mapPosition.horizontal
            const vertical = this.props.mapPosition.vertical - 1

            const possibleMovement = this.props.maps[this.props.activeMap][p.v + 1]
            if (!possibleMovement) {
                return
            }

            const upcomingTile = possibleMovement[p.h]
            if (upcomingTile.type === 'block') {
                return
            }
                
            this.props.updateMapPosition({ horizontal, vertical })
            
        })
        this.props.store.on('key-right', () => {
            const p = formattedPosition(this.props.mapPosition)
            const horizontal = this.props.mapPosition.horizontal - 1
            const vertical = this.props.mapPosition.vertical

            const possibleMovement = this.props.maps[this.props.activeMap][p.v][p.h + 1]
            if (!possibleMovement) {
                return
            }
            
            if (possibleMovement.type === 'block') {
                return
            }

            this.props.updateMapPosition({ horizontal, vertical })
            
        })
        this.props.store.on('key-left', () => {
            const p = formattedPosition(this.props.mapPosition)
            const horizontal = this.props.mapPosition.horizontal + 1
            const vertical = this.props.mapPosition.vertical

            const possibleMovement = this.props.maps[this.props.activeMap][p.v][p.h - 1]
            if (!possibleMovement) {
                return
            }

            if (possibleMovement.type === 'block') {
                return
            }

            this.props.updateMapPosition({ horizontal, vertical })
        })
    }
})