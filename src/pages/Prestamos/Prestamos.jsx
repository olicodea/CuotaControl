import { useEffect, useState, useCallback } from "react";
import CardPestamos from "../../components/PagesComponents/Prestamos/Card/CardPestamos";
import useTheme from "../../components/Hooks/useTheme";

const API_URLPRESTAMOS = "../../../public/services/data.json";

export default function Prestamos() {
    const [dataPrestamo, setDataPrestamo] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [filter, setFilter] = useState('all');
    const { styleDarkHome, selectTheme } = useTheme()

    const fetchPrestamo = async () => {
        try {
            const response = await fetch(API_URLPRESTAMOS);
            if (!response.ok) {
                throw new Error('Error');
            }
            const data = await response.json();
            setDataPrestamo(data);
            setFilteredData(data);
        } catch (error) {
            console.error('Fetch error:', error);
        }
    };

    useEffect(() => {
        fetchPrestamo();
    }, []);


    const handleChangeFilter = useCallback((e) => {
        const selectedFilter = e.target.value;
        setFilter(selectedFilter);

        const newData = selectedFilter === 'all'
            ? dataPrestamo
            : dataPrestamo.filter(item => item.estadoPrestamo === selectedFilter);

        setFilteredData(newData);

    }, [dataPrestamo]);

    return (
        <div className={`${styleDarkHome} h-screen`}>
            <header className="flex justify-between p-5">
                <h1>Lista de préstamos</h1>
                <select id="Options" onChange={handleChangeFilter} value={filter} className={selectTheme}
                >
                    <option value="all">Todos</option>
                    <option value="dado">Prestado</option>
                    <option value="pedido">Pedido</option>
                </select>
            </header>
            <main className="w-screen h-auto">
                <h4 className="pl-4">{filter === 'dado' ? "Prestados" : filter === 'pedido' ? "Pedidos" : "Todos"}</h4>

                {filteredData.length > 0 ? (
                    filteredData.map(item => {
                        const { id, nombreContacto, nroPrestamo, porcentajeCumplido, estadoPrestamo } = item;
                        return (
                            <CardPestamos
                                key={id}
                                nombreContacto={nombreContacto}
                                nroPrestamo={nroPrestamo}
                                porcentajeCumplido={porcentajeCumplido}
                                estadoPrestamo={estadoPrestamo}
                            />
                        );
                    })
                ) : (
                    <p>No hay datos disponibles.</p>
                )}
            </main>
        </div>
    );
}
