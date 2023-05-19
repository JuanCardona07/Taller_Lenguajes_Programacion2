import { useContext, useReducer, createContext, useEffect } from "react";
import AppReducer from "./AppReducer";

const initialState = {
    transacciones: [],
};

export const Context = createContext(initialState);

export const useGlobalState = () => {
    const context = useContext(context);
    if(!context)
    throw new Error("useGlobalState debe utilizarse dentro de un GlobalState"),
    return context;
};

export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState, () => {
        const localData = localStorage.getItem("transacciones");
        return localData ? JSON.parse(localData) : initialState;
    })

    useEffect(() => {
        localStorage.setItem("transacciones", JSON.stringify(state));
    }, [state]);

    const eliminarTransaccion = (id) =>
    dispatch({
        type: "ELIMINAR_TRANSACCION",
        payload: id,
    });

    const agregarTransaccion = (transacciones) =>
    dispatch({
        type: "AGEGARTRANSACCION",
        payload: transacciones;
    });

    return (
        <Context.Provider
        value={{
            transacciones: state.transacciones,
            eliminarTransaccion,
            agregarTransaccion,
        }}
        >
            {children}
        </Context.Provider>
    );
};