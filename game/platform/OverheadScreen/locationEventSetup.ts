import { lifecycle } from 'recompose'

export default lifecycle({
    componentDidMount() {
        this.props.store.on('location', x => {
            const map = x.split('-')[0]
            const door = x.split('-')[1]

            this.props.updateActiveMap(map)


            let h = 0
            let v = 0
            this.props.services.maps[map].forEach((row, i) => {
                row.forEach((x, index) => {
                    if (x.door && x.door == door) {
                        console.log('0000')
                        const formattedPosition = (mapPosition) => {
                            const formattedHorizontal = (mapPosition.horizontal - 5) - ((mapPosition.horizontal - 5) * 2)
                            const formattedVertical = (mapPosition.vertical - 3) - ((mapPosition.vertical - 3) * 2)
                            return {
                                h: formattedHorizontal,
                                v: formattedVertical
                            }
                        }

                        const ss = formattedPosition({ horizontal: index, vertical: i })

                        v = ss.v
                        h = ss.h
                    }
                })
            })

            this.props.updateMapPosition({ horizontal: h, vertical: v })
        })
    }
})