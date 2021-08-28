import movie from "./movie.json";
import styles from "./MovieDetails.module.css"
import { useParams } from "react-router-dom";
import { get } from "../components/helpers/Api";
import { useEffect, useState } from "react";
import { Spinner } from "../components/Spinner";
import { useQuery } from "../components/hooks/UseQuery";
export function MovieDetails(){
    const {movieId} = useParams();
    const [isLoading,setIsLoading]= useState(true);
    const [movie,setMovie] = useState(null);
    
useEffect(() => {
    setIsLoading(true);
    get("/movie/" + movieId).then(data =>{
        
        setMovie(data);
        setIsLoading(false);
    })
}, [movieId])

if(isLoading){
return <Spinner/>
}

    const imageUrl = "https://image.tmdb.org/t/p/w300" + movie.poster_path;
    return <div className={styles.detailsContainer}>
       
        <img className={styles.col + " " + styles.movieImage} src={imageUrl} alt={movie.title} />
        <div className={styles.col + " " +  styles.movieDetails} >
            <p>
                <strong>Titulo</strong>:{movie.title}
            </p>
            <p>
               <strong>Género</strong> :{movie.genres.map(genre => genre.name).join(" , ")}
            </p>
            <p>
                <strong>Sinopsis</strong>:{movie.overview}
            </p>
        </div>
    </div>
}
