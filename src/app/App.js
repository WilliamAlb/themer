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
import { Create } from '../features/create/Create';
import { Footer } from '../features/footer/Footer';
 

function ProtectedRouteAvailableLoggedOut({children}){
  const [user, loading] = useAuthState(auth);
  if(loading){
    return null;
  }
  if(user){
    return <Navigate to='/'></Navigate>
  }
  return children;
}
function ProtectedRouteAvailableLoggedIn({children}){
  const [user, loading] = useAuthState(auth);
  if(loading){
    return null;
  }
  if(!user){
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
                  <Route path={routes.login} element={<ProtectedRouteAvailableLoggedOut><Login /></ProtectedRouteAvailableLoggedOut>}></Route>
                  <Route path={routes.register} element={<ProtectedRouteAvailableLoggedOut><Register /></ProtectedRouteAvailableLoggedOut>}></Route>
                  <Route path={routes.main} element={<Dashboard></Dashboard>}></Route>
                  <Route path={routes.create} element={<ProtectedRouteAvailableLoggedIn><Create></Create></ProtectedRouteAvailableLoggedIn>}></Route>
              </Routes>
            </main>
          </Router>
          </body>
        </CustomThemeProvider>
    </Provider>
  );
}

export default App;
