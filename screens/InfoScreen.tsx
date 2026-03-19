import React from 'react';
import { View, Text, StyleSheet, FlatList, SafeAreaView } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import ScalePressable from '../components/AnimatedPressable';

const tips = [
  {
    id: 'tip-1',
    title: 'Offline çalışma',
    description: 'Tüm veri seti cihaz içinde saklıdır, sahada internet gerekmez.',
    icon: 'cloud-offline',
  },
  {
    id: 'tip-2',
    title: 'Hızlı teşhis',
    description: 'Marka veya hata kodu ile anlık filtreleme yapın.',
    icon: 'search',
  },
  {
    id: 'tip-3',
    title: 'Güvenli müdahale',
    description: 'Enerji kesme, voltaj kontrolü ve sensör testlerini uygulayın.',
    icon: 'shield-checkmark',
  },
  {
    id: 'tip-4',
    title: 'Saha notları',
    description: 'Kodların açıklamaları çözüm stratejileriyle birlikte verilir.',
    icon: 'document-text',
  },
];

interface InfoScreenProps {
  theme: {
    background: string;
    card: string;
    text: string;
    muted: string;
  };
}

export default function InfoScreen({ theme }: InfoScreenProps) {
  return (
    <SafeAreaView style={[styles.safe, { backgroundColor: theme.background }]}> 
      <FlatList
        data={tips}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.container}
        renderItem={({ item }) => (
          <ScalePressable style={[styles.card, { backgroundColor: theme.card }]}> 
            <Ionicons name={item.icon as any} size={20} color={theme.text} />
            <Text style={[styles.title, { color: theme.text }]}>{item.title}</Text>
            <Text style={[styles.description, { color: theme.muted }]}>{item.description}</Text>
          </ScalePressable>
        )}
        ListHeaderComponent={
          <View style={styles.header}>
            <Text style={[styles.headerTitle, { color: theme.text }]}>Servis Protokolleri</Text>
            <Text style={[styles.headerSubtitle, { color: theme.muted }]}> 
              Teşhis öncesi güvenlik ve hazırlık adımları
            </Text>
          </View>
        }
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1 },
  container: {
    paddingHorizontal: 16,
    paddingBottom: 24,
  },
  header: {
    marginBottom: 12,
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: '700',
  },
  headerSubtitle: {
    marginTop: 6,
    fontSize: 13,
  },
  card: {
    padding: 16,
    borderRadius: 18,
    marginBottom: 14,
    gap: 8,
    shadowColor: '#000',
    shadowOpacity: 0.12,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 4 },
    elevation: 3,
  },
  title: {
    fontSize: 15,
    fontWeight: '700',
  },
  description: {
    fontSize: 13,
    lineHeight: 18,
  },
});
