import Filters from '../../Filters/index';
import Search from '../../Search/index';
import styles from "./Header.module.scss";


const Header = () => {
    return (
        <div className={styles.headerWrapp}>
           <div className={styles.headerInner}>
           <h1 className={styles.title}>best places for trip</h1>
            <Search />
            <Filters/>
           </div>
        </div>
    )
}

export default Header