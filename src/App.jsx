import { useState } from "react"
import Header from "./components/Header.jsx"
import Formulario from "./components/Formulario.jsx"
import ListadoPacientes from "./components/ListadoPacientes.jsx"

function App() {
  const [pacientes, setPacientes] = useState([]);
  const [paciente, setPaciente] = useState({});

  return (
    <div className="container mx-auto mt-20">
      <Header />
      <div className="mt-12 md:flex">
        <Formulario
          setPacientes={setPacientes}
          pacientes={pacientes}
          paciente={paciente}
        />
        <ListadoPacientes
          pacientes={pacientes}
          setPaciente={setPaciente}
        />
      </div>
    </div>
  )
}

export default App
