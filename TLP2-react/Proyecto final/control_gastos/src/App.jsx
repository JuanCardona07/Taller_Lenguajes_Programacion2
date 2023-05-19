import { GlobalProvider } from "./context/GlobalState";
import Header from "./components/Header"
import Balance from "./components/Balance"
import { TransaccionForm } from "./components/transacciones/TransaccionForm";

function App(){
  return (
    <GlobalProvider>
      <Header>
        <Balance>
          <TransaccionForm/>
          <h1>Hola Mundo</h1>
        </Balance>
      </Header>
    </GlobalProvider>
  )
}
