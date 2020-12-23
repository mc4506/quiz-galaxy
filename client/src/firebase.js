import firebase from 'firebase';

const firebaseConfig = {
	apiKey: process.env.REACT_APP_FIREBASE_APIKEY,
	authDomain: 'quiz-galaxy.firebaseapp.com',
	projectId: 'quiz-galaxy',
	storageBucket: 'quiz-galaxy.appspot.com',
	messagingSenderId: '1066396990067',
	appId: '1:1066396990067:web:820f8d3fd9d205025e0806',
	measurementId: 'G-9T49NN5970',
};

firebase.initializeApp(firebaseConfig);

const fire = firebase;
export default fire;