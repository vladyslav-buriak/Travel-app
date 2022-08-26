import { IPlace } from "../../../types/place";
import styles from "./Search.module.scss";
import { ChangeEvent, FC, useState } from "react";
import { TypeSetState } from "../../../types/common/index";

interface ISearch {
  setPlaces: TypeSetState<IPlace[]>;
  isLoading: TypeSetState<boolean>;
  initialState: IPlace[];
}

const Search: FC<ISearch> = ({ initialState, isLoading, setPlaces }) => {
  const [inputValue, setInputValue] = useState("");

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    isLoading(true)
    const enterValue = e.target.value;
    setInputValue(enterValue);


    if (enterValue) {
      setPlaces(initialState.filter(p => p.location.locationCity.toLowerCase().includes(enterValue) || p.location.locationCountry.includes(inputValue)))
    } else {
      setPlaces(initialState)
    }
    isLoading(false)

  }



  return (
    <div className={styles.searchWrapp}>
      <span className="material-icons">search</span>
      <input onChange={handleSearch} className={styles.search} value={inputValue} placeholder="Search place..." />
    </div>
  );
}

export default Search;

