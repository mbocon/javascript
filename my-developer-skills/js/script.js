$(function () {
    // state variables
    let skills, skill;


    // cached element references

    const $button = $('button');
    const $ul = $('ul');
    const $input = $('input');


    // event listeners
    $button.on('click', handleAddSkill);
    $ul.on('click', '.delete', handleDelete);


    // functions
    init();

    function init() {
        skills = [];
        render();
    }
    // I need a function to add my skills to the  DOM
    function handleAddSkill() {
        // I  need to get my input from the input box and store  it in a var
        skill = $input.val();
        // If I have a skill to add, then I want to push it to my skils array
        if (skill) {
            skills.push(skill);
        // For UX I want to reset/clear my input box
            $input.val('');
        // After getting my skill, I want to display it
            render();
        } else return;
    }

    function handleDelete() {
        const $skill = $(this).closest('li');
        $skill.fadeOut(150, function() {
            const idx = skills.indexOf($skill.text().replace('X', ''));
            skills.splice(idx, 1);
            render();
        });
    }

    function render() {
        // If I have no skills to display, use CSS to hide the area
        if (!skills.length) $ul.css('margin-bottom', '30px');
        else $ul.css('margin-bottom', '30px');
        // else if I have skills loop over my skills array, create
        // an li element and append it to the DOM 
        $ul.html(skills.map(skill => $(`<li><span class="delete">X</span>${skill}</li>`)));
    }
});