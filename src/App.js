import './App.css';
import { lazy, Suspense, useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const Home = lazy(() => import('./Page/Home'))
const Login = lazy(() => import('./Page/Login'))
const Loding = lazy(() => import('./Page/Loding'))

function App() {
  const [isLogin, setIsLogin] = useState(true);
  const [isLoding, setIsLoding] = useState(true);

  // JSON 서버 구현 후 axios 로 fetch
  // useEffect(() => {
  //   setTimeout(() => {
  //     // 데이터를 어떻게 받아오지??
  //     setIsLoding(false)
  //   },
  //     2000)
  // }, [])

  // 데이터의 흐름
  // App.js -> Home.js -> Item.js -> SingleItem / MultipleItem
  // Fucking Drilling // -> 우선 redux Toolkit 구현 필요

  return (
    <div className="App">
      {/* Suspense 대신 조건부로 구현? */}
      <Router>
        <Suspense fallback={<Loding />}>
          <Routes>
            <Route path="/" element={isLogin ? <Home /> : <Login />} />
          </Routes>
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
