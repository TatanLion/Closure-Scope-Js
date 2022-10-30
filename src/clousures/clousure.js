function greeting(){
    let username = 'Jonathan';

    function displayUserName(){
        return `Hello ${username}`;
    }
    return displayUserName;
}

const g = greeting();
console.log(g);