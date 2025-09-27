import { useState } from 'react';
import type { User, Food, Exercise, Session, Message } from './types';

const foods: Food[] = [
  { id: 'chicken', name: 'Chicken Breast (100g)', cals: 165, p: 31, c: 0, f: 3.6 },
  { id: 'rice', name: 'White Rice (100g)', cals: 130, p: 2.7, c: 28, f: 0.3 },
];

const exercises: Exercise[] = [
  { id: 'squat', name: 'Back Squat', muscle: 'legs' },
  { id: 'row', name: 'Seated Row', muscle: 'back' },
];

const week: Session[] = [
  { id: 'w1d1', name: 'Lower A', exerciseIds: ['squat'] },
  { id: 'w1d2', name: 'Upper A', exerciseIds: ['row'] },
];

export function useMockStore() {
  const [user, setUser] = useState<User>({
    uid: 'demo',
    email: 'demo@echo.fit',
    isPro: false,
    streakDays: 2,
    targetCalories: 2200,
  });
  const [sessions, setSessions] = useState<Session[]>(week);
  const [msgs, setMsgs] = useState<Message[]>([]);
  const [todayTotals, setTodayTotals] = useState({ cals: 0, p: 0, c: 0, f: 0 });

  const nextSession = sessions.find((s) => !s.completed) ?? sessions[0];

  const addSet = (
    sessionId: string,
    exerciseId: string,
    set: { weight: number; reps: number; rir: number; warmup: boolean }
  ) => {
    console.log('addSet', sessionId, exerciseId, set);
  };

  const completeSession = (sessionId: string) => {
    setSessions((prev) =>
      prev.map((s) => (s.id === sessionId ? { ...s, completed: true } : s))
    );
    console.log('Session saved. Progression updated.');
  };

  const logFood = (foodId: string, servings = 1) => {
    const f = foods.find((x) => x.id === foodId);
    if (!f) return;
    setTodayTotals((t) => ({
      cals: t.cals + f.cals * servings,
      p: t.p + f.p * servings,
      c: t.c + f.c * servings,
      f: t.f + f.f * servings,
    }));
  };

  const aiCoachSend = (text: string) => {
    const id = Date.now();
    setMsgs((m) => [...m, { id, role: 'user', content: text, ts: id }]);
    setTimeout(() => {
      setMsgs((m) => [
        ...m,
        {
          id: id + 1,
          role: 'assistant',
          content: '(Mock) Keep your form tight and track your volume.',
          ts: id + 1,
        },
      ]);
    }, 400);
  };

  return {
    user,
    setUser,
    foods,
    exercises,
    sessions,
    nextSession,
    msgs,
    todayTotals,
    addSet,
    completeSession,
    logFood,
    aiCoachSend,
  };
}
