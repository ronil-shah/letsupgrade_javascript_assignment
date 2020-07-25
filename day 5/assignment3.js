async function API(url) {
    const response = await fetch(url);
    const data = await response.json();
    return data;
}

API('https://jsonplaceholder.typicode.com/todos')
    .then(data => {
        for (var i = 0; i < data.length; i++) {
            if (data[i].completed == true) {
                console.log(data[i].id);
                console.log(data[i].completed);
            }
        }
    })