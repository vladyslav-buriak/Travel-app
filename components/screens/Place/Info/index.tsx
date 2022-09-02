import { FC } from "react";
import { IPlace } from "../../../../types/place";
import styles from "./Info.module.scss";
import { FaMapMarkerAlt, FaStar, FaRegCalendarAlt } from 'react-icons/fa';
import Map from "./Map/index";

interface IInfoProps {
    place: IPlace;
}
const Info: FC<IInfoProps> = ({ place }) => {
    
    return (
        <div className={styles.wrapp}>
            <div className={styles.titleWrap}>
                <span><FaMapMarkerAlt size={22} /></span>
                <h2>{place.location.locationCity}, {place.location.locationCountry} </h2>
            </div>
            <p className={styles.text}>
                {place.description}
            </p>
            <div className={styles.evaluate}>
                <div className={styles.rating}>
                    <span><FaStar /></span>
                    <span>{place.rating}/10</span>
                </div>
                <div className={styles.calendar}>
                    <span><FaRegCalendarAlt /></span>
                    <span>{place.duration} Days</span>
                </div>
            </div>
            <Map location={place.location}/>
        </div>
    )
}

export default Info