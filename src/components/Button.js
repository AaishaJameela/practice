const Button = ({ color, firstName, onClick }) => {
  return (
    <button
      onClick={onClick}
      style={{ backgroundColor: color }}
      className="btn"
    >
      {firstName}
    </button>
  );
};
export default Button;
