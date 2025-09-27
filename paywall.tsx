import { Screen, Card, Title, Label, Button } from '../lib/ui';
import { space } from '../lib/theme';
import { router } from 'expo-router';

export default function Paywall() {
  return (
    <Screen style={{ gap: space(2) }}>
      <Card>
        <Title>Go Pro</Title>
        <Label>Unlimited AI coach</Label>
        <Label>Advanced progressions</Label>
        <Label>Priority features</Label>
        <Button title="Upgrade now" onPress={() => router.back()} />
      </Card>
    </Screen>
  );
}
