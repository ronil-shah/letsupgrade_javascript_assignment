var ask;
        ask = (question, yes, no) => {
            if (confirm(question)) 
	    	yes()
            else 
		no();
        }
        ask("Do u agree?",
                 ask = () =>{
                    alert("You Aggree..!!");
                },
                ask = () => {
                    alert("You cancelled the execution..!!");

                })
