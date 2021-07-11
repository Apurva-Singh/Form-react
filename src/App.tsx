import React from "react";
import Nav from "./Nav";
import UserList from './UserList';

interface Props{
 
}

const App: React.FC<Props>=(props)=>{
    return(
        <div>
          <Nav/>
         <UserList page= {1} title="Helllo World!"/>
        </div>
    );
};
App.defaultProps={
}

export default App;