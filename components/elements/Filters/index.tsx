import styles from "./Filters.module.scss";
import cn from "classnames";
import { useState } from "react";
import { TypeSetState } from "../../../types/common/index";
import { IPlace } from "../../../types/place";
import { FC } from "react";
import uniqBy from 'lodash/uniqBy';


interface IFilter {
    setPlaces: TypeSetState<IPlace[]>;
    initialState: IPlace[]
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
            {uniqBy(initialState, "location.locationCountry").map(f => <button className={cn(styles.btn, { [styles.active]: f.location.locationCountry === activeLoc })} key={f.location.locationCountry} onClick={() => { filterHandler(f.location.locationCountry) }}>{f.location.locationCountry}</button>)}
        </div>
    );
}


export default Filters