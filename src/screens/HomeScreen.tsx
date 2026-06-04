import React, { useRef } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
  SafeAreaView,
  FlatList,
  Dimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const { width } = Dimensions.get('window');

interface Template {
  id: string;
  title: string;
  category: string;
  count: string;
  color: string;
  icon: string;
}

const HomeScreen: React.FC = () => {
  const templates: Template[] = [
    {
      id: '1',
      title: 'UI UX Design',
      category: 'Designer',
      count: '20+ Templates',
      color: '#8B5CF6',
      icon: 'palette',
    },
    {
      id: '2',
      title: 'Developer',
      category: 'Engineer',
      count: '10+ Templates',
      color: '#3B82F6',
      icon: 'code-braces',
    },
    {
      id: '3',
      title: 'Digital Marketing',
      category: 'Manager',
      count: '25+ Templates',
      color: '#10B981',
      icon: 'chart-line',
    },
  ];

  const renderTemplateCard = ({ item }: { item: Template }) => (
    <TouchableOpacity
      style={[
        styles.templateCard,
        { backgroundColor: item.color, marginRight: 12 },
      ]}
    >
      <Icon name={item.icon} size={40} color="#fff" style={{ marginBottom: 8 }} />
      <Text style={styles.templateTitle}>{item.title}</Text>
      <Text style={styles.templateCategory}>{item.category}</Text>
      <Text style={styles.templateCount}>{item.count}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.userInfo}>
            <View style={styles.avatar}>
              <Text style={styles.avatarText}>JC</Text>
            </View>
            <View>
              <Text style={styles.greeting}>Welcome Back</Text>
              <Text style={styles.userName}>Jane Cooper</Text>
            </View>
          </View>
          <TouchableOpacity style={styles.iconButton}>
            <Icon name="magnify" size={24} color="#333" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <Icon name="bell-outline" size={24} color="#333" />
          </TouchableOpacity>
        </View>

        {/* Main Heading */}
        <View style={styles.headingSection}>
          <Text style={styles.mainHeading}>Ready To Level Up</Text>
          <Text style={styles.mainHeading}>Your Resume?</Text>
        </View>

        {/* Try Template Section */}
        <View style={styles.tryTemplateHeader}>
          <Text style={styles.tryTemplateTitle}>Try Template</Text>
          <TouchableOpacity>
            <Text style={styles.seeAll}>See all</Text>
          </TouchableOpacity>
        </View>

        {/* Template Carousel */}
        <FlatList
          data={templates}
          renderItem={renderTemplateCard}
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          scrollEnabled={false}
          style={styles.carousel}
        />

        {/* Action Section */}
        <Text style={styles.actionTitle}>
          Start From Scratch Or Upload Your Existing Resume
        </Text>

        <View style={styles.actionGrid}>
          <TouchableOpacity style={styles.actionCard}>
            <View style={styles.actionIconContainer}>
              <Icon name="plus-circle-outline" size={32} color="#10B981" />
            </View>
            <Text style={styles.actionLabel}>Create New</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.actionCard}>
            <View style={styles.actionIconContainer}>
              <Icon name="cloud-upload-outline" size={32} color="#F59E0B" />
            </View>
            <Text style={styles.actionLabel}>Upload Document</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.actionCard}>
            <View style={styles.actionIconContainer}>
              <Icon name="scanner" size={32} color="#3B82F6" />
            </View>
            <Text style={styles.actionLabel}>Scan Document</Text>
          </TouchableOpacity>
        </View>

        {/* AI Analysis Button */}
        <TouchableOpacity style={styles.aiButton}>
          <Text style={styles.aiButtonText}>AI Analysis</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollContent: {
    paddingBottom: 100,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
    marginBottom: 20,
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#8B5CF6',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  avatarText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 16,
  },
  greeting: {
    fontSize: 12,
    color: '#666',
    fontWeight: '500',
  },
  userName: {
    fontSize: 14,
    fontWeight: '700',
    color: '#333',
    marginTop: 2,
  },
  iconButton: {
    padding: 8,
    marginLeft: 8,
  },
  headingSection: {
    paddingHorizontal: 16,
    marginBottom: 24,
  },
  mainHeading: {
    fontSize: 28,
    fontWeight: '700',
    color: '#000',
    lineHeight: 34,
  },
  tryTemplateHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    marginBottom: 12,
  },
  tryTemplateTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  seeAll: {
    fontSize: 12,
    fontWeight: '600',
    color: '#666',
  },
  carousel: {
    paddingHorizontal: 16,
    marginBottom: 24,
  },
  templateCard: {
    width: 140,
    paddingVertical: 16,
    paddingHorizontal: 12,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  templateTitle: {
    fontSize: 14,
    fontWeight: '700',
    color: '#fff',
    textAlign: 'center',
    marginTop: 8,
  },
  templateCategory: {
    fontSize: 11,
    color: 'rgba(255, 255, 255, 0.8)',
    marginTop: 2,
  },
  templateCount: {
    fontSize: 10,
    color: 'rgba(255, 255, 255, 0.7)',
    marginTop: 4,
  },
  actionTitle: {
    fontSize: 13,
    fontWeight: '600',
    color: '#333',
    paddingHorizontal: 16,
    marginBottom: 16,
    textAlign: 'center',
  },
  actionGrid: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingHorizontal: 16,
    marginBottom: 24,
    gap: 12,
  },
  actionCard: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 16,
    backgroundColor: '#f9fafb',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#e5e7eb',
  },
  actionIconContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  actionLabel: {
    fontSize: 12,
    fontWeight: '600',
    color: '#333',
    textAlign: 'center',
  },
  aiButton: {
    marginHorizontal: 16,
    paddingVertical: 16,
    backgroundColor: '#FBBF24',
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },
  aiButtonText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#000',
  },
});

export default HomeScreen;