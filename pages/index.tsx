import Platform from '../game/platform/'
import io from '../game/io'
import soul from '../game/soul'
import initServices from '../game/services'
const services = initServices(soul)

export default () => <Platform io={io} services={services}/>