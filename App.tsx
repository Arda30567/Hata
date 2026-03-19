import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { useColorScheme, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFonts } from 'expo-font';
import Ionicons from '@expo/vector-icons/Ionicons';
import HomeScreen from './screens/HomeScreen';
import CategoryScreen from './screens/CategoryScreen';
import CodeDetailScreen from './screens/CodeDetailScreen';
import SearchScreen from './screens/SearchScreen';
import InfoScreen from './screens/InfoScreen';
import { DarkTheme, LightTheme } from './lib/theme';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function HomeStack({ theme }: { theme: typeof LightTheme }) {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: theme.background },
        headerTintColor: theme.text,
        headerTitleStyle: { fontWeight: '700' },
        contentStyle: { backgroundColor: theme.background },
      }}
    >
      <Stack.Screen
        name="Home"
        options={{ title: 'Kategoriler' }}
      >
        {(props) => <HomeScreen {...props} theme={theme} />}
      </Stack.Screen>
      <Stack.Screen
        name="Category"
        options={({ route }: any) => ({ title: route.params?.title ?? 'Kategori' })}
      >
        {(props) => <CategoryScreen {...props} theme={theme} />}
      </Stack.Screen>
      <Stack.Screen
        name="CodeDetail"
        options={{ title: 'Hata Detayı' }}
      >
        {(props) => <CodeDetailScreen {...props} theme={theme} />}
      </Stack.Screen>
    </Stack.Navigator>
  );
}

export default function App() {
  const [fontsLoaded] = useFonts({
    ...Ionicons.font,
  });

  const scheme = useColorScheme();
  const theme = scheme === 'dark' ? DarkTheme : LightTheme;

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={{ flex: 1, backgroundColor: theme.background }}>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            headerShown: false,
            tabBarStyle: {
              backgroundColor: theme.card,
              borderTopColor: theme.border,
            },
            tabBarActiveTintColor: theme.accent,
            tabBarInactiveTintColor: theme.muted,
            tabBarIcon: ({ color, size }) => {
              let icon: keyof typeof Ionicons.glyphMap = 'apps';
              if (route.name === 'Kategoriler') icon = 'grid';
              if (route.name === 'Arama') icon = 'search';
              if (route.name === 'Protokoller') icon = 'shield-checkmark';
              return <Ionicons name={icon} size={size} color={color} />;
            },
          })}
        >
          <Tab.Screen name="Kategoriler">
            {() => <HomeStack theme={theme} />}
          </Tab.Screen>
          <Tab.Screen name="Arama">
            {(props) => <SearchScreen {...props} theme={theme} />}
          </Tab.Screen>
          <Tab.Screen name="Protokoller">
            {(props) => <InfoScreen {...props} theme={theme} />}
          </Tab.Screen>
        </Tab.Navigator>
      </NavigationContainer>
      <StatusBar style={scheme === 'dark' ? 'light' : 'dark'} />
    </View>
  );
}
