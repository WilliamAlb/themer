import React from 'react';
import { BrowserRouter as Router,Routes,Route,Navigate } from 'react-router-dom';
import { Provider } from 'react-redux';
import { useAuthState } from 'react-firebase-hooks/auth';

import { store                } from './store';
import { Navbar               } from '../features/navbar/Navbar';
import { Login                } from '../features/login/Login';
import { Register             } from '../features/register/Register';
import { Dashboard            } from '../features/dashboard/Dashboard';
import { CustomThemeProvider  } from '../providers/customThemeProvider';

import { routes } from '../util/routes';

import { auth } from '../util/firebase';
 

function ProtectedRoute({children}){
  const [user, loading, error] = useAuthState(auth);
  console.log(loading);
  if(loading){
    return null;
  }
  if(user){
    return <Navigate to='/'></Navigate>
  }
  return children;
}

function App() {
  return (
    
    <Provider store={store}>
      <CustomThemeProvider>
          <body >
          <Router>
            <header>
              <Navbar />
            </header>
            <main>
              <Routes>
                  <Route path={routes.login} element={<ProtectedRoute><Login /></ProtectedRoute>}></Route>
                  <Route path={routes.register} element={<ProtectedRoute><Register /></ProtectedRoute>}></Route>
                  <Route path={routes.main} element={<Dashboard></Dashboard>}></Route>
              </Routes>
            </main>
          </Router>
          </body>
        </CustomThemeProvider>
    </Provider>
  );
}

export default App;
