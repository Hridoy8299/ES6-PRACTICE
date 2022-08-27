//  syntactic sugar

class TeamMember {
    name;
    location;
    constructor(name, location){
        this.name = name;
        this.location=location;

    }
    provideFeedback(){
        console.log(`${this.name} that you for your feedback`)
    }
}

class Instructor extends TeamMember {
    name;
    designation= 'web course instructor'
    team ='web'
    location

    constructor(name, location){
        super(name, location);
        // this.name =name;
        // this.location =location;

    }

    startSupportSession(time){
        console.log(`start the support session at ${time}`);

    }
    createQuiz(module){
        console.log(`please create quiz for module ${module}`)
    }

    // provideFeedback(){
    //     console.log(`${this.name} that you for your feedback`)
    // }

}

class Developer extends TeamMember {
    
    designation= 'web course instructor'
    team ='web'
    

    constructor(name, location, tech){
        // this.name =name;
        // this.location =location;
        super(name, location);
        this.tech = tech;

    }

    developFeature(teature){
        console.log(`Please develop the ${teature}`);

    }
    release(version){
        console.log(`please release the ${version}`)
    }

    // provideFeedback(){
    //     console.log(`${this.name} that you for your feedback`)
    // }

}

const alia = new Developer('alia', 'tangail', 'react');
console.log(alia);
alia.release(52);

