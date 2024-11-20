import './App.css'
function App() {

  const handleClick=(e)=> {
e.preventdefault()
console.log('clicked')
  }


  return (
    
    <>
    <div>
      <header>
     <h1 class="logo">nextperk</h1>
     <nav>
        <ul>
    
            <li>
                <NavLink to="Signup"> SignUp/Login</NavLink>
            </li>
        </ul>
        </nav>

  </header>
      <main>
        
       <h1 class="main-section" >nextperk</h1>

        </main>
   
      
  </div>
 </>
  )
}

export default App
