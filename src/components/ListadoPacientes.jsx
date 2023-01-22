import Paciente from "./Paciente.jsx"


const ListadoPacientes = ({ pacientes, setPaciente }) => {

    return (
        <div className="md:w-1/2 lg:3/5 md:h-screen overflow-y-scroll">
            {pacientes && pacientes.length ? (
                <>
                    <h2
                        className="font-black text-3xl text-center"
                    >Listado Pacientes
                    </h2>
                    <p className="text-xl mt-5 mb-5 text-center">
                        Administra a Tus {''}
                        <span
                            className="text-purple-600 font-bold"
                        >Pacientes y Citas
                        </span>
                    </p>

                    {pacientes.map((paciente) => (
                        <Paciente
                            key={paciente.id}
                            paciente={paciente}
                            setPaciente={setPaciente}
                        />
                    ))}
                </>
            ) : (
                <>
                    <h2
                        className="font-black text-3xl text-center"
                    >No hay pacientes
                    </h2>
                    <p className="text-xl mt-5 mb-5 text-center">
                        Comienza Agregando tus {''}
                        <span
                            className="text-purple-600 font-bold"
                        >Pacientes y Citas
                        </span>
                    </p>

                </>
            )}




        </div>
    )
}

export default ListadoPacientes