import React, { useState } from 'react';
import { View } from 'react-native';
import Login from './Login';
import FlashcardQuiz from './FlashcardQuiz';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <View style={{ flex: 1 }}>
      {isLoggedIn ? <FlashcardQuiz /> : <Login onLogin={handleLogin} />}
    </View>
  );
};

export default App;
