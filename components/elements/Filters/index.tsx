import styles from "./Filters.module.scss";
import cn from "classnames";
import { useState } from "react";
import { TypeSetState } from "../../../types/common/index";
import { IPlace } from "../../../types/place";
import { FC } from "react";

const countries = [
    { location: "France" },
    { location: "Japan" },
    { location: "Norway" },
    { location: "Italy" },
    { location: "Germany" },
    { location: "Brazil" },
]


interface IFilter {
    setPlaces: TypeSetState<IPlace[]>;
    initialState: IPlace[];
}

const Filters: FC<IFilter> = ({ initialState, setPlaces }) => {

    const [activeLoc, setActiveLoc] = useState("");


    const filterHandler = (location) => {
        setActiveLoc(location)
        if (activeLoc === location) {
            setPlaces(initialState)
            setActiveLoc("")
        } else {
            setPlaces(initialState.filter(p => p.location.locationCountry === location))
        }


    }

    return (
        <div className={styles.filtersWrapp}>
            {countries.map(f => <button className={cn(styles.btn, { [styles.active]: f.location === activeLoc })} key={f.location} onClick={() => { filterHandler(f.location) }}>{f.location}</button>)}
        </div>
    );
}


export default Filters