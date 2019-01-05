const screenStyles = {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    background: 'black'
}

const windowStyles = {
    width: 12 * 80,
    height: 7 * 80,
    background: 'white',
    margin: '0 auto',
    position: 'relative',
    overflow: 'hidden'
}

export default props => <div style={screenStyles}>
    <div style={windowStyles}>
        {props.children}
    </div>
</div>