import styles from "./Search.module.scss";


const Search =()=>{
    return(
        <div className={styles.searchWrapp}>
          <input className={styles.search} placeholder="Search place..." />
          <span className="material-icons">search</span>
        </div>
    );
}

export default Search;