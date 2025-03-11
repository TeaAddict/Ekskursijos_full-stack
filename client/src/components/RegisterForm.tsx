import { useForm, SubmitHandler } from "react-hook-form";
import Button from "./Button";
import postRegister from "../utils/user/postRegister";
import toast from "react-hot-toast";

type Inputs = {
  email: string;
  username: string;
  password: string;
};

export default function RegisterForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    reset,
  } = useForm<Inputs>({
    defaultValues: {
      email: "email123@gmail.com",
      username: "Email123",
      password: "Email123",
    },
  });

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      const registerData = await postRegister(data);
      if (registerData) {
        console.log(registerData);
        reset();
        toast.success("Successfully created account");
      }
    } catch (error) {
      const errorObj = error as { [key: string]: string | undefined };

      for (const [key, value] of Object.entries(errorObj)) {
        if (value && ["email", "username"].includes(key)) {
          setError(key as "email" | "username", {
            type: "manual",
            message: value,
          });
        } else if (key === "error" && value) {
          toast.error(value);
        }
      }
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
          {...register("username", {
            required: { value: true, message: "Username is required" },
            minLength: {
              value: 8,
              message: "username must be atleast 8 characters long",
            },
          })}
          placeholder="username"
          className="border-2 rounded-md p-1"
        />
        {errors.username && (
          <span className="text-red-500">{errors.username.message}</span>
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
