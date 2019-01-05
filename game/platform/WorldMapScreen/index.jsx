const screenStyles = {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    background: 'green'
}

export default props => {
    props.store.on('key-up', () => console.log('world-up'))
    return <div style={screenStyles}>
        Blue
    </div>
}