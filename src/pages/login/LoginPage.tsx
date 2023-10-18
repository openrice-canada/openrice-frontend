import { useForm, Controller } from "react-hook-form";
import { Link } from "react-router-dom";
import TextInput from "../../components/Input/TextInput";

function LoginPage() {
  const {
    handleSubmit,
    control,
  } = useForm();

  return (
    <form
      className="h-screen flex flex-col gap-6 justify-center max-w-sm mx-auto px-4"
      onSubmit={handleSubmit((data) => console.log(data))}
    >
      <p className="text-3xl font-bold">Log in to Openrice</p>
      <p>
        New to Openrice? <Link to="/sign-up">Sign-up</Link>
      </p>
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
      <button
        type="submit"
        className="bg-[#000000] px-4 py-2 rounded-md text-[#ffffff] font-bold"
      >
        Log In
      </button>
    </form>
  );
}

export default LoginPage;
