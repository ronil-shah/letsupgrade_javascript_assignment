var sal = parseInt(prompt("Enter Sales : "));
            var plus;
            if ((sal > 0) && (sal <= 5000)) {
                plus = (2 / sal) * 100;
                console.log("Increased By 2% <br>");
                console.log("After 2% adding increment :-- " + plus);
            } else if ((sal > 5001) && (sal <= 10000)) {
                plus = (5 / sal) * 100;
                console.log("Increased By 5% <br>");
                console.log("After 5% adding increment :-- " + plus);
                console.log(plus);
            } else if ((sal > 10001) && (sal <= 20000)) {
                plus = (7 / sal) * 100;
                console.log("Increased By 7% <br>");
                console.log("After 7% adding increment :-- " + plus);
                console.log(plus);
            } else if (sal > 20000) {
                plus = (10 / sal) * 100;
                console.log("Increased By 10%  <br>");
                console.log("After 10% adding increment :-- " + plus);
                console.log(plus);
            } else {
                alert("Need more salary");
                console.log("Invalid salary...");
            }
