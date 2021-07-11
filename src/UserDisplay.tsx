import React from "react";


interface Props{
 gender: string;
 email: string;
 name: string;
}

const UserDisplay: React.FC<Props>=({email,gender, name})=>{

    return(
        <div className="flex flex-col max-w-md even:bg-gray-50 mt-6 hover:bg-blue-100 shadow-sm ">
            
            <div className="flex flex-row justify-between ">
                <p>{name}</p>
                <p>{email}</p>
                <p>{gender}</p>
            </div>
        
        </div>
    );
};
UserDisplay.defaultProps={
}

export default UserDisplay;