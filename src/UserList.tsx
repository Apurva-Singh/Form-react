import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import UserDisplay from "./UserDisplay";

interface Props{
    page: number;
    title: string;
 
}

const UserList: React.FC<Props>=({ page ,title})=>{
    const [users, setUsers] = useState<any>([]);

    useEffect(() => {
     axios.get("https://randomuser.me/api/?inc=id,name,email,gender&page="+page+"&results=20").then((response)=>{
            console.log(response.data.results);
            setUsers(response.data.results);
        });
    },[page]);
  
  
    return(
        <div className=" max-w-md items-center m-auto ">
        <h1 className="text-xl m-2"> Showing list of <span className="text-blue-300">{title}</span> users:</h1>
        
        <div className="h-0.5 max-w-sm bg-gray-200 mb-4"></div>
        <div className="flex flex-row justify-between text-2xl">
                <h2>Name</h2>
                <h2>Email</h2>
                <h2>Gender</h2>
            </div>
            <div className="space-y-6 ">
         {users.map((u: any)=> <UserDisplay key={u.id.vlaue} email={u.email} gender={u.gender} name={u.name.first+" "+u.name.last} />)}
         </div>
         <div className=" flex justify-center m-auto my-4 h-8 w-8 border-2 border-blue-200 rounded-full">
             {page}
         </div>
        </div>
    );
};
UserList.defaultProps={
}

export default React.memo(UserList);