/**
 * Created by lmy on 17-8-21.
 */
export default (state={submitSuccess:""},action) => {
    if(action.type = "SUBMIT_SUCCESS"){
        state.submitSuccess = action.isSuccess;

        return Object.assign({},state);
    }
    return state;
}