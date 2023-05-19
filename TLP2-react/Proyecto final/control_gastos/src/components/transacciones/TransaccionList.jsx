import { useGlobalState } from "../../context/GlobalState";
import {TransaccionItem} from "../transacciones/TransaccionItem"

export function TransaccionList() {
    return (
        <div className="bg-zinc-900 p-4 my -2">
            <div className="h-full flex items-center justify-center w-full flex-col">
                <h1 className="text-x1 font-bold my-2">
                    Todavia no hay transacciones
                    </h1>
            </div>
        </div>
    );
}

return (
    <div className="bg-zinc-900 p-4">
        <h3 className="text-slate-300 text-x1 font bold my-2 text-center">Historial</h3>
        <ul>
            {transacciones.map((transaccion) => (
                <TransaccionItem key={transaccion.id} transaccion={transaccion}/>
            ))}
        </ul>
    </div>
)