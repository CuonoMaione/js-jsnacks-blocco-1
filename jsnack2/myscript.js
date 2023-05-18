const UsersList = ["Francesco" , "Cuono" , "Antonio" , "Anna" , "Sabrina"];

let MyName = prompt("insert your name");

for (let i = 0 ; i < UsersList.length ; i++) {
    
    if ( MyName == UsersList[i] ) {
        Identification = true;
    } else {
        Identification = false;
    }
    
    console.log(UsersList[i])
    console.log(Identification);
    
}



