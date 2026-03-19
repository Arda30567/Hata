import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import ScalePressable from './AnimatedPressable';

interface CategoryCardProps {
  title: string;
  description: string;
  icon: keyof typeof Ionicons.glyphMap;
  color: string;
  onPress: () => void;
  backgroundColor: string;
  textColor: string;
}

export default function CategoryCard({
  title,
  description,
  icon,
  color,
  onPress,
  backgroundColor,
  textColor,
}: CategoryCardProps) {
  return (
    <ScalePressable style={[styles.card, { backgroundColor }]} onPress={onPress}>
      <View style={[styles.iconWrap, { backgroundColor: color + '22' }]}> 
        <Ionicons name={icon} size={22} color={color} />
      </View>
      <Text style={[styles.title, { color: textColor }]}>{title}</Text>
      <Text style={[styles.description, { color: textColor }]} numberOfLines={2}>
        {description}
      </Text>
    </ScalePressable>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    borderRadius: 20,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOpacity: 0.12,
    shadowRadius: 16,
    shadowOffset: { width: 0, height: 6 },
    elevation: 4,
  },
  iconWrap: {
    width: 44,
    height: 44,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
  },
  title: {
    fontSize: 15,
    fontWeight: '700',
  },
  description: {
    marginTop: 6,
    fontSize: 12,
    lineHeight: 16,
    opacity: 0.7,
  },
});
