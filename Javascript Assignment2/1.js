function person(fname,lname,age,skills,address,dateOfBirth,profession)
{
    this.fname=fname;
    this.lname=lname;
    this.age=age;
    this.skills=skills;
    this.address=address


    this.dateOfBirth=dateOfBirth;
    
    this.profession=profession;
    this.print=function print(){
        console.log(this.fname,this.lname,this.age,this.skills,this.address,this.dateOfBirth,this.profession);
    }

}
var person1= new person("Ramesh","Gupta",54,['java','sql'],"secunderabad,500025","05/04/1963","software engineer");
person1.print();
var person2=new person("amitabh","bachan",61,['acting'],"mumbai,400033","04/01/1955","actor");
person2.print();

