
import ReactDOM from 'react-dom/client';
import './index.css';
//import FormGender from './components/formGender/FormGender';
//import Lesson13 from './lessons/lesson13/Lesson13';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/layout/Layout';
import StarWarGallery from './components/starWarGallery/StarWarGallery';
import FormGender from './components/formGender/FormGender';
import RobotForm from './components/robotForm/RobotForm';
import MyForm from './components/MyForm/MyForm';
import HomePage from './components/homePage/HomePage';
//import MyInput from './components/myInput/MyInput';
import Shop from './components/shop/Shop';
import ProductPage from './components/productPage/ProductPage';
//import Lesson11 from './lessons/lesson11/Lesson11';

// import LoginForm from './components/loginForm/LoginForm';


//import Hw09 from './homeworks/hw09/Hw09';
// import Lesson10 from './lessons/lesson10/Lesson10';
//import Lesson09 from './lessons/lesson09/Lesson09';
//import StarWarGallery from './components/starWarGallery/StarWarGallery';
//import App from './app/App';
// import Lesson06 from './lessons/lesson06/Lesson06';
//import Lesson07 from './lessons/lesson07/Lesson07';
//import Lesson08 from './lessons/lesson08/Lesson08';
//import Layout from './components/layout/Layout';





const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <HashRouter>
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route path='/' element={<HomePage />}/>
        <Route path='/gender-form' element={<FormGender/>}/>
        <Route path='/robot-form' element={<RobotForm/>} />
        <Route path='/my-form' element={<MyForm/>}/>
        <Route path='/star-wars-gallery' element={<StarWarGallery/>} />
        <Route path='/*' element={<h1>Error 404 🤓</h1>} />
        <Route path='/my-shop' element={<Shop/>} />
        <Route path='/my-shop/:id' element={<ProductPage/>} />
        
      


    {/* <App /> */}
    {/* <Lesson06 /> */}
    {/* <Lesson07 /> */}
    {/* <Lesson08 /> */}
    {/* <Layout /> */}
    {/* <Lesson09 /> */}
    {/* <StarWarGallery /> */}
    {/* <Hw09 /> */}
    {/* <Lesson10 /> */}
    {/* <Lesson11 /> */}
    {/* <LoginForm /> */} 
    {/* <Lesson12 /> */}
    {/* <FormGender /> */}
     {/* <Lesson13 /> */}
     </Route>
    </Routes>
  </HashRouter>
);
