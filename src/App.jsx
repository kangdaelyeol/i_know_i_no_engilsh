import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/login/Login';
import Main from './components/main/Main';

const fakeDB = {
  users: {
    rkdeofuf: {
      id: "rkdeofuf",
      userName: "대렬"
    }
  }
}

const App = () => {
  const [login, setLogin] = useState(false);

  // Login State 있는 컴포넌트 안에서
  // 해당 state 변수를 사용하는 Logic을 만들어야 함니다.
  // login 정보가 있는지 정보를 반환
  const requestLogin = (userName) => {
    // DB 검사한다 가정
    const userInfo = fakeDB.users[userName];

    if(!userInfo) 
      return false;
    else {
      setLogin(userInfo);
      return true;
    }
  }
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login login={login} requestLogin={requestLogin} />} />
        <Route path='/main' element={<Main login={login} setLogin={setLogin} />} />
       </Routes>
    </BrowserRouter>
  );
};

export default App;
