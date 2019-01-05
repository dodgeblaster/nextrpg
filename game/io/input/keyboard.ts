import document from 'global/document'
import _ from 'lodash'

export default controls => {
    document.addEventListener('keypress', _.throttle(e => {
        if (e.key === 'o') {
            controls.menu()
        }

        if (e.key === 'l') {
            controls.accept()
        }

        if (e.key === ',') {
            controls.cancel()
        }

        if (e.key === 'd') {
            controls.right()
        }

        if (e.key === 's') {
            controls.down()
        }

        if (e.key === 'a') {
            controls.left()
        }

        if (e.key === 'w') {
            controls.up()
        }
    }, 200))
}