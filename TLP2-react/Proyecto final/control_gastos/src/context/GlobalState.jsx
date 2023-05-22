import { useContext, useReducer, createContext, useEffect } from "react";
<<<<<<< HEAD
import AppReducer from "./AppReducer"

const initialState = {
    transacciones: [],
}; 
=======
import AppReducer from "./AppReducer";

const initialState = {
    transacciones: [],
};
>>>>>>> 25775486091ce7fd8c8a3674b6312725525e11f9

export const Context = createContext(initialState);

export const useGlobalState = () => {
<<<<<<< HEAD
    const context = useContext((context));
    if (!context)
    throw new Error("useGlobalState debe utilizarse dentro de un GlobalState");
=======
    const context = useContext(context);
    if(!context)
    throw new Error("useGlobalState debe utilizarse dentro de un GlobalState"),
>>>>>>> 25775486091ce7fd8c8a3674b6312725525e11f9
    return context;
};

export const GlobalProvider = ({ children }) => {
<<<<<<< HEAD
    const [state, dispatch]  = useReducer(AppReducer, initialState, () => {
        const localData = localStorage-getItem("transacciones");
        return localData ? JSON.parse(localData) : initialState;
    }); 
=======
    const [state, dispatch] = useReducer(AppReducer, initialState, () => {
        const localData = localStorage.getItem("transacciones");
        return localData ? JSON.parse(localData) : initialState;
    })
>>>>>>> 25775486091ce7fd8c8a3674b6312725525e11f9

    useEffect(() => {
        localStorage.setItem("transacciones", JSON.stringify(state));
    }, [state]);

    const eliminarTransaccion = (id) =>
    dispatch({
        type: "ELIMINAR_TRANSACCION",
        payload: id,
    });

<<<<<<< HEAD
    const agregarTransaccion = (transaccion) =>
    dispatch({
        type: "ADD_TRANSACCION",
        payload: transaccion,
=======
    const agregarTransaccion = (transacciones) =>
    dispatch({
        type: "AGEGARTRANSACCION",
        payload: transacciones;
>>>>>>> 25775486091ce7fd8c8a3674b6312725525e11f9
    });

    return (
        <Context.Provider
<<<<<<< HEAD
            value={{
                transacciones: state.transacciones,
                eliminarTransaccion,
                agregarTransaccion,
            }}
            >
                {children}
            </Context.Provider>
=======
        value={{
            transacciones: state.transacciones,
            eliminarTransaccion,
            agregarTransaccion,
        }}
        >
            {children}
        </Context.Provider>
>>>>>>> 25775486091ce7fd8c8a3674b6312725525e11f9
    );
};