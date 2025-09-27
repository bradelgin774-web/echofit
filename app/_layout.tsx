import { Stack } from 'expo-router';
export default function RootLayout() {
  return (
    <Stack screenOptions={{ headerShown:false }}>
      <Stack.Screen name="(tabs)" />
      <Stack.Screen name="workoutPlayer" />
      <Stack.Screen name="daily-log" />
      <Stack.Screen name="onboarding" />
      <Stack.Screen name="auth" />
      <Stack.Screen name="paywall" />
    </Stack>
  );
}
