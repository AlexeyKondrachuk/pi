export const getWindowWirth = () => {
    const {innerWidth: windowWidth} = 
    typeof window !== 'undefined' ? window: {innerWidth: 0}
    return {windowWidth}
}