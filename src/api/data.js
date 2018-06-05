let students = [
    {
        id: 1,
        name: 'Hulk',
        char: ['Green', 'Strong', 'Big'],
        selected: false
    },

    {
        id: 2,
        name: 'Super Man',
        char: ['Strong', 'Son of God', 'Handsome'],
        selected: false
    },

    {
        id: 3,
        name: 'Iron Man',
        char: ['Robot', 'Scientist', 'Rich'],
        selected: false
    },

    {
        id: 4,
        name: 'Thor',
        char: ['God', 'Thunder', 'Hummer'],
        selected: false
    },

    {
        id: 5,
        name: 'Doctor Strange',
        char: ['Doctor', 'Wizard'],
        selected: false
    },

    {
        id: 6,
        name: 'Captain America',
        char: ['Soldier', 'Strong', 'Shield'],
        selected: false
    }
];

export default {
    getStudents() {
        return students;
    }
}