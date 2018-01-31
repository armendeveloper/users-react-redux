import Immutable from 'immutable';

export default  function UserReducer(state= Immutable.Map({"name": "afsf", "email": "fdasf@sfd.af"}), action) {
    switch (action.type) {
        case "RENAME": {
            state =  state.set("name", action.value);
            break;
        }
        case "CHANGEMAIL": {
            state = state.set("email", action.value);
            break;
        }
    }
    return state;
}