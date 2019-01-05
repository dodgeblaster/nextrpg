export default {
    elements: {
        fire: { opposite: 'ice' },
        ice: { opposite: 'fire' },
        light: { opposite: 'dark' },
        dark: { opposite: 'light' }
    },

    status: { 
        haste: {
            effectedStatus: 'speed',
            type: 'temporary',
            by: '5'
        },
        sleep: {
            effectedStatus: 'speed',
            type: 'temporary',
            by: 'stop'
        },
        poison: {
            effectedStatus: 'hp',
            type: 'recurring',
            by: '-100'
        }
    }
}