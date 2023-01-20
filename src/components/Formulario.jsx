import React from 'react'

const Formulario = () => {
    return (
        <div className='md:w-1/2 lg:w-2/5'>
            <h2 className='font-black text-3xl text-center'>Seguimiento Pacientes</h2>

            <p className='text-lg mt-5 text-center mb-5'>
                Añade Pacientes y {' '}
                <span className='text-purple-600 font-bold'>
                    Administralos
                </span>
            </p>
            <form className='bg-white shadow-md rounded-lg py-5 px-5'>
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
                    />
                </div>

                <div className='mb-5'>
                    <label htmlFor='email'
                        className='block text-gray-700 uppercase font-bold '
                    >
                        Email
                    </label>
                    <input
                        id='email'
                        type="email"
                        placeholder="Email Contacto Propietario"
                        className="border-2 w-full p-2 m-2 placeholder-slate-700 rounded-md"
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
                    />
                </div>
            </form>
        </div>
    )
}

export default Formulario
