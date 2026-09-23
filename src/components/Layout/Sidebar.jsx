import classes from "./Sidebar.module.css";
import { NavLink } from "react-router-dom";
function Sidebar() {
  return (
      <aside className={classes.sidebar}>
      <h2>Menu</h2>

      <ul className={classes.menu}>
       <li>
        <NavLink to="/">🏠 Dashboard</NavLink>
        </li>
        <li>
          <NavLink to="/projects">📁 Projects</NavLink>
          </li>
          <li>
            <NavLink to="/tasks">✅ Tasks</NavLink>
            </li>
            <li>
              <NavLink to="/team">👥 Team</NavLink>
              </li>
              <li>
                <NavLink to="/reports">📊 Reports</NavLink>
                </li>
                <li>
                  <NavLink to="/settings">⚙️ Settings</NavLink>
                  </li>
                  </ul>
    </aside>
  );
  
}

export default Sidebar;