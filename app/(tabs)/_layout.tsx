import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { color } from '../../lib/theme';

export default function TabsLayout() {
  return (
    <Tabs screenOptions={{
      headerShown:false,
      tabBarStyle:{ backgroundColor: '#0E0F10', borderTopColor: color.line },
      tabBarActiveTintColor: color.primary,
      tabBarInactiveTintColor: color.sub
    }}>
      <Tabs.Screen name="index" options={{ title:'Home', tabBarIcon:({color:cc,size}) => <Ionicons name="home" size={size} color={cc}/> }} />
      <Tabs.Screen name="workouts" options={{ title:'Workouts', tabBarIcon:({color:cc,size}) => <Ionicons name="barbell" size={size} color={cc}/> }} />
      <Tabs.Screen name="foods" options={{ title:'Foods', tabBarIcon:({color:cc,size}) => <Ionicons name="restaurant" size={size} color={cc}/> }} />
      <Tabs.Screen name="coach" options={{ title:'Coach', tabBarIcon:({color:cc,size}) => <Ionicons name="chatbubble-ellipses" size={size} color={cc}/> }} />
      <Tabs.Screen name="profile" options={{ title:'Profile', tabBarIcon:({color:cc,size}) => <Ionicons name="person" size={size} color={cc}/> }} />
    </Tabs>
  );
}
