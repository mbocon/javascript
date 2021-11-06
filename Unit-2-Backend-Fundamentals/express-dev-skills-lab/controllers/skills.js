// require the Skill model
const Skill = require("../models/skill");

function index(req, res) {
  res.render("skills/index", {
    skills: Skill.getAll(),
    time: req.time
  });
}

function show(req, res) {
  res.render("skills/show", {
    skill: Skill.getOne(req.params.id),
    skillNum: parseInt(req.params.id) + 1,
  });
}

function newSkill(req, res) {
  res.render("skills/new");
}

function create(req, res) {
  // access our form data from req.body {text: "wash the dishes"}
  console.log(req.body)
  // assign a default property to req.body
  req.body.done = false;
  // tell our data file to add the new object to the list (array)
  Skill.create(req.body);
  // we need to respond to the client res.redirect to send them to the index
  res.redirect("/skills");
}

function deleteSkill(req, res) {
  // ask the data file to splice out the Skill from the array
  Skill.deleteOne(req.params.id);
  // respond with a redirect to the index page where we see all Skills
  // minus the deleted Skill
  res.redirect("/skills");
}

function edit(req, res) {
  const skill = Skill.getOne(req.params.id);
  res.render("skills/edit", { 
    skill, 
    skillId: req.params.id,
  });
}

function update(req, res) {
    console.log(req.body, 'is  req  body on  update')
  // ask the data file to replace the existing Skill obj with the updated one
  Skill.updateOne(req.params.id, req.body);
  // respond with res.redirect
  res.redirect(`/skills/${req.params.id}`);
}

module.exports = {
  index,
  show,
  new: newSkill,
  create,
  delete: deleteSkill,
  edit,
  update,
};
