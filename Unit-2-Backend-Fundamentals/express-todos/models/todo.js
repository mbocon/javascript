module.exports = {
    getAll,
    getOne
};

const todos = [
    {text: 'Feed Dogs', done: true},
    {text: 'Buy Coffee', done: false},
    {text: 'Learn Express', done: false},
];


function getAll() {
    return todos;
}

function getOne(todoIdx) {
    return todos[todoIdx];
}