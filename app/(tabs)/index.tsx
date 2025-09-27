import { Screen, Card, Title, Label, Button } from '../../lib/ui';
import { useMockStore } from '../../lib/mockStore';
import { router } from 'expo-router';
import { space } from '../../lib/theme';
import { View } from 'react-native';

export default function Home() {
  const { nextSession, todayTotals } = useMockStore();
  return (
    <Screen style={{ gap: space(2) }}>
      <Card>
        <Title>Up next</Title>
        <Label>{nextSession?.name ?? 'Rest Day'}</Label>
        <View style={{ height: space(1) }} />
        <Button title="Start workout" onPress={()=> router.push({ pathname:'/workoutPlayer', params:{ sessionId: nextSession?.id } })} />
      </Card>
      <Card>
        <Title>Today’s calories</Title>
        <Label>{Math.round(todayTotals.cals)} kcal</Label>
        <View style={{ height: space(1) }} />
        <View style={{ flexDirection:'row', gap: 12 }}>
          <Button kind="outline" title="Log food" onPress={()=> router.push('/(tabs)/foods')} />
          <Button kind="outline" title="Open Coach" onPress={()=> router.push('/(tabs)/coach')} />
        </View>
      </Card>
    </Screen>
  );
}
