import { ref, onMounted, onUnmounted } from 'vue';
import echo from './echo';

export function useNotifications() {
  const notifications = ref([]);

  const addNotification = (notification) => {
    notifications.value.unshift(notification); // Add new notifications to the beginning of the array
  };

  onMounted(() => {
    echo.channel('brand-notifications')
      .listen('BrandEmailSent', (event) => {
        console.log('Received event:', event);
        addNotification({
          message: `Email sent for brand: ${event.brand.name}`,
          timestamp: new Date(),
        });
      });
  });

  onUnmounted(() => {
    echo.leaveChannel('brand-notifications');
  });

  return {
    notifications,
  };
}
