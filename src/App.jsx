import { HashRouter, Routes, Route } from "react-router-dom";
import Desktop from './Desktop.jsx'
import Landing from './LandingPage.jsx'

function App() {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/:yourName/:partnerName" element={<Desktop />} />
        </Routes>
      </HashRouter>
    </>
  )
}

export default App
