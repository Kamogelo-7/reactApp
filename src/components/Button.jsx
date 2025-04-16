const Button = ({ btnClick }) => {
  return (
    <button className="btn" onClick={() => alert({ btnClick })}>
      {btnClick}
    </button>
  );
};

export default Button;
