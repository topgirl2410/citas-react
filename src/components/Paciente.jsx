

const Paciente = ({ paciente }) => {
    const { nombre, propietario, email, alta, sintomas } = paciente;

    return (
        <div
            className="m-5 bg-white shadow-md rounded-lg px-5 py-5">
            <p
                className="font-bold mb-3 text-gray-700"
            >Nombre: {''}
                <span
                    className="font-normal normal-case"
                >{nombre}</span>
            </p>

            <p
                className="font-bold mb-3 text-gray-700"
            > Propietario: {''}
                <span
                    className="font-normal normal-case"
                >{propietario}</span>
            </p>

            <p
                className="font-bold mb-3 text-gray-700"
            >Email: {''}
                <span
                    className="font-normal normal-case"
                >{email}</span>
            </p>

            <p
                className="font-bold mb-3 text-gray-700"
            >Fecha de Alta: {''}
                <span
                    className="font-normal normal-case"
                >{alta}</span>
            </p>

            <p
                className="font-bold mb-3 text-gray-700"
            >Síntomas de la Mascota: {''}
                <span
                    className="font-normal normal-case"
                >{sintomas}</span>
            </p>

            <div className="flex justify-between">
                <button
                    className="py-2 px-10 bg-purple-600 hover:bg-purple-800 text-white 
                font-bold uppercase rounded-lg mt-4"
                    type="button"

                >
                    Editar
                </button>

                <button
                    className="py-2 px-10 bg-red-600 hover:bg-red-800 text-white
                    font-bold uppercase rounded-lg mt-4"
                    type="button"

                >
                    Eliminar
                </button>
            </div>
        </div>
    )
}

export default Paciente