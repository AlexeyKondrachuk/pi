import { getWindowWirth } from "./common"
import { useEffect, useState } from "react"

const useWindowWidth = () => {
    const [windowWidth, setWindowWidth] = useState(getWindowWirth())

    const handleResize = () => setWindowWidth(getWindowWirth())

    useEffect(() => {
        window.addEventListener('resize', handleResize, true)

        return () => window.removeEventListener('resize', handleResize, true)
    }, [])

    return {windowWidth, handleResize}
}


export const useMediaQuery = (maxWidth: number) => {
    const {
        windowWidth: {windowWidth},
        handleResize,
    } = useWindowWidth()

    const [isMedia, setMedia] = useState(false)

    useEffect(() => {
        if (windowWidth <= maxWidth) {
            setMedia(true)
        } else {
            setMedia(false)
        }
    }, [handleResize, maxWidth, windowWidth])

    return isMedia
}
