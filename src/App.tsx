import { Route, Routes } from 'react-router-dom';
import Header from './components/Layout/Header/Header';
import Login from './components/Layout/Login/Login';
import dataProps from './dataProps.json';
import Signup from './components/Layout/Signup/Signup';
import styles from './App.module.scss';

const { headerProps, loginProps, signupProps } = dataProps;

function App() {
  return (
    <div className={styles.app}>
      <Header headerProps={headerProps} />
      <Routes>
        {/* <Route path='/' element={} /> */}
        <Route path='/login' element={<Login loginProps={loginProps} />} />
        <Route path='/signup' element={<Signup signupProps={signupProps} />} />
      </Routes>
    </div>
  );
}

export default App;
