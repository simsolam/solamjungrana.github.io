// Problem 1 ----------------------------->

String.prototype.filter=function (banData) {
    var stringValue=this;
    for(var i in banData){
        if(stringValue.includes(banData[i])){
            stringValue=stringValue.replace(banData[i],"");
        }
    }
    return stringValue;
}
console.log("You are not a boy.".filter(["not"]));

// Problem 2 ----------------------------->

Array.prototype.bubbleSort = function(){

    var arr = this;
    var n = arr.length;

    for(var i = n; i>1; i--)
    {
        for(var j=0;j<i-1;j++)
        {
            if(arr[j]>arr[j+1])
            {
                var temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
    return arr;
}
console.log([1,4,2,5,-2,3].bubbleSort());

// Problem 3 ----------------------------->

function Person(name) {
    this.name=name;
}

var Teacher=function(name){
    Person.call(this,name);
}
Teacher.prototype=Object.create(Person.prototype);
 Teacher.prototype.teach=function(subject) {
     console.log(this.name+" is now teaching "+subject );
 }
var xing=new Teacher("Rujuan Xing");
xing.teach("WAP");

// Problem 4 ----------------------------->
//functional constructor approach
var FPerson=function (name, age) {
    this.name=name;
    this.age=age;
}
FPerson.prototype.greetings=function () {
    console.log("Greetings, my name is "+this.name+" and I am "+this.age.toString()+" years old.")
}

FPerson.prototype.salute=function () {
    console.log("Good morning!, and in case I dont see you, good afternoon, good evening and good night!")
}

var FStudent=function (name,age,major) {
    FPerson.call(this,name,age);
    this.major=major;
}

FStudent.prototype=Object.create(FPerson.prototype);
FStudent.prototype.greetings=function () {
    console.log("Hey, my name is "+this.name+" and I am studying "+this.major);
}

var FTeacher=function (name,age,department) {
    FPerson.call(this,name,age);
    this.department=department;
}

FTeacher.prototype=Object.create(FPerson.prototype);
FTeacher.prototype.greetings=function () {
    console.log("Good Day, my name is "+this.name+" and I am in "+this.department+" department.");
}

var solam=new FStudent("Solam Jung Rana",28,"Compro");
solam.greetings();
solam.salute();

var xing=new FTeacher("Rujuan Xing",32,"Computer Science");
xing.greetings();
xing.salute();


//Object prototype approach
var OPerson={
    name:"unknown",
    age:0,
    greeting:function () {
        console.log("Greetings, my name is "+this.name+" and I am "+this.age.toString()+" years old.")
    },

    salute:function () {
        console.log("Good morning!, and in case I dont see you, good afternoon, good evening and good night!")
    }
}
var OStudent=Object.create(OPerson);
OStudent.name="Babita Lamichhane"
OStudent.age=30
OStudent.major="compro";
OStudent.greeting=function () {
    console.log("Hey, my name is "+this.name+" and I am studying "+this.major);
};
OStudent.greeting();
OStudent.salute();
var OTeacher=Object.create(OPerson);
OTeacher.name="Rakesh Shrestha"
OTeacher.age=32
OPerson.department="Computer Science"
OTeacher.greeting=function () {
    console.log("Good Day, my name is "+this.name+" and I am in "+this.department+" department.");
};
OTeacher.greeting();
OTeacher.salute();


