const express = require('express');
const { Project } = require('../models/Project.js');
const { requireAuth } = require('../middleware/authMiddleware.js'); // Assuming the middleware is in this path

const router = express.Router();

// Display all projects
router.get('/', requireAuth, async (req, res) => {
  const projects = await Project.find({ user: req.userId });
  res.render('projects', { projects });
});

// Create a new project
router.get('/create', requireAuth, (req, res) => {
  res.render('createProject');
});

router.post('/create', requireAuth, async (req, res) => {
  const { projectName, techStack, description, githubRepo } = req.body;
  const project = new Project({
    user: req.userId,
    projectName,
    techStack: techStack.split(','),
    description,
    githubRepo
  });

  try {
    await project.save();
    res.redirect('/projects');
  } catch (err) {
    res.status(400).send('Error creating project');
  }
});

// Edit a project
router.get('/:id/edit', requireAuth, async (req, res) => {
  const project = await Project.findById(req.params.id);
  if (project.user.toString() !== req.userId) {
    return res.redirect('/projects');
  }
  res.render('editProject', { project });
});

router.post('/:id/edit', requireAuth, async (req, res) => {
  const { projectName, techStack, description, githubRepo } = req.body;
  try {
    const project = await Project.findById(req.params.id);
    if (project.user.toString() === req.userId) {
      project.projectName = projectName;
      project.techStack = techStack.split(',');
      project.description = description;
      project.githubRepo = githubRepo;
      await project.save();
    }
    res.redirect('/projects');
  } catch (err) {
    res.status(400).send('Error updating project');
  }
});

// Delete a project
router.post('/:id/delete', requireAuth, async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);
    if (project.user.toString() === req.userId) {
      await project.remove();
    }
    res.redirect('/projects');
  } catch (err) {
    res.status(400).send('Error deleting project');
  }
});

// User profile route
router.get('/profile', requireAuth, async (req, res) => {
  const user = await User.findById(req.userId).populate('projects');
  const projects = await Project.find({ user: req.userId });
  res.render('profile', { user, projects });
});

module.exports = router;
