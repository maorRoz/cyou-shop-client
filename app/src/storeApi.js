import axios from 'axios'
const api = axios.create({
    baseURL: `https://kncj83bwkh.execute-api.us-east-1.amazonaws.com/dev/`
  });


export async function getAllStores(){
    try{
         const response = await api.get('/store')
         return response.data;
    }
    catch(error){
        console.error('http error',error);
        return  'error has occured!'
    }
}

export function createStore(){
    const store={
        name: "",
        address: "",
        openingHours: "",
        managerName: ""
    }
    return api.post('/store', store);
}

export function removeStore(idToRemove){
    const storeToRemove={
        id: idToRemove
    }
    console.log(JSON.stringify(storeToRemove));
    return api.delete('/store',{data: storeToRemove});
}

