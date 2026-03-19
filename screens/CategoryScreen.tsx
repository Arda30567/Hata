import React, { useMemo, useState } from 'react';
import { View, Text, StyleSheet, FlatList, SafeAreaView, RefreshControl } from 'react-native';
import { errorCodes, categories } from '../data';
import SearchBar from '../components/SearchBar';
import CodeRow from '../components/CodeRow';

interface CategoryScreenProps {
  navigation: any;
  route: { params: { categoryId: string; title: string; color: string } };
  theme: {
    background: string;
    card: string;
    text: string;
    muted: string;
    border: string;
    search: string;
  };
}

export default function CategoryScreen({ navigation, route, theme }: CategoryScreenProps) {
  const { categoryId, title, color } = route.params;
  const [query, setQuery] = useState('');
  const [refreshing, setRefreshing] = useState(false);

  const filtered = useMemo(() => {
    const base = errorCodes.filter((item) => item.categoryId === categoryId);
    if (!query.trim()) return base;
    const lower = query.toLowerCase();
    return base.filter(
      (item) =>
        item.brand.toLowerCase().includes(lower) ||
        item.code.toLowerCase().includes(lower)
    );
  }, [categoryId, query]);

  const total = errorCodes.filter((item) => item.categoryId === categoryId).length;

  return (
    <SafeAreaView style={[styles.safe, { backgroundColor: theme.background }]}> 
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={[styles.title, { color: theme.text }]}>{title}</Text>
          <Text style={[styles.subtitle, { color: theme.muted }]}> 
            {filtered.length} / {total} kayıt görüntüleniyor
          </Text>
        </View>
        <SearchBar
          value={query}
          onChangeText={setQuery}
          placeholder="Marka veya kod ara (E2, Daikin, F1E0)"
          backgroundColor={theme.search}
          textColor={theme.muted}
        />
        <FlatList
          data={filtered}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.list}
          showsVerticalScrollIndicator={false}
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              tintColor={theme.text}
              onRefresh={() => {
                setRefreshing(true);
                setTimeout(() => setRefreshing(false), 400);
              }}
            />
          }
          renderItem={({ item }) => (
            <CodeRow
              code={item.code}
              brand={item.brand}
              description={item.description}
              onPress={() =>
                navigation.navigate('CodeDetail', {
                  item,
                  category: categories.find((cat) => cat.id === categoryId),
                })
              }
              backgroundColor={theme.card}
              textColor={theme.text}
              accentColor={color}
            />
          )}
          ListEmptyComponent={
            <View style={styles.empty}>
              <Text style={[styles.emptyTitle, { color: theme.text }]}>Sonuç bulunamadı</Text>
              <Text style={[styles.emptyText, { color: theme.muted }]}> 
                Marka adını veya hata kodunu daha kısa deneyin.
              </Text>
            </View>
          }
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1 },
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 8,
  },
  header: {
    marginBottom: 12,
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
  },
  subtitle: {
    fontSize: 13,
    marginTop: 4,
  },
  list: {
    paddingVertical: 16,
  },
  empty: {
    marginTop: 40,
    alignItems: 'center',
  },
  emptyTitle: {
    fontSize: 16,
    fontWeight: '600',
  },
  emptyText: {
    marginTop: 6,
    fontSize: 13,
    textAlign: 'center',
  },
});
