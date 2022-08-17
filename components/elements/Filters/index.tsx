import styles from "./Filters.module.scss";

const locName = [
    { location: "Paris" },
    { location: "Bora Bora" },
    { location: "Maui" },
    { location: "Tahiti" },
    { location: "Brazil" },
    { location: "Norway" },
]


const Filters = () => {
    return (
        <div className={styles.filtersWrapp}>
            {locName.map(f => <button>{f.location}</button>)}
        </div>
    );
}


export default Filters