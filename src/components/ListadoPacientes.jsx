import Paciente from "./Paciente.jsx"

const ListadoPacientes = () => {
    return (
        <div className="md:w-1/2 lg:3/5 md:h-screen overflow-y-scroll">
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
            <Paciente />
            <Paciente />
            <Paciente />
        </div>
    )
}

export default ListadoPacientes