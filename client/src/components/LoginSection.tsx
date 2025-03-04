import { Link } from "react-router-dom";

const LoginSection = () => {
  return (
    <div className="flex gap-4">
      <Link to={"/login"} className={"hover:text-white"}>
        Login
      </Link>
      <Link to={"/register"} className={"hover:text-white"}>
        Register
      </Link>
    </div>
  );
};

export default LoginSection;
