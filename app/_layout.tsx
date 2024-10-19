import DrawerCus from '@/components/Drawer';
import { queryClient } from '@/contexts/QueryClientProvider';
import { QueryClientProvider } from '@tanstack/react-query';
import { Stack } from 'expo-router';
import Drawer from 'expo-router/drawer';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

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
              headerRight: () => <DrawerCus />,
            }}
          />
          <Stack.Screen
            name='search'
            options={{
              title: 'Search',
              headerBackTitleVisible: false,
              headerRight: () => <DrawerCus />,
            }}
          />
          <Stack.Screen
            name='modal'
            options={{
              presentation: 'modal',
              title: 'More',
            }}
          />
        </Stack>
      </GestureHandlerRootView>
    </QueryClientProvider>
  );
}
