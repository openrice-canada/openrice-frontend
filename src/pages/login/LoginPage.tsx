import { useForm, Controller } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import TextInput from "../../components/Input/TextInput";
import { postUserAuth } from "../../api/auth";

function LoginPage() {
  const navigate = useNavigate();

  const {
    handleSubmit,
    control,
  } = useForm();

  const userLogin = async (user: { email: string; password: string; }) => {
    const token = await postUserAuth(user);
    if (token.message) {
			console.error(token.message)
		} else {
			sessionStorage.setItem('jwt', token.token||"");
			navigate("/")
		}
  }

  return (
    <form
      className="h-screen flex flex-col gap-6 justify-center max-w-sm mx-auto px-4"
      onSubmit={handleSubmit((user) => userLogin(user as { email: string; password: string; }))}
    >
      <p className="text-3xl font-bold">Log in to Openrice</p>
      <p>
        New to Openrice? <Link to="/sign-up">Sign-up</Link>
      </p>
      <Controller
        name="emailOrUsername"
        control={control}
        defaultValue={''}
        render={({ field }) => (
          <TextInput
            label="Email Or Username"
            type="text"
            placeholder="Enter your email or username"
            value={field.value}
            onChange={field.onChange}
          />
        )}
      />
      <Controller
        name="password"
        control={control}
        defaultValue={''}
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
