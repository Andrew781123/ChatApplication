/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {Button, SafeAreaView, Text} from 'react-native';
import {
  Callback,
  ImageLibraryOptions,
  launchImageLibrary,
  ImagePickerResponse,
} from 'react-native-image-picker';

const App = () => {
  const imageLibOptions: ImageLibraryOptions = {
    mediaType: 'photo',
  };

  const callBack: Callback = (response: ImagePickerResponse) => {
    if (response.didCancel) {
      console.log('User cancelled');
    }
  };

  const openGallery = () => {
    launchImageLibrary(imageLibOptions, callBack);
  };

  return (
    <SafeAreaView>
      <Text>Hello World</Text>
      <Button onPress={openGallery} title="Select image" />
    </SafeAreaView>
  );
};

export default App;
