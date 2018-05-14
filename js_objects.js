let students = [
    {name: 'Remy', cohort: 'Jan'},
    {name: 'Genevieve', cohort: 'March'},
    {name: 'Chuck', cohort: 'Jan'},
    {name: 'Osmund', cohort: 'June'},
    {name: 'Nikki', cohort: 'June'},
    {name: 'Boris', cohort: 'June'}
];


console.log('Exercise One')

for(student of students){
    //console.log('Name: '+ student.name + ", Cohort: " + student.cohort);
    console.log(`Name: ${student.name}, Cohort: ${student.cohort}`);
}


const users = {
    employees: [
        { 'first_name':  'Miguel', 'last_name' : 'Jones' },
        { 'first_name' : 'Ernie', 'last_name' : 'Bertson' },
        { 'first_name' : 'Nora', 'last_name' : 'Lu' },
        { 'first_name' : 'Sally', 'last_name' : 'Barkyoumb '}
    ],
    managers: [
        { 'first_name' : 'Lillian', 'last_name' : 'Chambers' },
        { 'first_name' : 'Gordon', 'last_name' : 'Poe '}
    ]
};

console.log('')
console.log('Exercise Two')

for(const key in users){
    console.log(key.toUpperCase());
    for(let i=0; i<users[key].length;i++){
        const num = i+1;
        const first_name = users[key][i].first_name;
        const last_name = users[key][i].last_name;
        const length = first_name.length + last_name.length;
        console.log(`${num} - ${last_name}, ${first_name} - ${length}`);
    }
};


