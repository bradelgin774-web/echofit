import React from 'react';
import { Screen, Card, Title, Label, Input, Button } from '../lib/ui';
import { space } from '../lib/theme';
import { router } from 'expo-router';

export default function Auth() {
  const [email, setEmail] = React.useState('');
  const [pw, setPw] = React.useState('');
  return (
    <Screen style={{ gap: space(2) }}>
      <Card>
        <Title>Welcome to EchoFit</Title>
        <Label>Mock auth for UI. Real auth will be added later.</Label>
        <Input placeholder="Email" value={email} onChangeText={setEmail} />
        <Input
          placeholder="Password"
          secureTextEntry
          value={pw}
          onChangeText={setPw}
        />
        <Button
          title="Create account"
          onPress={() => router.replace('/onboarding')}
        />
        <Button
          kind="outline"
          title="Sign in"
          onPress={() => router.replace('/(tabs)')}
        />
        <Button
          kind="ghost"
          title="Send reset link"
          onPress={() => {}}
        />
      </Card>
    </Screen>
  );
}
