import classes from "./Navbar.module.css";
function Navbar() {
  return (
    <header className={classes.header}>
      <h2 className={classes.logo}>ProjectFlow</h2>

      <div className={classes.actions}>
        <input
          className={classes.search}
          type="text"
          placeholder="Search..."
        />

        <button className={classes.profile}>
          Profile
        </button>
      </div>
    </header>
  );
}

export default Navbar;