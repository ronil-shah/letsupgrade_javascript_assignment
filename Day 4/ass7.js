console.log("Prime Numbers are .. ");
        let n = 15;
        nextPrime: for (let i = 2; i <= n; i++) {
            for (let j = 2; j < i; j++) {
                if (i % j == 0) continue nextPrime;
            }
            alert(i);
            console.log(i);
            console.log(i + " ");
        }
