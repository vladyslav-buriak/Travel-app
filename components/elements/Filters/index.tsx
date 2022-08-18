import styles from "./Filters.module.scss";
import cn from "classnames";
import { useState } from "react";

const locName = [
    { location: "Paris" },
    { location: "Bora Bora" },
    { location: "Maui" },
    { location: "Tahiti" },
    { location: "Brazil" },
    { location: "Norway" },
]


const Filters = () => {
    const [activeLoc, setActiveLoc] = useState("");
    
    return (
        <div className={styles.filtersWrapp}>
            {locName.map(f => <button className={cn(styles.btn, { [styles.active]: f.location === activeLoc })} key={f.location} onClick={() => { setActiveLoc(f.location) }}>{f.location}</button>)}
        </div>
    );
}


export default Filters