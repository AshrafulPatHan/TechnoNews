import All_Publisher from "./components/home/All_Publisher"
import Articles from "./components/home/Articles"
import Plans from "./components/home/Plans"
import Statistics from "./components/home/Statistics"
import Footer from "./components/navigation/Footer"
import Navbar from "./components/navigation/Navbar"


function App() {

  return (
    <div>
      <Navbar/>
      <Articles/>
      <All_Publisher/>
      <Statistics/>
      <Plans/>
      <Footer/>
    </div>
  )
}

export default App