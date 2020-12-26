import React from 'react';
import { AuthContext, AuthProvider } from './AuthContext';

const UserProfile = () => {
  const [, setUser] = React.useContext(AuthContext);
  return(
    <>
      <h1>logado</h1>
      <button onClick={() => {setUser(false)}} >Sair</button>
    </>
  );
}

const Login = () => {
  const [, setUser] = React.useContext(AuthContext);

  const SendCredentials = (e) => {
    e.preventDefault();

    e.target.login.value == 'gui' ? localStorage.setItem('token', '1234') : alert('senha incorreta');

    setUser({ token: '1234' });
  }

  return(
    <>
      <form onSubmit={(e) => {SendCredentials(e)}}>
        <input type="text" name="login" placeholder="Digite sua senha" />
        <button type="submit">Entrar</button>
      </form>
    </>
  );
}

const Main = () => {
  const [user] = React.useContext(AuthContext);
  if(user == 'carregando'){
    return <h1>carregando...</h1>
  }else if(user == true){
    return <UserProfile />
  }else{
    return <Login />
  }
}

function App() {
  return (
    <AuthProvider>
      <h1>vamos la pessoal !</h1>
      <Main />
    </AuthProvider>
  );
}

export default App;
