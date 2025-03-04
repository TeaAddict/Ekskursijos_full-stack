interface Props {
  children: React.ReactNode;
  onClick: () => void;
}

const Button: React.FC<Props> = ({
  children,
  onClick = () => {
    console.log("click");
  },
}) => {
  return (
    <button
      onClick={onClick}
      className="bg-my-red text-white px-2 py-1 hover:bg-my-red-hover cursor-pointer"
    >
      {children}
    </button>
  );
};

export default Button;
