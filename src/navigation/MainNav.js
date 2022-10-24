import {NavigationContainer} from '@react-navigation/native';
import {useEffect, useState} from 'react';
import AuthNav from './AuthNav';
import AppNav from './BottomNav';
import Welcome from '../screens/Welcome';

function MainNav() {
  const [session, setSession] = useState(false);
  const [loading, setLoading] = useState(true);
  const sessionValidation = () => {
    // 세션 기능 추가
    return false;
  };

  useEffect(() => {
    setTimeout(() => {
      setSession(sessionValidation);
      setLoading(false);
    }, 3000);
  });

  if (loading) {
    return <Welcome />;
  } else {
    return (
      <NavigationContainer>
        {session ? <AppNav /> : <AuthNav />}
      </NavigationContainer>
    );
  }
}

export default MainNav;
