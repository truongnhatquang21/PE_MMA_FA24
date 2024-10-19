import { queryClient } from '@/contexts/QueryClientProvider';
import { QueryClientProvider } from '@tanstack/react-query';
import { Stack } from 'expo-router';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';
export default function RootLayout() {
  return (
    <QueryClientProvider client={queryClient}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <Stack>
          <Stack.Screen name='(tabs)' options={{ headerShown: false }} />
          <Stack.Screen
            name='details/[id]'
            options={{
              title: 'Details',
              headerBackTitleVisible: false,
            }}
          />
          <Stack.Screen
            name='search'
            options={{
              title: 'Details',
              headerBackTitleVisible: false,
            }}
          />
        </Stack>
      </GestureHandlerRootView>
    </QueryClientProvider>
  );
}
