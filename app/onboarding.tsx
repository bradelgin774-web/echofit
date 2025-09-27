import { Screen, Card, Title, Label, Input, Button } from '../lib/ui';
import { space } from '../lib/theme';
import { router } from 'expo-router';

export default function Onboarding() {
  return (
    <Screen style={{ gap: space(2) }}>
      <Card>
        <Title>Tell us about you</Title>
        <Label>Mock fields; real save added later.</Label>
        <Input placeholder="Height (cm)" />
        <Input placeholder="Weight (kg)" />
        <Input placeholder="Days per week" />
        <Button title="Finish Onboarding" onPress={()=> router.replace('/(tabs)')} />
      </Card>
    </Screen>
  );
}
