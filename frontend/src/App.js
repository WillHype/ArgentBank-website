import React  from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from "react-redux";
import store from './redux/store';
// Layouts
import Layout from './components/layout';

//Styles
import './App.css';

// Import des pages
import HomePage from './pages/HomePage';
import SignIn from './pages/SignIn';
import User from './pages/User'
import Error from './components/Error';

function App() {
  return (
    <Provider store={store}>
    <Router>
      <Layout>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/user" element={<User />} />
          <Route path="*" element={<Error/>}/>            
        </Routes>
      </Layout>
    </Router>
    </Provider>
  );
}

export default App;
