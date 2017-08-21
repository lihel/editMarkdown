/**
 * Created by lmy on 17-8-21.
 */

import {connect} from 'react-redux';
import Edit from '../components/edit';

function mapDispatchToProps(dispatch){
    return{
        buttonClick: (editInfo) => {
            dispatch({type:'BUTTON_CLICK',data:editInfo})
        }
    }
}

export default connect(()=>{return {}},mapDispatchToProps)(Edit);