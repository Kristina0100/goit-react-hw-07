import styles from "./SearchBox.module.css";

import { useDispatch, useSelector } from "react-redux";
import { changeFilter, selectNameFilter} from "../../redux/filtersSlice";

const SearchBox = () => {

  const filter = useSelector(selectNameFilter);
  const dispatch = useDispatch();

  return (
    <div>
      <label className={styles.search}>
        Filter contacts by name
        <input className={styles.input} value={filter} type="text" onChange={(event) => {
            const action = changeFilter(event.target.value);
          dispatch(action);
        }} />
      </label>
    </div>
  )
}

export default SearchBox