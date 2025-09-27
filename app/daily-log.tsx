import { Screen, Card, Title, Label, Input, Button } from '../lib/ui';
import { space } from '../lib/theme';

export default function DailyLog() {
  return (
    <Screen style={{ gap: space(2) }}>
      <Card>
        <Title>Daily Log</Title>
        <Label>Mock inputs; saved locally later.</Label>
      </Card>
      <Input placeholder="Weight (kg)" />
      <Input placeholder="Water (ml)" />
      <Input placeholder="Sleep (hours)" />
      <Input placeholder="Notes" />
      <Button title="Save" onPress={() => {}} />
    </Screen>
  );
}
