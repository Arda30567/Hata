import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import ScalePressable from '../components/AnimatedPressable';

interface CodeDetailScreenProps {
  route: { params: { item: any; category: any } };
  navigation: any;
  theme: {
    background: string;
    card: string;
    text: string;
    muted: string;
  };
}

export default function CodeDetailScreen({ route, navigation, theme }: CodeDetailScreenProps) {
  const { item, category } = route.params;

  return (
    <SafeAreaView style={[styles.safe, { backgroundColor: theme.background }]}> 
      <View style={styles.container}>
        <View style={[styles.card, { backgroundColor: theme.card }]}> 
          <View style={styles.header}>
            <View style={[styles.badge, { backgroundColor: category?.color + '33' }]}> 
              <Text style={[styles.code, { color: category?.color || theme.text }]}>
                {item.code}
              </Text>
            </View>
            <View style={styles.brandRow}>
              <Ionicons name="hardware-chip" size={16} color={theme.muted} />
              <Text style={[styles.brand, { color: theme.muted }]}>{item.brand}</Text>
            </View>
          </View>
          <Text style={[styles.description, { color: theme.text }]}>{item.description}</Text>
        </View>
        <View style={[styles.card, { backgroundColor: theme.card }]}> 
          <Text style={[styles.sectionTitle, { color: theme.text }]}>Kategori</Text>
          <Text style={[styles.sectionText, { color: theme.muted }]}>{category?.title}</Text>
        </View>
        <ScalePressable
          style={[styles.button, { backgroundColor: category?.color || theme.text }]}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="arrow-back" size={18} color="#0F1115" />
          <Text style={styles.buttonText}>Listeye Dön</Text>
        </ScalePressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1 },
  container: {
    flex: 1,
    padding: 16,
    gap: 14,
  },
  card: {
    borderRadius: 18,
    padding: 16,
    shadowColor: '#000',
    shadowOpacity: 0.12,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 4 },
    elevation: 3,
  },
  header: {
    gap: 10,
    marginBottom: 12,
  },
  badge: {
    alignSelf: 'flex-start',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 999,
  },
  code: {
    fontSize: 14,
    fontWeight: '700',
  },
  brandRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  brand: {
    fontSize: 13,
    fontWeight: '600',
  },
  description: {
    fontSize: 14,
    lineHeight: 20,
  },
  sectionTitle: {
    fontSize: 13,
    fontWeight: '700',
  },
  sectionText: {
    fontSize: 13,
    marginTop: 4,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 14,
    borderRadius: 14,
    gap: 8,
  },
  buttonText: {
    fontSize: 14,
    fontWeight: '700',
    color: '#0F1115',
  },
});
