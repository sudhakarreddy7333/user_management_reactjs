export function addUser(user){
    console.log("Creating Add User Action");
    return {
        type : 'ADD_USER',
        user
    }
}

export function deleteUser(userId){
    console.log("Deleting User",userId);
    return {
        type : 'DELETE_USER',
        userId
    }
}

export function editUser(user){
    console.log("Editing User",user);
    return {
        type : 'EDIT_USER',
        user
    }
}

export function modifiedUserDetails(user){
    console.log("Modifying user",user);
    return {
        type : 'MODIFY_USER',
        user
    }
}