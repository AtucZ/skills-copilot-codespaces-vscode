function skillsMember(){
    const member = {
        name: 'John Doe',
        age: 25,
        skills: ['HTML', 'CSS', 'JS'],
        // Path: member.js
        // Method
        displaySkills: function(){
            this.skills.forEach(function(skill){
                console.log(`${this.name} knows ${skill}`);
            });
        }
    };

    member.displaySkills();
}