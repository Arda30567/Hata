import React, { useMemo, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  SafeAreaView,
  RefreshControl,
  Pressable,
} from 'react-native';
import { categories, errorCodes } from '../data';
import SearchBar from '../components/SearchBar';
import CodeRow from '../components/CodeRow';

interface SearchScreenProps {
  navigation: any;
  theme: {
    background: string;
    card: string;
    text: string;
    muted: string;
    border: string;
    search: string;
  };
}

export default function SearchScreen({ navigation, theme }: SearchScreenProps) {
  const [query, setQuery] = useState('');
  const [categoryFilter, setCategoryFilter] = useState<string | null>(null);
  const [refreshing, setRefreshing] = useState(false);

  const filtered = useMemo(() => {
    const base = categoryFilter
      ? errorCodes.filter((item) => item.categoryId === categoryFilter)
      : errorCodes;
    if (!query.trim()) return base;
    const lower = query.toLowerCase();
    return base.filter(
      (item) =>
        item.brand.toLowerCase().includes(lower) ||
        item.code.toLowerCase().includes(lower)
    );
  }, [categoryFilter, query]);

  return (
    <SafeAreaView style={[styles.safe, { backgroundColor: theme.background }]}> 
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={[styles.title, { color: theme.text }]}>Global Hızlı Arama</Text>
          <Text style={[styles.subtitle, { color: theme.muted }]}> 
            Tüm cihaz tipleri arasında anlık filtreleme
          </Text>
        </View>
        <SearchBar
          value={query}
          onChangeText={setQuery}
          placeholder="Marka veya hata kodu ara"
          backgroundColor={theme.search}
          textColor={theme.muted}
        />
        <FlatList
          data={categories}
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.filterRow}
          renderItem={({ item }) => {
            const isActive = categoryFilter === item.id;
            return (
              <Pressable
                onPress={() =>
                  setCategoryFilter(isActive ? null : item.id)
                }
                style={[
                  styles.filterChip,
                  {
                    backgroundColor: isActive ? item.color : theme.card,
                    borderColor: item.color,
                  },
                ]}
              >
                <Text
                  style={{
                    color: isActive ? '#0F1115' : theme.text,
                    fontWeight: '600',
                    fontSize: 12,
                  }}
                >
                  {item.title}
                </Text>
              </Pressable>
            );
          }}
        />
        <FlatList
          data={filtered}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.list}
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
          renderItem={({ item }) => {
            const category = categories.find((cat) => cat.id === item.categoryId);
            return (
              <CodeRow
                code={item.code}
                brand={item.brand}
                description={item.description}
                onPress={() =>
                  navigation.navigate('CodeDetail', { item, category })
                }
                backgroundColor={theme.card}
                textColor={theme.text}
                accentColor={category?.color ?? theme.muted}
              />
            );
          }}
          ListEmptyComponent={
            <View style={styles.empty}>
              <Text style={[styles.emptyTitle, { color: theme.text }]}>Sonuç yok</Text>
              <Text style={[styles.emptyText, { color: theme.muted }]}> 
                Farklı bir kod veya marka deneyin.
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
    marginTop: 4,
    fontSize: 13,
  },
  filterRow: {
    paddingVertical: 12,
    gap: 10,
  },
  filterChip: {
    borderWidth: 1,
    borderRadius: 999,
    paddingHorizontal: 12,
    paddingVertical: 6,
    marginRight: 8,
  },
  list: {
    paddingBottom: 16,
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
