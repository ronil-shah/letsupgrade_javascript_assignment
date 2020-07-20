for (var fb = 1; fb <= 100; fb++) {
            if (fb % 3 === 0 && fb % 5 === 0) {
                console.log(fb + " FizzBuzz ");
                //document.write("FizzBuzz ");
            } else if (fb % 3 === 0) {
                console.log(fb + " Fizz ");
                //document.write("Fizz ");
            } else if (fb % 5 === 0) {
                console.log(fb + " Buzz ");
                //document.write("Buzz ");
            } else {
                console.log(fb);
            }
        }
