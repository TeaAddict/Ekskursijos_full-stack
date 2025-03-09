import LoginForm from "../components/LoginForm";

const Login = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-5">
      <h1 className="text-2xl">Login form</h1>
      <LoginForm />
    </div>
  );
};

export default Login;
