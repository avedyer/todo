function writeId (currentIds) {

    let newId =Math.floor(Math.random() * (2**32));


    while (currentIds.includes(newId)) {
        newId = Math.floor(Math.random() * (2**32));
    }
    
    return newId;
}

function populateStorage(key, value){
    console.log("populating...")
    localStorage.setItem(key, JSON.stringify(value));
}

export {
    writeId,
    populateStorage
};