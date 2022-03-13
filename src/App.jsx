import React, { useState, useEffect } from 'react'
import Box from './Box'


const App = () => {

  const [employee, setEmployee] = useState([]);

  const getUsers = async () => {
    const response = await fetch("https://hub.dummyapis.com/employee?noofRecords=10&idStarts=1001"); //Bina awiat kiye, we get a promise, when the promise gets fulfilled then we get data
    setEmployee(await response.json()); //It's an array of objects.
  }

  useEffect(() => {
    getUsers();
  }, [])

  return (
    <div className='grid grid-cols-4 gap-4 bg-gray-600 h-screen w-screen'>
      {
        employee.map((val) => {
          return (<Box key={val.id} firstName={val.firstName} imageUrl={val.imageUrl} lastName={val.lastName} email={val.email} dob={val.dob}/>)}
      )
    }
    </div>
  )

}

export default App