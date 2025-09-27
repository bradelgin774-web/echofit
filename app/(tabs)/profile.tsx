import { Screen, Card, Title, Label, Button } from '../../lib/ui';
import { useMockStore } from '../../lib/mockStore';
import { router } from 'expo-router';
import { space } from '../../lib/theme';
import { View } from 'react-native';

export default function Profile() {
  const { user } = useMockStore();
  return (
    <Screen style={{ gap: space(2) }}>
    <Card>>
        <Title>EchoFit</Title>
        <Label>{user.email}</Label>
        <Label>Pro: {String(user.isPro)}</Label>
      </Card>
      <View style={{ gap: 12 }}>
        <Button kind="outline" title="Open Daily Log" onPress={() => router.push('/daily-log')} />
        <Button kind="outline" title="Go Pro" onPress={() => router.push('/paywall')} />
      </View>
    </Screen>
  );
}
