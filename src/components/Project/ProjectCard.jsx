import classes from "./ProjectCard.module.css";

function ProjectCard({project, onDelete}) {
  return (
    <div className={classes.actions}>
      <h2>{project.name}</h2>

      <p>
        <strong>Description:</strong> {project.description}
      </p>

      <p>
        <strong>Priority:</strong> {project.priority}
      </p>

      <p>
        <strong>Status:</strong> {project.status}
      </p>

      <p>
        <strong>Due Date:</strong> {project.dueDate}
      </p>
      <button className={classes.deleteBtn}
      onClick={() => onDelete(project.id)}>Delete
      </button>
    </div>
  );
}

export default ProjectCard;