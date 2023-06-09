import { DELETE_USER, FAIL_REQUEST, GET_USER_LIST, MAKE_REQUEST,ADD_USER,UPDATE_USER,GET_USER_OBJ } from "./ActionType";
import axios from "axios";

import { toast } from "react-toastify";
export const makeRequest = () => {
  return {
    type: MAKE_REQUEST,
  };
}
export const failRequest=(err)=>{
    return{
        type: FAIL_REQUEST,
        payload:err,
    }
}
export const getUserList=(data)=>{
    return{
        type: GET_USER_LIST,
        payload:data

    }
    }
    export const deleteUser=()=>{
        return {
            type: DELETE_USER
        }
    }
    export const addUser=()=>{
        return{
            type:ADD_USER
        }
    }
    export const updateUser=()=>{
        return{
            type:UPDATE_USER
        }
    }
    export const getUserObj=(data)=>{
        return{
            type:GET_USER_OBJ,
            payload:data
        }
    }
    export const FetchUserList=()=>{
        return(dispatch)=>{
            dispatch(makeRequest());
            axios.get('http://127.0.0.1:8000/api/getuser').then(res=>{
                const userlist=res.data;
                dispatch(getUserList(userlist));
            }).catch(err=>{
                dispatch(failRequest(err.message))
            },2000)
           
        }
}
export const Removeuser=(code)=>{
    return(dispatch)=>{
        dispatch(makeRequest());
        // axios.delete('http://127.0.0.1:8000/api/delete/'+code).then(res=>{
        axios.delete(`http://127.0.0.1:8000/api/delete/${code}`).then(res=>{
            dispatch(deleteUser());
            dispatch(FetchUserList())
            
        }).catch(err=>{
            dispatch(failRequest(err.message))
        },2000)
       
    }
}
export const FunctionAddUser=(data)=>{
    return(dispatch)=>{
        dispatch(makeRequest());
       const userData= axios.post('http://127.0.0.1:8000/api/create',data).then(res=>{
           dispatch(addUser());

           toast.success('user added successfully');
        }).catch(err=>{
            dispatch(failRequest(err.message))
        },100)
       
    }
}
export const FunctionUpdateUser=(code,data)=>{
    return(dispatch)=>{
        dispatch(makeRequest());
        console.log("update data",data)
        axios.put(`http://127.0.0.1:8000/api/update/${data}`,code).then(res=>{
           dispatch(updateUser());
           toast.success('user updated successfully');
        }).catch(err=>{
            dispatch(failRequest(err.message))
        },100)
       
    }
}
export const FetchUserObj=(code)=>{
    return(dispatch)=>{
        dispatch(makeRequest());
        axios.get(`http://127.0.0.1:8000/api/get_user/${code} `).then(res=>{
            const userlist=res.data;
           dispatch(getUserObj(userlist));
          
        }).catch(err=>{
            dispatch(failRequest(err.message))
        },100)
       
    }
}
