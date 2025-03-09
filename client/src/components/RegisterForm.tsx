import { useForm, SubmitHandler } from "react-hook-form";
import Button from "./Button";
import postRegister from "../utils/user/postRegister";

type Inputs = {
  username: string;
  password: string;
};

export default function RegisterForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<Inputs>({
    defaultValues: {
      username: "username123",
      password: "password123",
    },
  });

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    await postRegister(data);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3">
      <div className="flex flex-col">
        <input
          {...register("username", {
            required: { value: true, message: "Username is required" },
            minLength: {
              value: 8,
              message: "Username must be atleast 8 characters long",
            },
          })}
          placeholder="Username"
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
