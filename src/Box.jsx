import React from 'react'

const Box = ({ firstName, imageUrl, lastName, email, dob }) => {
    return (

        <div className='bg-slate-200 w-72 h-72 flex flex-col items-center justify-center rounded-xl shadow-2xl border-2 border-purple-600 hover:scale-125  transition-all  ease-in mx-7 px-3'>
            <img className='rounded-full my-1' src={imageUrl} />
            <h1 className="text-purple-600 text-center font-bold text-2xl  my-1">
                {firstName} {lastName}
            </h1>
            <p className='text-blue-500 font-bold'>{email}</p>
            <p className='text-green-600 font-bold my-1'>{dob}</p>
        </div>
    )
}

export default Box

