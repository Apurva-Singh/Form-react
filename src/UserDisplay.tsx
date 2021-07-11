import React from "react";


interface Props{
 gender: string;
 email: string;
 name: string;
}

const UserDisplay: React.FC<Props>=({email,gender, name})=>{

    return(
        <div className="flex flex-col max-w-xl  mt-6 hover:text-blue-300 shadow-sm hover:shadow-md ">
            
            <div className="flex flex-row justify-between text-xs md:text-lg space-x-3">
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