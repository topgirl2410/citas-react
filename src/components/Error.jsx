

const Error = ({ mensaje }) => {
    return (

        <div className='bg-red-600 text-white text-center rounded-md p-3 
            uppercase font-bold mb-3'>
            <p>{mensaje}</p>
        </div>

    )
}

export default Error