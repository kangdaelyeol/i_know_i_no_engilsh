import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/login/Login';
import Main from './components/main/Main';
import Quiz from './components/quiz/Quiz';




const App = () => {
  const [login, setLogin] = useState(false);

  // Login State 있는 컴포넌트 안에서
  // 해당 state 변수를 사용하는 Logic을 만들어야 함니다.
  // login 정보가 있는지 정보를 반환


  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element=
          {<Login loginInfo=
          {login} />} />
        <Route path='/main' element={<Main loginInfo={login} setLogin={setLogin} />} />
        <Route path='/quiz' element={<Quiz />} />
       </Routes>
    </BrowserRouter>
  );
};

export default App;
