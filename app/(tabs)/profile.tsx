// app/(tabs)/profile.tsx
import { View, Text, Pressable, ScrollView, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { Image } from 'expo-image';

export default function ProfileScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>
          Profile
        </Text>
      </View>

      <ScrollView>
        <View style={styles.profileInfo}>
          <Image
            source="https://placehold.co/200x200/png"
            style={styles.profileImage}
          />
          <Text style={styles.profileName}>
            John Doe
          </Text>
          <Text style={styles.profileEmail}>
            john.doe@example.com
          </Text>
        </View>

        <View style={styles.statsContainer}>
          <StatItem count={5} label="Orders" />
          <StatItem count={2} label="Reviews" />
          <StatItem count={3} label="Wishlist" />
        </View>

        <View style={styles.menuContainer}>
          <MenuItem
            icon="person-outline"
            label="Edit Profile"
          />
          <MenuItem
            icon="location-outline"
            label="Shipping Address"
          />
          <MenuItem
            icon="card-outline"
            label="Payment Methods"
          />
          <MenuItem
            icon="settings-outline"
            label="Settings"
          />
          <MenuItem
            icon="help-circle-outline"
            label="Help & Support"
          />
        </View>

        <View style={styles.logoutContainer}>
          <Pressable style={styles.logoutButton}>
            <Text style={styles.logoutButtonText}>
              Log Out
            </Text>
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

interface StatItemProps {
  count: number;
  label: string;
}

function StatItem({ count, label }: StatItemProps) {
  return (
    <View style={styles.statItem}>
      <Text style={styles.statCount}>{count}</Text>
      <Text style={styles.statLabel}>{label}</Text>
    </View>
  );
}

interface MenuItemProps {
  icon: keyof typeof Ionicons.glyphMap;
  label: string;
}

function MenuItem({ icon, label }: MenuItemProps) {
  return (
    <Pressable style={styles.menuItem}>
      <Ionicons name={icon} size={24} color="#FFFFFF" />
      <Text style={styles.menuText}>{label}</Text>
      <Ionicons name="chevron-forward" size={24} color="#999999" />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#151718'
  },
  header: {
    padding: 16,
    backgroundColor: '#1A1A1A',
    borderBottomWidth: 1,
    borderBottomColor: '#2A2A2A'
  },
  headerTitle: {
    fontSize: 24,
    fontFamily: 'GothamBold',
    color: '#FFFFFF'
  },
  profileInfo: {
    padding: 20,
    alignItems: 'center',
    backgroundColor: '#1A1A1A',
    gap: 12
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#2A2A2A'
  },
  profileName: {
    fontFamily: 'GothamBold',
    fontSize: 20,
    color: '#FFFFFF'
  },
  profileEmail: {
    fontFamily: 'GothamBook',
    fontSize: 16,
    color: '#999999'
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 20,
    backgroundColor: '#1A1A1A',
    marginTop: 1
  },
  statItem: {
    alignItems: 'center'
  },
  statCount: {
    fontFamily: 'GothamBold',
    fontSize: 20,
    color: '#FFFFFF'
  },
  statLabel: {
    fontFamily: 'GothamBook',
    fontSize: 14,
    color: '#999999'
  },
  menuContainer: {
    padding: 16,
    gap: 12
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1A1A1A',
    padding: 16,
    borderRadius: 12,
    gap: 12
  },
  menuText: {
    fontFamily: 'GothamBook',
    fontSize: 16,
    color: '#FFFFFF',
    flex: 1
  },
  logoutContainer: {
    padding: 16
  },
  logoutButton: {
    backgroundColor: '#E40421',
    borderRadius: 25,
    padding: 16,
    alignItems: 'center'
  },
  logoutButtonText: {
    fontFamily: 'GothamBold',
    fontSize: 16,
    color: '#FFFFFF'
  }
});
