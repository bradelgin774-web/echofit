import { Screen, Card, Title, Label, Button } from '../../lib/ui';
import { useMockStore } from '../../lib/mockStore';
import { FlatList, View } from 'react-native';
import { space } from '../../lib/theme';

export default function Foods() {
  const { foods, logFood, todayTotals } = useMockStore();
  return (
    <Screen style={{ gap: space(2) }}>
      <Card><Title>Today vs Target</Title><Label>{Math.round(todayTotals.cals)} kcal</Label></Card>
      <FlatList data={foods} keyExtractor={f=>f.id} renderItem={({item})=>(
        <Card>
          <Title>{item.name}</Title>
          <Label>{item.cals} kcal</Label>
          <View style={{ height: space(1) }} />
          <Button kind="outline" title="Add to today" onPress={()=> logFood(item.id, 1)} />
        </Card>
      )}/>
    </Screen>
  );
}
