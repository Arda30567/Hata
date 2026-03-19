import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import ScalePressable from './AnimatedPressable';

interface CodeRowProps {
  code: string;
  brand: string;
  description: string;
  onPress: () => void;
  backgroundColor: string;
  textColor: string;
  accentColor: string;
}

export default function CodeRow({
  code,
  brand,
  description,
  onPress,
  backgroundColor,
  textColor,
  accentColor,
}: CodeRowProps) {
  return (
    <ScalePressable style={[styles.row, { backgroundColor }]} onPress={onPress}>
      <View style={styles.header}>
        <View style={[styles.badge, { backgroundColor: accentColor + '22' }]}> 
          <Text style={[styles.code, { color: accentColor }]}>{code}</Text>
        </View>
        <View style={styles.brandWrap}>
          <Ionicons name="hardware-chip" size={14} color={textColor} />
          <Text style={[styles.brand, { color: textColor }]}>{brand}</Text>
        </View>
      </View>
      <Text style={[styles.description, { color: textColor }]} numberOfLines={3}>
        {description}
      </Text>
    </ScalePressable>
  );
}

const styles = StyleSheet.create({
  row: {
    borderRadius: 18,
    padding: 14,
    marginBottom: 14,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 4 },
    elevation: 3,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  badge: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 999,
  },
  code: {
    fontSize: 13,
    fontWeight: '700',
  },
  brandWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  brand: {
    fontSize: 12,
    fontWeight: '600',
    opacity: 0.8,
  },
  description: {
    fontSize: 13,
    lineHeight: 18,
    opacity: 0.9,
  },
});
