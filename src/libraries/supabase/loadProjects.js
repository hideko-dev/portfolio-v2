import {supabase} from "./supabase.js";

export const loadProjects = async () => {
    const projects = await supabase.from("projects").select("*");
    return projects.data;
}