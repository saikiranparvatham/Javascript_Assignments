function person(fname,lname,age,skills,dateOfBirth,profession)
{
    this.fname=fname;
    this.lname=lname;
    this.age=age;
    this.skills=skills;
    person.prototype.address="mumbai,400056"
    


    this.dateOfBirth=dateOfBirth;
    
    this.profession=profession;
    this.print=function print()
    {
        console.log(this.fname,this.lname,this.age,this.skills,this.address,this.dateOfBirth,this.profession);
    }
    
}
person.prototype.address="mumbai","400034";
var person1= new person("Amitabh","Bachan",54,['Acting'],"05/04/1963","actor");
person1.print();

var person2=new person("Abhishek","Bachan",61,['acting'],"04/01/1955","actor");
person2.print();

var person3=Object.create(person1);
person3.fname="Aradhya";
person3.age="8";
person3.print();
