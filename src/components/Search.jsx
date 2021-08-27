import styles from "./Search.module.css";
import{FcSearch} from "react-icons/fc";
import { useHistory } from "react-router";
import { useEffect, useState } from "react";
import { useQuery } from "./hooks/UseQuery";

export function Search(){ 
    const query = useQuery();
    const search = query.get("search");

    const[searchText,setSearchText] = useState("");
    const history = useHistory();

    useEffect(() => {
        setSearchText
         (search || "") ; 
    }, [search]);



const handleSubmit = (e) =>{
    e.preventDefault();
    history.push("/?search=" + searchText)
}
    return(
        <form className={styles.searchContainer} onSubmit={handleSubmit}>
            <div className={styles.searchBox}>
                <input className={styles.searchInput}  type="text" value={searchText} onChange={(e) => setSearchText(e.target.value)} />
                <button className={styles.searchButton}  type="submit">
                <FcSearch size={20}/>
                </button>
            </div>
        </form>
    )
}