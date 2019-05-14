import uuidv1 from "uuid";

 
    const storeItems =[1,2,3,4,5,6,7,8];

    const store = storeItems.map((item)=>{
        const id = uuidv1();
        return {id,item}
    })
   
 
 

 
const temp =  {users:store}
 
export default temp

 
 