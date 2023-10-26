import { useEffect, useState } from 'react'
// import './App.css'
import axios from 'axios';
import Card from './Components/Card';

function App() {
  const [libros, setLibros] = useState(null)
  const [autores, setAutores] = useState(null)
  const [categorias, setCategorias] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(()=>{
    axios.get('http://18.230.21.142:8080/?min=1&max=2', {params: {min:1, max:2}})
      .then(({data}) => {
        const {libros, categorias, autores} = data;
        console.log(libros, autores, categorias);
        setLibros(libros);
        setAutores(autores);
        setCategorias(categorias);
      })
      .catch(err => console.error(err))
      .finally(()=>setLoading(false));
  }, [])

  return (
    <>
    <div>

      {(!loading&&libros)? <p>Leyendo datos</p> :libros.map((libro) => {
        const {titulo, status, paginas, isbn, imagen, id_libro, descripcionCorta} = libro;
        {console.log(titulo);}
        // <Card title={titulo} url={imagen} description={descripcionCorta} status={status}/>
        <h3>Probando</h3>
        })
      }
    </div>
    </>
  )
}

export default App
