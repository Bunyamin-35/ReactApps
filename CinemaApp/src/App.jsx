import { Routes, Route } from 'react-router-dom'
import Series from './Pages/Series'
import Home from './Pages/Home'
import Details from './Pages/Details'
import styles from "./app.module.scss"

function App() {
  return (
    <div className={styles.App}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shows" element={<Series />} />
        <Route path="/shows/:id" element={<Details />} />
      </Routes>
    </div>
  )
}

export default App
