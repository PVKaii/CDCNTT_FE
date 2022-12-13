import './App.css';
import { Routes,Route, BrowserRouter as Router} from 'react-router-dom';
import RootRouter  from './router/RootRouter';

import MenuBar from './menu/menu';
import { useEffect, useState } from 'react';

function App() {

  var [login,setLogin] = useState(localStorage.getItem("user")!==null ? true:false)
  const setUser = ()=>{
      setLogin(!login)
  }

  useEffect(()=>{ 
    console.log("reload")
  },[login])


  const showMenuContents=(routers)=>{
    var index=0;
    var routerList=[]
    routers.forEach(element => {
      var rout= element.map((route)=>{
        return(
          <Route key={++index} path={route.path} exact={route.exact} element={<route.page setUser={setUser}/>}  />
        )
        })
        console.log(rout);
        routerList.push(...rout);
    }
    );
    console.log(routerList)
    return routerList;
  }

  return(
    <Router>
      {localStorage.getItem("user") ? <MenuBar/> : null  }
        <Routes>
          {showMenuContents(RootRouter)}
        </Routes>      
        {/* <MyFooter/> */}
    </Router>
    )
}



export default App;
