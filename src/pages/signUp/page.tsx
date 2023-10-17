import { useForm, Controller } from 'react-hook-form';
import TextInput from "../../components/Input/TextInput";

const SignUpPage = () => {
  const {
    handleSubmit,
    control,
  } = useForm();

  return (
    <form
      className="h-screen flex flex-col gap-6 justify-center max-w-sm mx-auto px-4"
      onSubmit={handleSubmit((data) => console.log(data))}
    >
      <p className="text-3xl font-bold">Sign up for Openrice</p>
      <p>
      By continuing, you agree to Openrice’s Terms of Service and acknowledge Openrice’s Privacy Policy.
      </p>
      <Controller
        name="email"
        control={control}
        render={({ field }) => (
          <TextInput
            label="Email"
            type="email"
            placeholder="Enter your email"
            value={field.value}
            onChange={field.onChange}
          />
        )}
      />
      <Controller
        name="username"
        control={control}
        render={({ field }) => (
          <TextInput
            label="Username"
            type="text"
            placeholder="Enter your username"
            value={field.value}
            onChange={field.onChange}
          />
        )}
      />
      <Controller
        name="password"
        control={control}
        render={({ field }) => (
          <TextInput
            label="Password"
            type="password"
            placeholder="Enter your password"
            value={field.value}
            onChange={field.onChange}
          />
        )}
      />
      <Controller
        name="password"
        control={control}
        render={({ field }) => (
          <TextInput
            label="Confirm Password"
            type="password"
            placeholder="Confirm your password"
            value={field.value}
            onChange={field.onChange}
          />
        )}
      />
      <button
        type="submit"
        className="bg-[#000000] px-4 py-2 rounded-md text-[#ffffff] font-bold"
      >
        Sign up
      </button>
    </form>
  );
}


export default SignUpPage;