import { useState } from "react";
import { useGlobalState} from "../../context/GlobalState";

export function TransaccionForm() {
    const { agregarTransaccion } = useGlobalState();

    const [descripcion, setdescripcion] = useState("");
    const [importe, setimporte] = useState(0);

    const onSubmit = (e) => {
        e.preventDefault(),
        agregarTransaccion({
            id: window.crypto.randomUUID(),
            descripcion,
            importe: +importe,
        });

        setdescripcion("");
            setimporte(0)
    };

    return (
        <div>
            <form onSubmit={onSubmit}>
                <input type="text" 
                 onChange={(e) => setdescripcion(e.target.value)}
                 placeholder="Ingrese una descripcion"
                 clasName="bg-zinc-600 text-white px-3 py-2 rounded-lg block mb-2 w-full"
                 value={descripcion}
                 />
                 <input type="number"
                 onChange={(e) => setimporte(e.target.value)}
                 step="0.01"
                 placeholder="0.00"
                 className="bg-zinc-600 text-white px-3 py-2 rounded-lg block mb-2 w-full"
                 value={importe}
                 />
                 <button
                 className="bg-indigo-700 text-white px-3 py-2 rounded-lg block mb-2 w-full disabled:opacity-50"
                 disabled={!descripcion || !importe}
                 >Agregar Transaccion</button>
            </form>
        </div>
    );
}