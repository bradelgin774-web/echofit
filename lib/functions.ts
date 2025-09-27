import { getFunctions, httpsCallable } from 'firebase/functions';
import app from './firebase';

/**
 * Calls a deployed Cloud Function by name.  The return value is
 * automatically typed as `any` since we don't know the exact shape
 * until functions are implemented.  This wrapper will be replaced
 * later with generated types based on our functions.
 */
export async function callFunction(name: string, data: any): Promise<any> {
  const functions = getFunctions(app);
  const callable = httpsCallable(functions, name);
  const result = await callable(data);
  return result.data;
}
