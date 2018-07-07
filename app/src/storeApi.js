import axios from 'axios'
const api = axios.create({
    baseURL: `https://kncj83bwkh.execute-api.us-east-1.amazonaws.com/dev/`
  });


export async function getAllStores(){
    try{
         const response = await api.get('/store')
         console.log('store list length: '+response.data.length);
         return response.data;
    }
    catch(error){
        console.error('http error',error);
        return  'error has occured!'
    }
}

export function createStore(newStore){
    return api.post('/store', newStore);
}

export function removeStore(idToRemove){
    const storeToRemove={
        id: idToRemove
    }
    console.log(JSON.stringify(storeToRemove));
    return api.delete('/store',{data: storeToRemove});
}

export function updateStore(idToUpdate,updatedStore){
    const requestUpdate={
        id: idToUpdate,
        newStore: updatedStore
    }
    console.log(JSON.stringify(requestUpdate));
    return api.put('/store',requestUpdate);
}

