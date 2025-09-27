import { Screen, Card, Title, Label } from '../../lib/ui';
import { useMockStore } from '../../lib/mockStore';
import { router } from 'expo-router';
import { Pressable } from 'react-native';
import { space } from '../../lib/theme';

export default function Workouts() {
  const { sessions } = useMockStore();
  return (
    <Screen style={{ gap: space(2) }}>
      {sessions.map(s => (
        <Pressable key={s.id} onPress={()=> router.push({ pathname:'/workoutPlayer', params:{ sessionId:s.id } })}>
          <Card>
            <Title>{s.name}</Title>
            <Label>{s.completed ? 'Completed' : 'Ready'}</Label>
          </Card>
        </Pressable>
      ))}
    </Screen>
  );
}
