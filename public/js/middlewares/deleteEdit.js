/**
 * Created by lmy on 17-11-12.
 */
import request from 'superagent';

export default store => next => action => {
    if (action.type === 'DELETE_USER') {
        request.post('/delEdit')
            .send(action.id)
            .end((err, res) => {
                next({type: "DELETE_EDIT_FLAG", data: res.body.tip});
            });
    }

    else
        next(action);
};