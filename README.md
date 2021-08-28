<h3>Web de peliculas con buscador:mag:</h3>

Proyecto final de curso de React Js,practica de Hooks ,routing,formularios,props,CSS Grid y Flex,Apis ,@mediaquerys y más.
<p>:file_folder:La estructura de las carpetas es: Componentes, para los componentes con sus respectivos módulos de css,dentro también está helpers que contiene la función que hace la petición a la api y hooks que contiene el hook useQuery.Por otro lado está Pages para las páginas principales que se acceden desde las rutas. </p>
Cuatro componentes :
<ul>
  <li>MovieCard:para la tarjeta de cada pelicula. </li>
  <li>MoviesGrid:para estructurar la grilla de los posters de las peliculas.</li>
  <li>Search:para el formulario de busqueda.</li>
  <li>Spinner:el spinner de carga.</li>
</ul>

![](src/img/movie.gif)

La interfáz de las imágenes de las peliculas la hice con Css <strong>Grid</strong>,donde cada película es un item y para las columnas grid-template-columns con la función de repetir y auto-fill para que se generen columnas de manera automática con un ancho determinado .Para la separacion entre imágenes usé gap.

```
.moviesGrid {
  display: grid;
  grid-template-columns: repeat(auto-fill, 230px);
  gap: 40px;
  padding: 40px;
  justify-content: center;
}

@media (max-width: 560px) {
  .moviesGrid {
    grid-template-columns: 100%;
  }
}
```
<p>Para mostrarlas desde los datos de la api ,usé el metodo <strong>map</strong> para qué, por cada objeto del arreglo muestre una fila de una lista.</p>
Usé la libreria<strong>React Router Dom</strong> para declarar las rutas que usé en la aplicación.

```
 <Router>
      <header> 
       <Link to= "/"> <h1 className={styles.title}>Movies</h1></Link>
      </header>
      <main>
      <Switch>
          <Route exact path="/movies/:movieId"> <MovieDetails/></Route>
          <Route path="/"><LandingPage/> </Route>        
        </Switch>
      </main>
    </Router>
```
La página de detalles de cada pelicula la estructuré con <strong>Css Flex</strong>,en el cual en pantalla grande hay dos elementos en fila(imagen y sinopsis)y en pantalla pequeña ,en una columna ,un elemento encima del otro porque no hay espacio para los dos, Wrap empuja hacia abajo el elemento que no entra en la pantalla.:point_down:	

```
.detailsContainer {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
```

![](src/img/moviedos.jpg)

Para la Api de TheMoviedb.com,usé <strong>Fetch</strong>y le pasé la Url como sugería el sitio y <strong>useEffect</strong>.
Para que se cargue con las peliculas actualizadas usé <strong>useState</strong>.
