# WordList_App


# React Native Word List App
This is a simple React Native app that fetches a list of words from the Datamuse API and displays them in a scrollable list view.

# Getting Started
To run this app, you will need:

**Node.js and NPM installed**
A React Native development environment set up
Once you have those prerequisites, you can install the dependencies for this app by running the following command in the project directory:

**npm install**

To run the app in development mode, run the following command:

**react-native run-android**
OR
**expo start --web**

App Structure
The app consists of two screens:

**WordListScreen:** This screen displays the list of words.
**WordDetailScreen:** This screen displays the details of a selected word.
**The WordListScreen** uses the **FlatList** component to render the list of words. The **renderItem** prop of the FlatList component is used to render each item in the list. In this case, each item is simply a Text element with the word text.

The WordDetailScreen simply displays the word that was passed to it as a prop.

API
The app uses the Datamuse API to fetch the list of words. The Datamuse API is a free API that provides access to a variety of linguistic data, including word lists, word definitions, and word associations.

To learn more about the Datamuse API, you can visit the following website:

https://www.datamuse.com/api/
