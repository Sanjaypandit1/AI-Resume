import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  TextInput,
  SafeAreaView,
  FlatList,
  Dimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const { width } = Dimensions.get('window');

interface TemplateItem {
  id: string;
  name: string;
  role: string;
  color: string;
  bgColor: string;
}

const TemplateScreen: React.FC = () => {
  const [searchText, setSearchText] = useState('');

  const templates: TemplateItem[] = [
    {
      id: '1',
      name: 'Richard',
      role: 'Sanchez',
      color: '#1f2937',
      bgColor: '#e0e7ff',
    },
    {
      id: '2',
      name: 'Richard',
      role: 'Sanchez',
      color: '#86EFAC',
      bgColor: '#dbeafe',
    },
    {
      id: '3',
      name: 'Nora',
      role: 'Polson',
      color: '#fbbf24',
      bgColor: '#fce7f3',
    },
    {
      id: '4',
      name: 'Richard',
      role: 'Sanchez',
      color: '#a78bfa',
      bgColor: '#dcfce7',
    },
    {
      id: '5',
      name: 'Rafiquer',
      role: 'Islam',
      color: '#60a5fa',
      bgColor: '#e0f2fe',
    },
    {
      id: '6',
      name: 'Template',
      role: 'Designer',
      color: '#f87171',
      bgColor: '#fef3c7',
    },
  ];

  const filteredTemplates = templates.filter((template) =>
    template.name.toLowerCase().includes(searchText.toLowerCase()) ||
    template.role.toLowerCase().includes(searchText.toLowerCase())
  );

  const renderTemplateItem = ({ item }: { item: TemplateItem }) => (
    <TouchableOpacity style={[styles.templateItem, { backgroundColor: item.bgColor }]}>
      <View style={[styles.templatePreview, { backgroundColor: item.color }]}>
        <View style={styles.templateContent}>
          <Text style={styles.templateName}>{item.name}</Text>
          <Text style={styles.templateRole}>{item.role}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton}>
          <Icon name="chevron-left" size={24} color="#333" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Templates</Text>
        <TouchableOpacity style={styles.moreButton}>
          <Icon name="dots-vertical" size={24} color="#333" />
        </TouchableOpacity>
      </View>

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <Icon name="magnify" size={20} color="#999" style={styles.searchIcon} />
        <TextInput
          style={styles.searchInput}
          placeholder="Search Your Templates"
          placeholderTextColor="#999"
          value={searchText}
          onChangeText={setSearchText}
        />
      </View>

      {/* Templates Grid */}
      <FlatList
        data={filteredTemplates}
        renderItem={renderTemplateItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
        contentContainerStyle={styles.gridContainer}
        columnWrapperStyle={styles.gridRow}
        scrollEnabled={true}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
    marginBottom: 16,
  },
  backButton: {
    padding: 8,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000',
    flex: 1,
    textAlign: 'center',
  },
  moreButton: {
    padding: 8,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 16,
    marginBottom: 16,
    paddingHorizontal: 12,
    paddingVertical: 10,
    backgroundColor: '#f3f4f6',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#e5e7eb',
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    fontSize: 14,
    color: '#333',
    fontWeight: '500',
  },
  gridContainer: {
    paddingHorizontal: 16,
    paddingBottom: 100,
  },
  gridRow: {
    justifyContent: 'space-between',
    marginBottom: 16,
    gap: 12,
  },
  templateItem: {
    flex: 1,
    borderRadius: 12,
    overflow: 'hidden',
    minHeight: 200,
  },
  templatePreview: {
    flex: 1,
    padding: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  templateContent: {
    alignItems: 'center',
  },
  templateName: {
    fontSize: 12,
    fontWeight: '700',
    color: '#fff',
    marginBottom: 4,
    textAlign: 'center',
  },
  templateRole: {
    fontSize: 10,
    fontWeight: '500',
    color: 'rgba(255, 255, 255, 0.8)',
    textAlign: 'center',
  },
});

export default TemplateScreen;