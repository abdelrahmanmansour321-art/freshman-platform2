
import './App.css'
import Home from './components/Home/Home'
import {BrowserRouter,Route,Routes,HashRouter} from "react-router-dom"
import Services from "./components/Services/Services"
import Nav from "./components/Nav/Nav"
import Footer from "./components/Footer/Footer"
import Courses from "./components/Courses/Courses"
import About from "./components/About/About"
import Login from "./components/login/Login"
import User from "./components/Userditals/User"
import Conn from "./components/Conn/Conn"
import Lec from "./components/lec&sh/Lec"
import Link from "./components/lec&sh/Link"
import Sum from "./components/lec&sh/sum"
import Conn_math2 from "./components/Conn/conn-math2/Conn-math2"
import Conn_comlaw from "./components/Conn/conn-comlaw/Conn-comlaw"
import Conn_dismath from "./components/Conn/conn-dismath/Conn-dismath"
import Conn_combuild from "./components/Conn/conn-combuild/Conn_combuild"
import Conn_comhis from "./components/Conn/conn-comhis/Conn-comhis"
// import Lec_math2 from "./components/lec&sh/math2-info/Lec-math2"
import Lec_math2 from "./components/lec&sh/math2-info/Lec-math2"
import Comlaw_info from "./components/lec&sh/comlaw-info/comlaw_info"
import Lec_dismath from "./components/lec&sh/dismath_info/Lec-dismath"
import Lec_combuild from "./components/lec&sh/combuild-info/Lec-combuild"
import Lec_comhis from "./components/lec&sh/comhis-info/Lec-comhis"
import Link_math2 from "./components/lec&sh/math2-info/Link-math2"
import Link_dismath from "./components/lec&sh/dismath_info/Link-dismath"
import Link_comlaw from "./components/lec&sh/comlaw-info/Link-comlaw"

function App() {
 

  return (
  <>

  <BrowserRouter>

      
    <Routes>

      <Route path="/" element={
        <>
        <Home />
       
        <Services />
        <About />
        <Nav />
        <Courses />
        <Footer />

        </>
        
        }/>
     
     <Route path="/login" element={
      
      <>
      <Login />
      <Nav />
      </>
      }/>

      <Route path="/user" element={<>
      
      <User />
      <Nav />
      </>}/>

      <Route path="/conn" element={
        <>
        <Conn />
        <Nav />
        </>
      }/>

      <Route path="/lec" element={<>
      <Lec />
      <Nav />
      
      </>}/>
      <Route path="/sum" element={<>
      <Sum />
      <Nav />
      
      </>}/>
      <Route path="/link" element={<>
      <Link />
      <Nav />
      
      </>}/>

      {/* connecthions */}


      {/* math2 */}
      <Route path="/conn-math" element={
        <>
        <Conn_math2 />
        <Nav />
        
        </>
      }/>

      {/* comlaw */}
       <Route path="/conn-comlaw" element={
        <>
        <Conn_comlaw />
        <Nav />
        
        </>
      }/>
      {/* conn-dismath */}

      <Route path="/conn-dismath" element={
        <>
        <Conn_dismath/>
        <Nav />
        
        </>
      }/>
      {/* conn-combuild*/}

      <Route path="/conn-combuild" element={
        <>
        <Conn_combuild/>
        <Nav />
        
        </>
      }/>
      {/* conn-comhis*/}

      <Route path="/conn-comhis" element={
        <>
        <Conn_comhis/>
        <Nav />
        
        </>
      }/>

      {/* //////info//// */}
        {/* {math2} */}
        <Route path="/lec-math2" element={
        <>
        <Lec_math2/>
        <Nav />
        
        </>
      }/> 
        {/* {comalw} */}
        <Route path="/lec-comlaw" element={
        <>
        <Comlaw_info/>
        <Nav />
        
        </>
      }/> 
        {/* {dismath} */}
        <Route path="/lec-dismath" element={
        <>
        <Lec_dismath/>
        <Nav />
        
        </>
      }/> 
        {/* {combuild} */}
        <Route path="/lec-combuild" element={
        <>
        <Lec_combuild/>
        <Nav />
        
        </>
      }/> 
      
        {/* {comhis} */}
        <Route path="/lec-comhis" element={
        <>
        <Lec_comhis/>
        <Nav />
        
        </>
      }/> 
      

      {/* /////////links////// */}

      <Route path="/link-math2" element={
        <>
        <Link_math2/>
        <Nav />
        
        </>
      }/> 

      {/* dismath */}

      <Route path="/link-dismath" element={
        <>
        <Link_dismath/>
        <Nav />
        
        </>
      }/> 
      {/* comlaw */}

         <Route path="/link-comlaw" element={
        <>
        <Link_comlaw/>
        <Nav />
        
        </>
      }/> 

      {/* comhis */}

         {/* <Route path="/link-comhis" element={
        <>
        <Link_comhis/>
        <Nav />
        
        </>
      }/>  */}



    </Routes>


    </BrowserRouter>
    
   
 
  </>
 
  )
}

export default App
