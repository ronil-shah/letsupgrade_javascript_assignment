for (;;) {
            var number = parseInt(prompt("Please enter a number greater than 100", ""));
            console.log(number);
            if (number < 100) {
                //console.log(number);
                continue;
            } else if (isNaN(number)) {

                alert("Can't leave it empty...");
                break;
            } else if (number >= 100) {
                console.log("Your number " + number + " is matches requirements", "");
                console.log("Matches the requirements...");
                break;
                //return;
            }
        }
