import { Routes, Route, useLocation} from 'react-router-dom'
import { useEffect } from 'react';
import Series from './Pages/Series'
import Home from './Pages/Home'
import Detail from './Pages/Detail'
import NotFound from './Pages/NotFound'
import styles from "./app.module.scss"
import { ShowsProvider } from './context/ShowsContext'

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {

  return (
    <div className={styles.App}>
      <ShowsProvider>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shows" element={<Series />} />
          <Route path="/shows/:id" element={<Detail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </ShowsProvider>
    </div>
  )
}

export default App
