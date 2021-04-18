import React from 'react';
import Home from './Pages/Home/index.js';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './theme'
import Signin from './Pages/Home/Signin';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Catalogo from './Pages/Home/Catalogo';
//import Suporte from './Pages/Home/Suporte';
import Funcionario from './Pages/Home/Funcionario'

function App() {

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/sign-in' element={<Signin />} />
          <Route path='/Catalogo' element={<Catalogo />} />
          <Route path='/Funcionario' element={<Funcionario />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>

  );
}

export default App;
