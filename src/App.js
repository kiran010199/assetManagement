import logo from './logo.svg';
import Home from './pages/Home';
import './App.css';

function App(){
  return(
  <> 
    <Header/>
    <Footer/>
 </>

  )
}

function Header(){
return(
  
      <Router>
        <div className="header">
        <a  class="logo">CRM Project</a>
        <div className="header-right"  >
      
      <div >
        <Link className="a" className="active" to="/">Home</Link></div></div>
        
      
      
      </div>


  <Routes>
    <Route path ="/" element={<Home/>}/> 
        
  </Routes>
    
    <br/><br/><br/>
  </Router>
        
    );
}



function Footer(){
    return(
        <>
            <p className="centerfooter">Copyright 2021 - Team 1 - Node</p>
        </>
    )
}

export default App;;
