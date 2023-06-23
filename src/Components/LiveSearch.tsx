import React, { useRef, useState } from "react";
import classes from "../style/LiveSearch.module.css";
import { Search } from "@material-ui/icons";
import PurchaserM from "../Models/PurchaserModel";
import axios from "axios";
import purchaserInfoStore from "../store/PurchaserInfoStore";
import { observer } from "mobx-react";

interface Props {
  url: string;
  searchBy: string;
}

const LiveSearch: React.FC<Props> = ({ url, searchBy }) => {
  const [results, setResults] = useState<PurchaserM[]>([]);
  const [error, setError] = useState<boolean>(false);

  const inputRef = useRef<HTMLInputElement>(null)

  const fetchData = async (url: string) => {
    try {
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      setError(true);
    }
  };

  const handleSearch = async (searchValue: string) => {
    if (searchValue.length >= 3) {
      const response = await fetchData(`${url}${searchValue}`);
      if (response !== null) {
        setResults(response);
      }
    }
    if (searchValue.length === 0) {
      setResults([]);
    }
  };

  const clearInput = () =>{
    if(inputRef.current) inputRef.current.value = "";
  }

  return (
    <div className={classes.search}>
      <div className={classes.searchBar}>
        <input
          id="search"
          placeholder={`type to search by ${searchBy}`}
          type="text"
          ref={inputRef}
          onChange={(e) => {
            handleSearch(e.target.value);
          }}
        />
        <div className={classes.iconArea}>
          <Search className={classes.icon} />
        </div>
      </div>
      {results.length > 0 && (
        <div className={classes.output}>
          <ul>
            {results
              ? results.map((r) => {
                  return (
                    <li
                      key={r.id}
                      onClick={() => {
                        purchaserInfoStore.setPurchaserAssign(r);
                        purchaserInfoStore.fetchTenders();
                        setResults([]);
                        clearInput();
                      }}
                    >
                      {r.officialName}, {r.city}
                    </li>
                  );
                })
              : null}
          </ul>
        </div>
      )}
    </div>
  );
};

export default observer(LiveSearch);
