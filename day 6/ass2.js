var ask = prompt("Enter Number : ");
        var no = parseInt(ask);

        for (var i = 1; i <= 10; i++) {
            console.log(i);
            document.write("<br>" + no + "x " + i + " = " + no * i + "<br>");
            console.log(no + " * " + i + " = " + no * i);
        }