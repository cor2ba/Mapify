import { MapView, ReactLogo, TextApp, BtnMyLocation } from "../components"


export const HomeScreen = () => {
    return(
        <div>
            <MapView />
            <BtnMyLocation />
            <ReactLogo />
            <TextApp />
        </div>
    )
}