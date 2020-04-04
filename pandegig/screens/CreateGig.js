import React, { useState, useCallback } from 'react';
import {
  View, Text, StyleSheet, ScrollView,
} from 'react-native';
import Input from '../components/Input';
import Button from '../components/Button';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 22,
    fontWeight: '800',
    color: 'gray',
    textTransform: 'uppercase',
    marginTop: 100,
    marginBottom: 20,
    textAlign: 'center',
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: 'gray',
    marginTop: 10,
    marginLeft: '3%',
  },
  button: {
    alignItems: 'center',
  },
  resText: {
    textAlign: 'center',
    fontSize: 16,
    paddingBottom: 2,
    color: '#ff5252',
  },
});

const CreateGig = () => {
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const [location, setLocation] = useState();
  const [earnings, setEarnings] = useState();
  const [errorMessage, setErrorMessage] = useState('');

  const onChangeTitle = useCallback((text) => setTitle(text), [setTitle]);
  const onChangeDescription = useCallback((text) => setDescription(text), [
    setDescription,
  ]);
  const onChangeLocation = useCallback((text) => setLocation(text), [
    setLocation,
  ]);
  const onChangeEarnings = useCallback(
    (text) => setEarnings(text.replace(/[^0-9]/g, '')),
    [setEarnings],
  );

  const onPressCreateGig = useCallback(() => {
    let error = false;
    if (title == null || title === '') {
      error = true;
      setErrorMessage('You must give a title!');
    } else if (description == null || description === '') {
      error = true;
      setErrorMessage('You must give a description!');
    } else if (location == null || location === '') {
      error = true;
      setErrorMessage('You must specify a location!');
    } else if (earnings === undefined || earnings == null) {
      error = true;
      setErrorMessage('You must type in earnings!');
    } else if (earnings === 0) {
      error = true;
      setErrorMessage('Earnings can\'t be below 0!');
    } else {
      setErrorMessage('');
    }

    if (!error) {
      // send to AWS PIERKAN <3
      return null;
    }
    return errorMessage;
  }, [errorMessage, description, title, location, earnings]);

  return (
    <View style={styles.container}>
      <ScrollView style={styles.container}>
        <Text style={styles.title}>Create Gig</Text>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Title</Text>
          <Input
            value={title}
            placeholder="Send food"
            onChange={onChangeTitle}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Describe the Gig</Text>
          <Input
            value={description}
            onChange={onChangeDescription}
            multiline
            numberOfLines={4}
            placeholder="I need help with..."
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Location</Text>
          <Input
            value={location}
            placeholder="Drottninggatan 3"
            onChange={onChangeLocation}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Earnings</Text>
          <Input
            value={earnings}
            placeholder="100kr"
            onChange={onChangeEarnings}
            keyboardType="numeric"
          />
        </View>

        <View style={styles.inputContainer}>
          <View style={styles.button}>
            <Button onPress={onPressCreateGig}>Post Gig</Button>
          </View>
        </View>
        <View>
          <Text style={styles.resText}>
            {errorMessage}
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default CreateGig;
