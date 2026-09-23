function ProjectForm({
    projectData,
    handleChange,
    handleSaveProject,
    closeModal
}) {
  return (
    <>
    <form onSubmit={handleSaveProject}>
            {/* Project Name */}
            <div>
              <label>Project Name</label>
              <br />
              <input
                type="text"
                name="name"
                placeholder="Enter Project Name"
                value={projectData.name}
                onChange={handleChange}
                required
              />
            </div>

            <br />

            {/* Description */}
            <div>
              <label>Description</label>
              <br />
              <textarea
                name="description"
                placeholder="Enter Description"
                value={projectData.description}
                onChange={handleChange}
                rows="4"
                required
              />
            </div>

            <br />

            {/* Priority */}
            <div>
              <label>Priority</label>
              <br />
              <select
                name="priority"
                value={projectData.priority}
                onChange={handleChange}
                required
              >
                <option value="">Select Priority</option>
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
              </select>
            </div>

            <br />

            {/* Status */}
            <div>
              <label>Status</label>
              <br />
              <select
                name="status"
                value={projectData.status}
                onChange={handleChange}
                required
              >
                <option value="">Select Status</option>
                <option value="Planning">Planning</option>
                <option value="Active">Active</option>
                <option value="Completed">Completed</option>
              </select>
            </div>

            <br />

            {/* Due Date */}
            <div>
              <label>Due Date</label>
              <br />
              <input
                type="date"
                name="dueDate"
                value={projectData.dueDate}
                onChange={handleChange}
                required
              />
            </div>

            <br />

            {/* Buttons */}
            <button type="submit">Save Project</button>

            <button
              type="button"
              onClick={closeModal}
              style={{ marginLeft: "10px" }}
            >
              Cancel
            </button>
          </form>
    </>
  );
}

export default ProjectForm;