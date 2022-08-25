import Filters from '../../Filters/index';
import Search from '../../Search/index';
import PopularPlaces from '../PopularPlaces/index';
import styles from "./HeaderSection.module.scss";


const HeaderSection = ({ initialState ,setPlaces ,isLoading }) => {
    return (
        <div className={styles.HeaderSectionWrapp}>
            <div className={styles.HeaderSectionInner}>
                <h1 className={styles.title}>best places for trip</h1>
                <Search initialState={initialState} setPlaces={setPlaces} isLoading={isLoading} />

            </div>
        </div>
    )
}

export default HeaderSection;