

const Paciente = ({ paciente }) => {
    console.log(paciente)

    return (
        <div
            className="m-5 bg-white shadow-md rounded-lg px-5 py-5">
            <p
                className="font-bold mb-3 text-gray-700"
            >Nombre: {''}
                <span
                    className="font-normal normal-case"
                >{paciente.nombre}</span>
            </p>

            <p
                className="font-bold mb-3 text-gray-700"
            > Propietario: {''}
                <span
                    className="font-normal normal-case"
                >{paciente.propietario}</span>
            </p>

            <p
                className="font-bold mb-3 text-gray-700"
            >Email: {''}
                <span
                    className="font-normal normal-case"
                >{paciente.email}</span>
            </p>

            <p
                className="font-bold mb-3 text-gray-700"
            >Fecha de Alta: {''}
                <span
                    className="font-normal normal-case"
                >{paciente.alta}</span>
            </p>

            <p
                className="font-bold mb-3 text-gray-700"
            >Síntomas de la Mascota: {''}
                <span
                    className="font-normal normal-case"
                >{paciente.sintomas}</span>
            </p>
        </div>
    )
}

export default Paciente