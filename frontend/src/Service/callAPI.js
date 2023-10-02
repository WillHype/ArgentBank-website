const loginUser = async (userInfo) =>{
    
    const request = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: userInfo.userName, password : userInfo.password }),
      };
      
      try {
        const response = await fetch(
          "http://localhost:3001/api/v1/user/login",
          request
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
      
        const data = await response.json();
        // console.log(data.body.token);
        return data
      } catch (error) {
        console.error("There was an error!", error);
      }  
    };
export default loginUser;    