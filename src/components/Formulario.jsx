import { useState, useEffect } from 'react'

const Formulario = () => {
    const [nombre, setNombre] = useState('');
    const [propietario, setPropietario] = useState('');
    const [email, setEmail] = useState('');
    const [alta, setAlta] = useState('');
    const [sintomas, setSintomas] = useState('');


    const handleSubmit = (e) => {
        e.preventDefault();

        console.log("Enviando formulario")
    }

    return (
        <div className='md:w-1/2 lg:w-2/5'>
            <h2 className='font-black text-3xl text-center'>Seguimiento Pacientes</h2>

            <p className='text-xl mt-5 text-center mb-5'>
                Añade Pacientes y {' '}
                <span className='text-purple-600  font-bold'>
                    Administralos
                </span>
            </p>
            <form
                onSubmit={handleSubmit}
                className='bg-white shadow-md rounded-lg py-5 px-5 mb-3'>
                <div className='mb-5' >
                    <label htmlFor='mascota'
                        className='block text-gray-700 uppercase font-bold '
                    >
                        Nombre Mascota
                    </label>
                    <input
                        id='mascota'
                        type="text"
                        placeholder="Nombre de la Mascota"
                        className="border-2 w-full p-2 m-2 placeholder-slate-700 rounded-md"
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                    />
                </div>

                <div className='mb-5'>
                    <label htmlFor='propietario'
                        className='block text-gray-700 uppercase font-bold '
                    >
                        Nombre Propietario
                    </label>
                    <input
                        id='propietario'
                        type="text"
                        placeholder="Nombre del Propietario"
                        className="border-2 w-full p-2 m-2 placeholder-slate-700 rounded-md"
                        value={propietario}
                        onChange={(e) => setPropietario(e.target.value)}
                    />
                </div>

                <div className='mb-5'>
                    <label htmlFor='email'
                        className='block text-gray-700 uppercase font-bold '
                    >
                        Email Contacto Propietario
                    </label>
                    <input
                        id='email'
                        type="email"
                        placeholder="Email Contacto Propietario"
                        className="border-2 w-full p-2 m-2 placeholder-slate-700 rounded-md"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                <div className='mb-5'>
                    <label htmlFor='alta'
                        className='block text-gray-700 uppercase font-bold '
                    >
                        Fecha de Alta
                    </label>
                    <input
                        id='alta'
                        type="date"
                        className="border-2 w-full p-2 m-2 placeholder-slate-700 rounded-md"
                        value={alta}
                        onChange={(e) => setAlta(e.target.value)}
                    />
                </div>

                <div className="mb-5">
                    <label
                        htmlFor="sintomas"
                        className='block text-gray-700 uppercase font-bold'
                    >Síntomas de la Mascota
                    </label>
                    <textarea
                        id='sintomas'
                        className='border-2 w-full p-2 m-2 placeholder-slate-700 rounded-md'
                        placeholder='Describe los síntomas de tu mascota...'
                        value={sintomas}
                        onChange={(e) => setSintomas(e.target.value)}
                    />
                </div>

                <input
                    type="submit"
                    className='bg-purple-600 w-full p-3 text-white 
                    uppercase font-bold hover:bg-purple-800 cursor-pointer
                    transition-all'
                    value="Agregar Paciente"
                />
            </form>
        </div>
    )
}

export default Formulario
