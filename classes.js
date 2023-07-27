class User
{
    lastName;
    firstName;
    age;



    printAge()
    {
        console.log(this.age);
    }

}

const u1 = new User();
u1.age = 22;
console.log(u1);
u1.printAge();

const u2 = new User();
u2.age = 25;
u2.printAge();