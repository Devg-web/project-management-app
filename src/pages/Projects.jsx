import ProjectService from "../services/ProjectService";
import { useState , useEffect  } from "react";
import Modal from "../components/UI/Modal/Modal";
import ProjectList from "../components/Project/ProjectList";
import ProjectForm from "../components/Project/ProjectForm";
function Projects() {
     // Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [editingProject, setEditingProject] = useState(null);

  // Form State
  const [projectData, setProjectData] = useState({
    name: "",
    description: "",
    priority: "",
    status: "",
    dueDate: "",
  });

  // Projects List
  const [projects, setProjects] = useState([]);

  // Open Modal
  function openModal() {
    setIsModalOpen(true);
  }

  // Close Modal
  function closeModal() {
    setIsModalOpen(false);
  }

  // Handle Form Input Changes
  function handleChange(event) {
    const { name, value } = event.target;

    setProjectData((previousData) => ({
      ...previousData,
      [name]: value,
    }));
  }
 async function fetchProjects() {

    try {

        const data =
            await ProjectService.getProjects();

        setProjects(data);

    } catch (error) {

        console.error(error);

    } finally {

        setLoading(false);

    }

}
  useEffect(() => {
    fetchProjects();
  }, []);

  // Save Project
   async function handleSaveProject(event) {
    event.preventDefault();
try{
    // Create a new project object
     const savedProject =
      await ProjectService.createProject(projectData);

    await fetchProjects();


    // Reset form
    setProjectData({
      name: "",
      description: "",
      priority: "",
      status: "",
      dueDate: "",
    });

    // Close Modal
    closeModal();
  }
  catch (error) {
    console.error(error);

    alert("Unable to save project.");
  }
  }
 
  function handleDeleteProject(id) {
  setProjects((previousProjects) =>
    previousProjects.filter((project) => project.id !== id)
  );
}
function handleEditProject(project) {

    setEditingProject(project);
    setProjectData({

name:project.name,

description:project.description,

priority:project.priority,

status:project.status,

dueDate:project.due_date

});

}
  if (loading) {
    return <h2>Loading Projects...</h2>;
  }

  return (
    <>
      <h1>Projects</h1>

      <button onClick={openModal}>+ New Project</button>

      {/* Modal */}
      {isModalOpen && (
        <Modal>
          <h2>Create New Project</h2>
  <ProjectForm
    projectData={projectData}
    handleChange={handleChange}
    handleSaveProject={handleSaveProject}
    closeModal={closeModal}
  />
          
        </Modal>
      )}

      <hr />

      <h2>Project List</h2>
      
        <ul>
      <ProjectList data={projects}
      onDelete={handleDeleteProject} />
        </ul>
     
    </>
  );
}
export default Projects;