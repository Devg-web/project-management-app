import supabase from "../lib/supabase";

const ProjectService = {
  async createProject(project) {
    const { data, error } = await supabase
      .from("projects")
      .insert([
        {
          name: project.name,
          description: project.description,
          priority: project.priority,
          status: project.status,
          due_date: project.dueDate,
        },
      ])
      .select();

    if (error) {
      throw error;
    }

    return data[0];
  },
  async getProjects() {

    const { data, error } = await supabase
        .from("projects")
        .select("*")
        .order("created_at", { ascending: false });

    if (error) {
        throw error;
    }

    return data;
}
};

export default ProjectService;