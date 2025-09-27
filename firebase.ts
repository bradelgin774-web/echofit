import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import Constants from 'expo-constants';

// Initialize Firebase using values provided via Expo config.  During
// development these values remain empty and will be populated after
// secrets are set in Expo.
const firebaseConfig = {
  apiKey: Constants.expoConfig?.extra?.firebase?.apiKey ?? '',
  authDomain: Constants.expoConfig?.extra?.firebase?.authDomain ?? '',
  projectId: Constants.expoConfig?.extra?.firebase?.projectId ?? '',
  storageBucket: Constants.expoConfig?.extra?.firebase?.storageBucket ?? '',
  messagingSenderId: Constants.expoConfig?.extra?.firebase?.messagingSenderId ?? '',
  appId: Constants.expoConfig?.extra?.firebase?.appId ?? '',
};

// Firebase App instance.  Even if the config values are empty this will
// still return an app object; correct values are provided at runtime
// through environment variables injected by Expo.
const app = initializeApp(firebaseConfig);

// Export convenience instances for auth, database and storage.
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;