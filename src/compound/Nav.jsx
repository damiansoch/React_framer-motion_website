const Nav = () => {
  const navList = ["Home", "About", "Gallery", "Contact"];
  return (
    <div className="nav">
      <ul>
        {navList.map((item) => {
          return <li className={item}>{item}</li>;
        })}
      </ul>
    </div>
  );
};
export default Nav;
