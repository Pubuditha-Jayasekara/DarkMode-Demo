import React, {useState} from 'react';
import {
  Appearance,
  StyleSheet,
  View,
  Text,
  Switch,
  TextInput,
  Button,
  Alert,
} from 'react-native';

// Define color palettes for light and dark modes
const lightColors = {
  background: '#f0f0f0',
  text: '#000',
  inputBackground: '#fff',
  buttonBackground: '#007bff',
  buttonText: '#fff',
};

const darkColors = {
  background: '#121212',
  text: '#fff',
  inputBackground: '#333',
  buttonBackground: '#1e90ff',
  buttonText: '#fff',
};

const App = () => {
  // Get the current system theme
  const systemTheme = Appearance.getColorScheme();

  // State to manage the current theme (default to system theme)
  const [isDarkMode, setIsDarkMode] = useState(systemTheme === 'dark');

  // Toggle function to manually switch between light and dark mode
  const toggleTheme = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  // Select the correct color palette based on the current mode
  const colors = isDarkMode ? darkColors : lightColors;

  // Handle submit button press
  const handleSubmit = () => {
    Alert.alert('Form Submitted', 'You have submitted the form!');
  };

  return (
    <View style={[styles.container, {backgroundColor: colors.background}]}>
      {/* Title */}
      <Text style={[styles.title, {color: colors.text}]}>
        {isDarkMode ? 'Dark Mode' : 'Light Mode'} Active
      </Text>

      {/* Text Input */}
      <TextInput
        style={[
          styles.input,
          {backgroundColor: colors.inputBackground, color: colors.text},
        ]}
        placeholder="Enter your text"
        placeholderTextColor={isDarkMode ? '#888' : '#666'}
      />

      {/* Submit Button */}
      <View
        style={[
          styles.buttonContainer,
          {backgroundColor: colors.buttonBackground},
        ]}>
        <Button
          title="Submit"
          color={colors.buttonBackground}
          onPress={handleSubmit}
        />
      </View>

      {/* Switch to Toggle Dark Mode */}
      <View style={styles.switchContainer}>
        <Text style={[styles.switchLabel, {color: colors.text}]}>
          Toggle Dark Mode
        </Text>
        <Switch
          value={isDarkMode}
          onValueChange={toggleTheme}
          trackColor={{false: '#767577', true: '#81b0ff'}}
          thumbColor={isDarkMode ? '#f4f3f4' : '#f4f3f4'}
        />
      </View>
    </View>
  );
};

// Define the base styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    height: 50,
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 20,
    fontSize: 18,
    borderColor: '#ccc',
    borderWidth: 1,
  },
  buttonContainer: {
    borderRadius: 8,
    overflow: 'hidden',
    marginBottom: 30,
  },
  switchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
  },
  switchLabel: {
    fontSize: 18,
  },
});

export default App;


/********************************************
 * This code updates the app's theme based
 * on changes to the operating system's
 * theme settings, automatically switching
 * between dark mode and light mode when
 * the user changes their device's theme.
 ********************************************/

// import React, { useState, useEffect } from 'react';
// import {
//   Appearance,
//   StyleSheet,
//   View,
//   Text,
//   Switch,
//   TextInput,
//   Button,
//   Alert,
// } from 'react-native';

// // Define color palettes for light and dark modes
// const lightColors = {
//   background: '#f0f0f0',
//   text: '#000',
//   inputBackground: '#fff',
//   buttonBackground: '#007bff',
//   buttonText: '#fff',
// };

// const darkColors = {
//   background: '#121212',
//   text: '#fff',
//   inputBackground: '#333',
//   buttonBackground: '#1e90ff',
//   buttonText: '#fff',
// };

// const App = () => {
//   // Get the current system theme
//   const systemTheme = Appearance.getColorScheme();

//   // State to manage the current theme (default to system theme)
//   const [isDarkMode, setIsDarkMode] = useState(systemTheme === 'dark');

//   // Effect to listen for changes in the appearance settings
//   useEffect(() => {
//     const subscription = Appearance.addChangeListener(({ colorScheme }) => {
//       setIsDarkMode(colorScheme === 'dark');
//     });

//     // Clean up the listener when the component unmounts
//     return () => subscription.remove();
//   }, []);

//   // Toggle function to manually switch between light and dark mode
//   const toggleTheme = () => {
//     setIsDarkMode(prevMode => !prevMode);
//   };

//   // Select the correct color palette based on the current mode
//   const colors = isDarkMode ? darkColors : lightColors;

//   // Handle submit button press
//   const handleSubmit = () => {
//     Alert.alert('Form Submitted', 'You have submitted the form!');
//   };

//   return (
//     <View style={[styles.container, { backgroundColor: colors.background }]}>
//       {/* Title */}
//       <Text style={[styles.title, { color: colors.text }]}>
//         {isDarkMode ? 'Dark Mode' : 'Light Mode'} Active
//       </Text>

//       {/* Text Input */}
//       <TextInput
//         style={[
//           styles.input,
//           { backgroundColor: colors.inputBackground, color: colors.text },
//         ]}
//         placeholder="Enter your text"
//         placeholderTextColor={isDarkMode ? '#888' : '#666'}
//       />

//       {/* Submit Button */}
//       <View style={[styles.buttonContainer, { backgroundColor: colors.buttonBackground }]}>
//         <Button
//           title="Submit"
//           color={colors.buttonBackground}
//           onPress={handleSubmit}
//         />
//       </View>

//       {/* Switch to Toggle Dark Mode */}
//       <View style={styles.switchContainer}>
//         <Text style={[styles.switchLabel, { color: colors.text }]}>
//           Toggle Dark Mode
//         </Text>
//         <Switch
//           value={isDarkMode}
//           onValueChange={toggleTheme}
//           trackColor={{ false: '#767577', true: '#81b0ff' }}
//           thumbColor={isDarkMode ? '#f4f3f4' : '#f4f3f4'}
//         />
//       </View>
//     </View>
//   );
// };

// // Define the base styles
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     justifyContent: 'center',
//   },
//   title: {
//     fontSize: 28,
//     fontWeight: 'bold',
//     marginBottom: 20,
//     textAlign: 'center',
//   },
//   input: {
//     height: 50,
//     borderRadius: 8,
//     paddingHorizontal: 15,
//     marginBottom: 20,
//     fontSize: 18,
//     borderColor: '#ccc',
//     borderWidth: 1,
//   },
//   buttonContainer: {
//     borderRadius: 8,
//     overflow: 'hidden',
//     marginBottom: 30,
//   },
//   switchContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginTop: 20,
//   },
//   switchLabel: {
//     fontSize: 18,
//   },
// });

// export default App;
