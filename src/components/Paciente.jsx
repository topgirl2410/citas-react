

const Paciente = () => {
    return (
        <div
            className="m-3 bg-white shadow-md rounded-lg px-5 py-5">
            <p
                className="font-bold mb-3 text-gray-700"
            >Nombre: {''}
                <span
                    className="font-normal normal-case"
                >Luna</span>
            </p>

            <p
                className="font-bold mb-3 text-gray-700"
            > Propietario: {''}
                <span
                    className="font-normal normal-case"
                >María</span>
            </p>

            <p
                className="font-bold mb-3 text-gray-700"
            >Email: {''}
                <span
                    className="font-normal normal-case"
                >correo@correo.com</span>
            </p>

            <p
                className="font-bold mb-3 text-gray-700"
            >Fecha de Alta: {''}
                <span
                    className="font-normal normal-case"
                >10/10/2022</span>
            </p>

            <p
                className="font-bold mb-3 text-gray-700"
            >Síntomas de la Mascota: {''}
                <span
                    className="font-normal normal-case"
                >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos repudiandae,
                    error quo excepturi alias earum quibusdam voluptatum debitis ut vitae distinctio
                    magnam, repellat similique unde tempora quia voluptates. Unde.</span>
            </p>

        </div>
    )
}

export default Paciente