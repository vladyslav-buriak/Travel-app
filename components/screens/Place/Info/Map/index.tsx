import { FC } from "react";
import styles from "./Map.module.scss";
import { ComposableMap, Geographies, Geography, ZoomableGroup, Annotation } from "react-simple-maps";
import ILocation from "@/types/place";


interface IMapProps {
    location: ILocation
}

const Map: FC<IMapProps> = ({ location }) => {

    const geoUrl =
        "https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json";
    return (
        <div className={styles.map}>
            <ComposableMap projectionConfig={{
                center: [60, 33]

            }} width={240} height={140} >

                <ZoomableGroup zoom={0.3}>
                    <Geographies geography={geoUrl} >
                        {({ geographies }) =>
                            geographies.map((geo) => {

                                const isBacklight = geo.properties.name === location.locationCountry;
                                return <Geography fill={isBacklight ? "#ec6018" : "grey"} stroke={isBacklight ? 'transparent' : '#2D2B2F'} key={geo.rsmKey} geography={geo} style={{
                                    default: {
                                        outline: 'none'
                                    },
                                    hover: {
                                        fill: "#ec6018",
                                        outline: 'none'
                                    },
                                    pressed: {
                                        fill: "#E42",
                                        outline: 'none'

                                    },
                                }} />

                            }

                            )
                        }
                    </Geographies>
                </ZoomableGroup>
            </ComposableMap>
        </div>
    )
}

export default Map;