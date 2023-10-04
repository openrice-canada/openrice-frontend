import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

const SignUpPage = () => {
  const {
    register,
    handleSubmit,
    setError,
    // formState: { errors },
  } = useForm();

  const history = useNavigate();
  // eslint-disable-next-line
  const onSubmit = (data: any) => {
    if (data.password !== data.passwordConfirm) {
      setError("passwordConfirm", {
        type: "manual",
        message: "Passwords do not match"
      });
    } else {
      console.log(data);
      history("/login");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <p className="title">Sign up for Openrice</p>
      <p className="agreement">By continuing, you agree to Yelp’s Terms of Service and acknowledge Yelp’s Privacy Policy.</p>
      <br></br>
      <input {...register('email', { required: true })} placeholder="Email" className="textfield" />
      <br></br>
      <br></br>
      <input {...register('username', { required: true })} placeholder="Username" className="textfield" />
      <br></br>
      <br></br>
      <input {...register('password', { required: true })} placeholder="Password" className="textfield" />
      <br></br>
      <br></br>
      <input {...register('passwordConfirm')} placeholder="Confirm Password" className="textfield" />
      <br></br>
      <br></br>
      <input type="submit" value="Register" className="register" />
    </form>
  );
}

export default SignUpPage;