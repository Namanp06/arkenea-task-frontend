// export async function getAllUsers() {

//     try{
//         const response = await fetch('/api/users');
//         return await response.json();
//     }catch(error) {
//         return [];
//     }
    
// }
import axios from 'axios';

export async function createUser(data) {
  console.log("its coming", data)
    // const response = await fetch("http://localhost:3000/user", {
    //     method: 'POST',
    //     headers: {'Content-Type': 'multipart/form-data', 'Accept': 'application/json',},
    //     body:data
    //   })

   return await axios.post("http://15.206.173.148:3001/user", data)
    // .then(res => {
    //     console.log('11111111111111111111111111',res);
    // }).catch(err=>{
    //   alert("error",err);
    // })
    // return ans;
    // return await response.json();
}