import axois from "axios"


export const loginCall = async(userCredentials,dispatch)=>{
    dispatch({type:"LOGIN_START"})

    try {
        const res = await axois.post("http://localhost:8080/auth/login",userCredentials)
        dispatch({type:"LOGIN_SUCCESS", payload:res.data})        
    } catch (error) {
        dispatch({type:"LOGIN_FAILURE", payload:error})
        
    }
}