import './App.css';
import Body from './component/Body';
import Header from './component/Header';
import appStore from './component/utils/appstore';
import { Provider } from 'react-redux';

function App() {
  return (
    <div>
      <Provider store={appStore} >
     {/* 
       Header
       Body
         SiderBar
           MenuItems
         MainContainer 
           ButtinList
           VideoContainer
             VideoCard   
   */}
      <Header/>
      <Body/>
      </Provider>
    </div>
  );
}

export default App;
