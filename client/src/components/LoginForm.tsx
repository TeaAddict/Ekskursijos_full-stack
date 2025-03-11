import { useForm, SubmitHandler } from "react-hook-form";
import Button from "./Button";
import postLogin from "../utils/user/postLogin";
import toast from "react-hot-toast";

type Inputs = {
  email: string;
  password: string;
};

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<Inputs>({
    defaultValues: {
      email: "email123@gmail.com",
      password: "Email123",
    },
  });

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      const loginData = await postLogin(data);

      if (loginData) {
        localStorage.setItem("token", loginData.token);
        reset();
        toast.success("Successfully logged in!");
      }
    } catch (error) {
      console.error("Login error:", (error as Error).message);
      toast.error((error as Error).message);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3">
      <div className="flex flex-col">
        <input
          {...register("email", {
            required: { value: true, message: "Email is required" },
            minLength: {
              value: 8,
              message: "email must be atleast 8 characters long",
            },
          })}
          placeholder="email"
          className="border-2 rounded-md p-1"
        />
        {errors.email && (
          <span className="text-red-500">{errors.email.message}</span>
        )}
      </div>

      <div className="flex flex-col">
        <input
          {...register("password", {
            required: { value: true, message: "Password is required" },
            minLength: {
              value: 8,
              message: "Password must be atleast 8 characters long",
            },
          })}
          placeholder="Password"
          className="border-2 rounded-md p-1"
        />
        {errors.password && (
          <span className="text-red-500">{errors.password.message}</span>
        )}
      </div>

      <Button>Submit</Button>
    </form>
  );
}
