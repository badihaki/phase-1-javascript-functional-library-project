function myEach(collection, callback){
    let iterables;
    if(typeof collection === 'object'){
        iterables = Object.values(collection);
    }
    else{
        iterables = collection;
    }
    for(let iteration = 0;iteration < iterables.length ; iteration++){
        callback(iterables[iteration]);
    }
    return collection;
}

function myMap(collection, callback){
    let iterables;
    if(typeof collection === 'object'){
        iterables = Object.values(collection);
    }
    else{
        iterables = collection;
    }
    for(let iteration = 0;iteration < iterables.length ; iteration++){
        callback(iterables[iteration]);
    }
    return iterables;
}

const unmodifiedTestArr = [1, 2, 3, 4]
const unmodifiedTestObj = {one: 1, two: 2, three: 3, four: 4}