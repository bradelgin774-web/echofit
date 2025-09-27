import { Screen, Card, Title, Label, Button } from '../lib/ui';
import { useLocalSearchParams, router } from 'expo-router';
import { useMockStore } from '../lib/mockStore';
import { space } from '../lib/theme';
import { View } from 'react-native';

export default function WorkoutPlayer() {
  const { sessionId } = useLocalSearchParams<{ sessionId: string }>();
  const { sessions, exercises, addSet, completeSession } = useMockStore();
  const session = sessions.find((s) => s.id === sessionId);
  return (
    <Screen style={{ gap: space(2) }}>
      <Title>{session?.name}</Title>
      {session?.exerciseIds.map((eid) => {
        const ex = exercises.find((e) => e.id === eid);
        return (
          <Card key={eid}>
            <Title>{ex?.name}</Title>
            <Label>{ex?.muscle}</Label>
            <View style={{ height: space(1) }} />
            <Button
              kind="outline"
              title="Add set"
              onPress={() =>
                addSet(session!.id, eid, {
                  weight: 100,
                  reps: 5,
                  rir: 2,
                  warmup: false,
                })
              }
            />
          </Card>
        );
      })}
      <Button
        title="Complete session"
        onPress={() => {
          completeSession(session!.id);
          router.back();
        }}
      />
    </Screen>
  );
}
