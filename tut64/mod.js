console.log("This is module");

function average(arr){
    let sum=0;

    arr.forEach(element => {
        sum+=element;
    });
    return sum/arr.length;
}

// exporting multiple things in the form of an object 
module.exports={
    avg: average,
    name:"Harry",
    repo:"gitHub"
}