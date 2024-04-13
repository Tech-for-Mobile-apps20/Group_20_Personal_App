import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, Animated, Modal, Image } from 'react-native';
import styles from './style'; 

const FlashcardQuiz = () => {
  const [showAnswer, setShowAnswer] = useState(false);
  const [isFlipped, setIsFlipped] = useState(false); // State to track if card is flipped
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);
  const [userAnswerText, setUserAnswerText] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All'); // State to track selected category
  const [showModal, setShowModal] = useState(false); // State to control modal visibility

  const [flipAnim] = useState(new Animated.Value(0));

  const [cards, setCards] = useState([
    { category: 'Math', question: 'What is 2 + 2?', answer: '4' },
    { category: 'Geography', question: 'What is the capital of France?', answer: 'Paris' },
    { category: 'Math', question: '3*3?', answer: '9' },
    { category: 'Math', question: '6*2?', answer: '3' },
    { category: 'Science', question: 'What is the Chlorophyll color?', answer: 'Green' },
    { category: 'Science', question: 'What is the chemical symbol for water?', answer: 'H2O' },
    { category: 'History', question: 'Who was the first president of the United States?', answer: 'George Washington' },
  ]);

  const categories = ['All', 'Math', 'Geography', 'Science', 'History'];

  const filteredCards = selectedCategory === 'All' ? cards : cards.filter(card => card.category === selectedCategory);

  const handleNextCard = (userAnswer) => {
    if (userAnswer.trim() === '') {
      alert("Please enter your answer before proceeding.");
      return;
    }

    const currentCard = filteredCards[currentCardIndex];
    const isCorrect = userAnswer.trim().toLowerCase() === currentCard.answer.toLowerCase();

    if (isCorrect) {
      setScore(score + 1);
    }

    setUserAnswerText('');

    // Check if it's the last card based on the array length
    if (currentCardIndex === filteredCards.length - 1) {
      handleFinishQuiz();
    } else {
      setCurrentCardIndex(currentCardIndex + 1);
    }
    setShowAnswer(false);
    setIsFlipped(false);
    flipToQuestion();
  };

  const flipToQuestion = () => {
    Animated.timing(flipAnim, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  const flipToAnswer = () => {
    Animated.timing(flipAnim, {
      toValue: 180,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  const handleFinishQuiz = () => {
    // Calculate and display the final score
    setQuizFinished(true);
  };

  const handleRestartQuiz = () => {
    // Reset all necessary states to restart the quiz
    setShowAnswer(false);
    setCurrentCardIndex(0);
    setScore(0);
    setQuizFinished(false);
    setUserAnswerText('');
    setIsFlipped(false);
    flipToQuestion();
  };

  const interpolatedFrontRotation = flipAnim.interpolate({
    inputRange: [0, 180],
    outputRange: ['0deg', '180deg'],
  });

  const interpolatedBackRotation = flipAnim.interpolate({
    inputRange: [0, 180],
    outputRange: ['180deg', '360deg'],
  });

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require('./assets/logo.png')} style={styles.logo} />
        <TouchableOpacity onPress={() => setShowModal(true)} style={styles.dropdown}>          
          <Text style={styles.dropdownText}>Category: {selectedCategory}</Text>
        </TouchableOpacity>
      </View>
      <Modal
        visible={showModal}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setShowModal(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modal}>
            {categories.map(category => (
              <TouchableOpacity
                key={category}
                onPress={() => {
                  setSelectedCategory(category);
                  setShowModal(false);
                }}
                style={styles.modalItem}
              >
                <Text style={styles.dropdownText}>{category}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </Modal>
      <TouchableOpacity
        activeOpacity={1}
        onPress={() => {
          if (!showAnswer) {
            if (isFlipped) {
              setIsFlipped(false);
              flipToQuestion();
            } else {
              setIsFlipped(true);
              flipToAnswer();
            }
          }
        }}
        style={styles.card}
      >
        <Animated.View
          style={[
            styles.flipCard,
            {
              transform: [{ rotateY: interpolatedFrontRotation }],
            },
          ]}
        >
          <Text style={styles.question}>
            {quizFinished ? 'Quiz Finished' : filteredCards[currentCardIndex].question}
          </Text>
          <Text style={styles.finishedScore}>
          {quizFinished ? `Your score is: ${score}/${filteredCards.length}` : ''}
          </Text>
        </Animated.View>

        <Animated.View
          style={[
            styles.flipCard,
            styles.flipCardBack,
            {
              transform: [{ rotateY: interpolatedBackRotation }],
            },
          ]}
        >
          <Text style={styles.answer}>{filteredCards[currentCardIndex].answer}</Text>
        </Animated.View>
      </TouchableOpacity>

      {!quizFinished && (
        <>
          <TextInput
            style={styles.input}
            value={userAnswerText}
            onChangeText={(text) => setUserAnswerText(text)} // Save the text in state
            placeholder="Enter your answer"
            onSubmitEditing={() => handleNextCard(userAnswerText)} // Pass the text to handleNextCard
          />
          <TouchableOpacity onPress={() => handleNextCard(userAnswerText)} style={styles.nextButton}>
            <Text style={styles.buttonText}>Next Question</Text>
          </TouchableOpacity>
        </>
      )}

      {quizFinished && (
        <View style={styles.finishedContainer}>
          <Text style={styles.finishedScore}>Your score is: {score}/{filteredCards.length}</Text>
          <TouchableOpacity onPress={handleRestartQuiz} style={styles.restartButton}>
            <Text style={styles.buttonText}>Restart Quiz</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default FlashcardQuiz;
