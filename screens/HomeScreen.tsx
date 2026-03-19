import React from 'react';
import { View, Text, StyleSheet, FlatList, SafeAreaView } from 'react-native';
import { categories } from '../data';
import CategoryCard from '../components/CategoryCard';

interface HomeScreenProps {
  navigation: any;
  theme: {
    background: string;
    card: string;
    text: string;
    muted: string;
    border: string;
  };
}

export default function HomeScreen({ navigation, theme }: HomeScreenProps) {
  return (
    <SafeAreaView style={[styles.safe, { backgroundColor: theme.background }]}> 
      <FlatList
        data={categories}
        keyExtractor={(item) => item.id}
        numColumns={2}
        contentContainerStyle={styles.list}
        columnWrapperStyle={styles.column}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <CategoryCard
            title={item.title}
            description={item.description}
            icon={item.icon}
            color={item.color}
            backgroundColor={theme.card}
            textColor={theme.text}
            onPress={() =>
              navigation.navigate('Category', {
                categoryId: item.id,
                title: item.title,
                color: item.color,
              })
            }
          />
        )}
        ListHeaderComponent={
          <View style={styles.header}>
            <Text style={[styles.title, { color: theme.text }]}>Hata Kodları Kütüphanesi</Text>
            <Text style={[styles.subtitle, { color: theme.muted }]}> 
              Offline çalışan, hızlı arama ve saha odaklı teşhis rehberi
            </Text>
          </View>
        }
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1 },
  header: {
    marginBottom: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
  },
  subtitle: {
    marginTop: 6,
    fontSize: 14,
    lineHeight: 20,
  },
  list: {
    paddingHorizontal: 16,
    paddingBottom: 24,
  },
  column: {
    gap: 12,
  },
});
