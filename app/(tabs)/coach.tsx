import { Screen, Card, Button } from '../../lib/ui';
import { useMockStore } from '../../lib/mockStore';
import { FlatList, TextInput, Text } from 'react-native';
import { color, space } from '../../lib/theme';
import { useState } from 'react';

export default function Coach() {
  const { msgs, aiCoachSend } = useMockStore();
  const [text, setText] = useState('');
  return (
    <Screen style={{ gap: space(2) }}>
      <FlatList data={msgs} keyExtractor={m=>String(m.id)} renderItem={({item})=>(
        <Card><Text style={{ color: color.text }}><Text style={{color: color.sub}}>{item.role}: </Text>{item.content}</Text></Card>
      )}/>
      <TextInput value={text} onChangeText={setText} placeholder="Ask your coach…" placeholderTextColor={color.sub}
        style={{ color: color.text, backgroundColor:'#0C0D0E', borderColor:'#22262A', borderWidth:1, borderRadius:12, padding:12 }} />
      <Button title="Send" onPress={()=> { if(text.trim()) aiCoachSend(text.trim()); setText(''); }} />
    </Screen>
  );
}
