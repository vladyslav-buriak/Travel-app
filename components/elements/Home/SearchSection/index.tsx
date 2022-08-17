import Filters from '../../Filters/index';
import Search from '../../Search/index';
import styles from "./SearchSection.module.scss";


const SearchSection = () => {
    return (
        <div className={styles.searchSectionWrapp}>
           <div className={styles.searchSectionInner}>
           <h1 className={styles.title}>best places for trip</h1>
            <Search />
            <Filters/>
           </div>
        </div>
    )
}

export default SearchSection