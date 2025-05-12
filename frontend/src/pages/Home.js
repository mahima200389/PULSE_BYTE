import React, { useEffect } from 'react';
import axios from 'axios';
function Home()
{
    const getData=async()=>{
        try{
            const response =await axios.post('/api/user/get-user-info-by-id',{},{
                headers :{
                    Authorization:'Bearer ' +localStorage.getItem("token"),

                },
            });
            console.log(response.data);
        }
        catch(error){
            console.log(error);

        }
    }
  useEffect(()=>{
    getData();

  },[]);
  return (
    <div>Home</div>
)
}

export default Home;
// import React, { useEffect } from 'react';
// import axios from 'axios';

// function Home() {
//   const getData = async () => {
//     try {
//       const token = localStorage.setItem("token", response.data.token); // Ensure this line is setting the token


//       if (!token) {
//         console.error("No token found in localStorage");
//         return;
//       }

//       const response = await axios.post(
//         '/api/user/get-user-info-by-id',
//         {},
//         {
//           headers: {
//             Authorization: 'Bearer ' + token,
//           },
//         }
//       );
//       console.log(response.data);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   useEffect(() => {
//     getData();
//   }, []);

//   return <div>Home</div>;
// }

// export default Home;
