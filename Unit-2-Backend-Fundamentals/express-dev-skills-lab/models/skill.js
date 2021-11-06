module.exports = {
    getAll,
    getOne,
    create,
    deleteOne,
    updateOne,
   };
   
   const skills = [
    {text: 'HTML5'},
    {text: 'CSS3'},
    {text: 'Bootstrap'},
    {text: 'SASS'},
    {text: 'Javascript'},
    {text: 'Jquery'},
    {text: 'React'},
    {text: 'Express'},
    {text: 'Node.js'},
    {text: 'JSX'},
    {text: 'EJX'},
    {text: 'MongoDB'},
    {text: 'Mongoose'},
    {text: 'Ruby on Rails'},
    {text: 'PosgreSQL'},
    {text: 'git'},
    {text: 'github'},
    {text: 'Heroku'},
    {text: 'Netlify'},
    {text: 'NPM'},
    {text: 'Agile/Scrum'},
   ];
   
   function getAll(id) {
    return skills;
   }


// Here's our latest function for this module
function getOne(id) {
    return skills[id];
  }
  
  function create(skill) {
    skills.push(skill);
  }
  
  function deleteOne(id) {
    skills.splice(id, 1);
  }
  
  function updateOne(id, updatedSkill) {
    skills.splice(id, 1, updatedSkill);
  }