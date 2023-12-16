import HomePage from "./pages/Home"

import { Route , Routes } from "react-router-dom"
import LoginPage from "./pages/Login"
import SignUpPage from "./pages/SignUp"
import CreateRecipePage from "./pages/CreateRecipe"



function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/signup" element={<SignUpPage/>}/>
        <Route path="/createrecipe" element={<CreateRecipePage/>}/>
      </Routes>

    </div>
  )
}

export default App
