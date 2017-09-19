
const initialState = {
    users : [],
    editUser : {}
}
export default (state = initialState, action = []) => {
    switch(action.type){
        case "ADD_USER" :
        console.log("Creating User");
        return Object.assign({}, state, {
            users : state.users.concat(action.user)
        })
        break;

        case "DELETE_USER" :
        console.log("Deleting User",action);
        state.users.map((user,index)=>{
            if(user.id == action.userId){
                return Object.assign({}, state,{
                    users : state.users.splice(index,1)
                })
            }
        })
        break;

        case "EDIT_USER" :
        return Object.assign({}, state, {
            editUser : action.user
        })
        break;

        case "MODIFY_USER" :
        return Object.assign({}, state,{
            users : state.users.map((user,index) =>{
                if(user.id == action.user.id){
                    return Object.assign({}, user, {
                        fname : action.user.fname,
                        lname : action.user.lname,
                        city : action.user.city,
                        state : action.user.city
                    })
                }
            })
        })
        break;
        
    }
    return state;
}