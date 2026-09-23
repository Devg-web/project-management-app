import classes from "./Modal.module.css";

function Modal({ children }) {
  return (
    <div className={classes.backdrop}>
      <div className={classes.modal}>
        {children}
      </div>
    </div>
  );
}

export default Modal;