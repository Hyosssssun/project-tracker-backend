import express from "express";
import { createProject, getAllProjects, updateProject, deleteProject, getProjectById } from "../models/projects.js";
const router = express.Router();


/* GET whole project list. */
router.get("/projects", async function (req, res) {
  const allProjects = await getAllProjects();
  res.json({ success: true, message: "here is all of your projects", payload: allProjects });
});
  
/* GET the project with specific id */
router.get("/projects/:id", async function (req, res) {
  const { id } = req.params;
  const project = await getProjectById(id);
  res.json({
      success: true,
      message: `This is the project with id ${id}`,
      payload: project,
  });
})

/* CREATE(Add) new project to the list */
router.post("/projects", async function (req, res) {
    const { team, week, day, projectName, url, projectStatus } =
        req.body;
    const newProject = await createProject(
        team,
        week,
        day,
        projectName,
        url,
        projectStatus
    );
    res.json({
        success: true,
        message: `added new project`,
        payload: newProject,
    });
});

/* UPDATE the project info with specific id */
router.patch("/projects/:id", async function (req, res) {
  const { id } = req.params;
  const { team, week, day, projectName, url, projectStatus } = req.body;
  const updated = await updateProject(
      id,
      team,
      week,
      day,
      projectName,
      url,
      projectStatus
  );
  res.json({ success: true, message: `updated project`, payload: updated })
})

/* DELETE the project with specific id */
router.delete("/projects/:id", async function (req, res) {
    const { id } = req.params;
    const deleted = await deleteProject(id);
    res.json({ success: true, message: `deleted project`, payload: deleted });
});

export default router;
