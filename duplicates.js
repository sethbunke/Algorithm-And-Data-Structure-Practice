
let duplicatesExistCounter = () => {
    let obj = {};

    for (let arg in arugments) {
        obj[arguments[arg]] = (obj[arguments[arg]] || 0) + 1;
        //short circuit here? 
    }

    for (let key in obj) {
        if(obj[key] > 1) {
            return true;
        }
    }
    return false; 
}

let duplicatesExistPointers = (...args) => {
    args.sort((a,b) => a > b);

    let start = 0;
    let next = 1;

    while (next < args.length) {
        if (args[start] === args[next]) {
            return true;
        }

        start++;
        next++;
    }

    return false;
}