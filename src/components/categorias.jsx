import React, {useState, useEffect} from "react";

function Categorias() {
    const [categorias, setCategorias] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8080/api/categorias').then(response => response.json()).then(data => setCategorias(data));
    }, [])

    return(
        <div>
        <h2 className="font-bold text-lg mt-8">Lista de categorias</h2>
        <ul className="gap-9 flex flex-col mt-7 ">
            {categorias.map(
                categoria => (<li className="ml-4" key={categoria.id}>{categoria.nombre}</li>
                
                )
            )}
        </ul>
    </div>
    )
}

export default Categorias;