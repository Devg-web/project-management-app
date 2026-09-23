import ProjectCard from "./ProjectCard";
function ProjectList({data, onDelete }) {
   if (data.length === 0) {
    return <p>No Projects Found.</p>;
  }
  return (
     <>
      {data .map((project) => (
        <ProjectCard
          key={project.id}
          project={project}
          onDelete={onDelete}
        />
      ))}
    </>
  );
}

export default ProjectList;