import { useState } from 'react'
import './App.css'

import { useForm } from 'react-hook-form';

const hostname = import.meta.env.VITE_HOSTNAME

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submit = data =>{
    const nameProps = register('name');
    console.log(...register())
  }

  return (
    <form onSubmit={handleSubmit(submit)}>
      <h1 className='text-4xl '>Hello welcoe to the yusuf page {hostname}</h1>
      <input {...register('firstName') } placeholder='Name' className='border-2 rounded-2xl px-3' />
      <input {...register('lastName', { required: true })} placeholder='Last Name' className='border-2 rounded-2xl px-3' />
      {errors.lastName && <p>Last name is required.</p>}
      <input {...register('age', { pattern: /\d+/ })} placeholder='age' className='border-2 rounded-2xl px-3'/>
      {errors.age && <p>Please enter number for age.</p>}
      <input type="submit" className='cursor-pointer bg-blue-400 rounded-lg px-3'/>
    </form>
  );
}
export default App
