import styles from "./Search.module.scss";


const Search = () => {
  return (
    <div className={styles.searchWrapp}>
      <span className="material-icons">search</span>
      <input className={styles.search} placeholder="Search place..." />
    </div>
  );
}

export default Search;