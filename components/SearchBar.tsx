import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

interface SearchBarProps {
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  backgroundColor: string;
  textColor: string;
}

export default function SearchBar({
  value,
  onChangeText,
  placeholder,
  backgroundColor,
  textColor,
}: SearchBarProps) {
  return (
    <View style={[styles.container, { backgroundColor }]}> 
      <Ionicons name="search" size={18} color={textColor} style={styles.icon} />
      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor={textColor}
        style={[styles.input, { color: textColor }]}
        returnKeyType="search"
        autoCorrect={false}
        autoCapitalize="none"
        clearButtonMode="while-editing"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 16,
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  icon: {
    marginRight: 8,
  },
  input: {
    flex: 1,
    fontSize: 15,
  },
});
