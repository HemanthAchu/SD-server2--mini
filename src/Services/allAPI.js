import { commomAPI } from "./commonAPI.JS"
import { SERVER_URL } from "./serverURL"



export const uploadNewStudentAPI = async(details)=>{
    return await commomAPI("POST",`${SERVER_URL}/allstudent`,details)
}

export const getALLStudentAPI = async()=>{
    return await commomAPI("GET",`${SERVER_URL}/allstudent`,"")
}

export const RemoveAStudentAPI =async(id)=>{
    return await commomAPI("DELETE", `${SERVER_URL}/allstudent/${id}`);
}
