import { useAuthStore } from "../store/authStore";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

const Login = () => {
  const login = useAuthStore((state) => state.login);
  const navigate = useNavigate();

  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    if (data.email === "admin@test.com" && data.password === "123456") {
      login({ email: data.email });
      navigate("/");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="flex h-screen items-center justify-center">
      <form onSubmit={handleSubmit(onSubmit)} className="p-6 shadow rounded w-80">
        <h2 className="text-xl mb-4">Login</h2>

        <input
          {...register("email")}
          placeholder="Email"
          className="border p-2 w-full mb-3"
        />

        <input
          {...register("password")}
          type="password"
          placeholder="Password"
          className="border p-2 w-full mb-3"
        />

        <button className="bg-blue-500 text-white p-2 w-full">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
