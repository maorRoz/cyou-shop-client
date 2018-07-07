import axios from 'axios'


export async function getAllStores(){
    try{
         const response = await axios.get('https://kncj83bwkh.execute-api.us-east-1.amazonaws.com/dev/store')
         return response.data;
    }
    catch(error){
        console.error('Http error',error);
        return  'error has occured!'
    }
}

