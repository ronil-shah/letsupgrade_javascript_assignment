let student = {
            name: "John",
            age: 21,
            projects: {
                diceGame: "Two player dice game using javascript..."
            }
        }
        console.log(student.name);

        //Destructing   Objects
        const {
            name,
            age,
            projects: {
                diceGame
            }
        } = student;
        console.log(name, age, diceGame);
        document.write(name);
        document.write("\n");
        document.write(age);
        document.write("\n");
        document.write(diceGame);
