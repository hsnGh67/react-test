import axios from "axios"

const getSecretWord = async(dispatch)=>{
    try{
        const response = await axios.get("http://localhost:3030")

        dispatch({type : "setSecretWord" , data : response.data.data})

    }catch(err){
        
    }
    
}

export default { getSecretWord }