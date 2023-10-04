import React from 'react'

import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <form onSubmit={handleSubmit((data) => console.log(data))}>
      <p className="title">Log in to Openrice</p>
      <p>New to Openrice? <Link to="/sign-up">Sign-up</Link></p>
      <br></br>
      <input {...register('username')} placeholder="Username" className="textfield"/>
      <br></br>
      <br></br>
      <input {...register('password')} placeholder="Password" className="textfield"/>
      <br></br>
      <br></br>
      <input type="submit" value="Log In" className="submit"/>
    </form>
  );
}

export default LoginPage