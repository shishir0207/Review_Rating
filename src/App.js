import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddUser from './component/user/signup';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Signin from './component/user/Signin';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <div>
      <Routes>
      {/* <Route path="/" element={<Signin/>}/> */}
      <Route path="/" element={<AddUser/>} />
  </Routes>
  </div>
    </BrowserRouter>
      </div>
  );
}
export default App;