import { useEffect, useState } from 'react';
import { onSnapshot, doc } from 'firebase/firestore';
import { db } from './firebase';

/**
 * Subscribes to a user document in Firestore.  Returns the document
 * data or `null` if no document exists.  This is a simple hook used
 * during the backend integration phase.  Real selectors and types
 * will be added later.
 */
export function useUserDoc(uid: string | undefined) {
  const [data, setData] = useState<any>(null);
  useEffect(() => {
    if (!uid) return;
    const ref = doc(db, 'users', uid);
    const unsubscribe = onSnapshot(ref, (snap) => {
      setData(snap.exists() ? snap.data() : null);
    });
    return unsubscribe;
  }, [uid]);
  return data;
}
