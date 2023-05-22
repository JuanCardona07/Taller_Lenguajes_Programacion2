import { GlobalProvider } from "./context/GlobalState";
<<<<<<< HEAD
import { Header } from "./components/Header"
import { Balance } from "./components/Balance"
import { Ingresos_gastos} from "./components/Ingresosgastos"
import { TransaccionList } from "./components/transacciones/TransaccionList"
import { TransaccionForm } from "./components/transacciones/TransaccionForm";
import { Grafico_gastos } from "./components/Graficogastos"
=======
import Header from "./components/Header"
import Balance from "./components/Balance"
import { TransaccionForm } from "./components/transacciones/TransaccionForm";
>>>>>>> 25775486091ce7fd8c8a3674b6312725525e11f9

function App(){
  return (
    <GlobalProvider>
<<<<<<< HEAD
      <div className="bg-neutral-950 text-white h-screen flex justify-center items-center">
        <div className="w-2/5 flex justify-center items-center">
          <Header />
          <div className="flex flex-col md:flex-row justify-between gap-4">
            <div className="flex-1">
              <Ingresos_gastos />
              <Balance />
              <TransaccionForm />
            </div>
            <div className="flex-1 flex flex-col">
              <Grafico_gastos />
              <TransaccionList />
            </div>
          </div>
        </div>
      </div>
    </GlobalProvider>
  );
}

export default App; 
=======
      <Header>
        <Balance>
          <TransaccionForm/>
          <h1>Hola Mundo</h1>
        </Balance>
      </Header>
    </GlobalProvider>
  )
}
>>>>>>> 25775486091ce7fd8c8a3674b6312725525e11f9
