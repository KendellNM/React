import React, { useState, useEffect } from "react";

function Libros() {
    const [libros, setLibros] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8080/api/libros').then(response => response.json()).then(data => setLibros(data));
    }, [])

    return (
        <div>
            <h2 class="font-bold text-lg mt-8">Lista de libros</h2>
            <table class="mt-7 border-collapse border border-gray-300 w-full">
                <thead>
                    <tr class="bg-gray-200">
                        <th class="border border-gray-300 px-4 py-2">Título</th>
                        <th class="border border-gray-300 px-4 py-2">Páginas</th>
                        <th class="border border-gray-300 px-4 py-2">Edición</th>
                        <th class="border border-gray-300 px-4 py-2">Sección</th>
                    </tr>
                </thead>
                <tbody>
                    {libros.map(libro => (
                        <tr key={libro.id}>
                            <td class="border border-gray-300 px-4 py-2">{libro.titulo}</td>
                            <td class="border border-gray-300 px-4 py-2">{libro.paginas}</td>
                            <td class="border border-gray-300 px-4 py-2">{libro.edicion}</td>
                            <td class="border border-gray-300 px-4 py-2">{libro.seccion.nombre}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Libros;