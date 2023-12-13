const Tipografia = ({ color, texto }) => {
  return <h1 style={{ color: `var(${color})` }}>{texto}</h1>;
};

export default Tipografia;
