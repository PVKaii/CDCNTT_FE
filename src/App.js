import './App.css';
import { Routes,Route, BrowserRouter as Router} from 'react-router-dom';
import RootRouter  from './router/RootRouter';
function App() {
  return(
    <Router>
      <div>
        <div>
          {/* <MenuBar/> */}
            <Routes>
              {showMenuContents(RootRouter)}
            </Routes>
              
        </div>
      </div>
        {/* <MyFooter/> */}
    </Router>
    )
}

const showMenuContents=(routers)=>{
  var index=0;
  var routerList=[]
  routers.forEach(element => {
    var rout= element.map((route)=>{
      return(
        <Route key={++index} path={route.path} exact={route.exact} element={<route.page/>}  />
      )
      })
      console.log(rout);
      routerList.push(...rout);
  }
  );
  console.log(routerList)
  return routerList;
}

export default App;
