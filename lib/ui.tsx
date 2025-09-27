import { View, Text, Pressable, TextInput } from 'react-native';
import { color, radius, space } from './theme';

export const Screen = ({ children, style }: any) => (
  <View
    style={[
      { flex: 1, backgroundColor: color.bg0, padding: space(2) },
      style,
    ]}
  >
    {children}
  </View>
);

export const Card = ({ children, style }: any) => (
  <View
    style={[
      {
        backgroundColor: color.bg1,
        borderRadius: radius.card,
        padding: space(2),
        borderWidth: 1,
        borderColor: color.line,
      },
      style,
    ]}
  >
    {children}
  </View>
);

export const Title = ({ children, style }: any) => (
  <Text
    style={[
      { color: color.text, fontSize: 20, fontWeight: '600' },
      style,
    ]}
  >
    {children}
  </Text>
);

export const Label = ({ children, style }: any) => (
  <Text style={[{ color: color.sub, fontSize: 13 }, style]}>{children}</Text>
);

export const Button = ({ title, onPress, kind = 'primary', disabled }: any) => {
  const bg = kind === 'primary' ? color.primary : 'transparent';
  const brd = kind === 'primary' ? 'transparent' : color.line;
  const txt = kind === 'primary' ? '#0B0C0D' : color.text;
  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      style={({ pressed }) => [
        {
          backgroundColor: bg,
          borderColor: brd,
          borderWidth: 1,
          paddingVertical: 12,
          paddingHorizontal: 16,
          borderRadius: 12,
          opacity: pressed ? 0.9 : 1,
        },
      ]}
    >
      <Text style={{ color: txt, textAlign: 'center', fontWeight: '600' }}>
        {title}
      </Text>
    </Pressable>
  );
};

export const Input = ({
  value,
  onChangeText,
  placeholder,
  secureTextEntry,
  style,
}: any) => (
  <TextInput
    value={value}
    onChangeText={onChangeText}
    secureTextEntry={secureTextEntry}
    placeholder={placeholder}
    placeholderTextColor={color.sub}
    style={[
      {
        color: color.text,
        backgroundColor: '#0C0D0E',
        borderColor: color.line,
        borderWidth: 1,
        borderRadius: 12,
        paddingHorizontal: 14,
        paddingVertical: 12,
      },
      style,
    ]}
  />
);
