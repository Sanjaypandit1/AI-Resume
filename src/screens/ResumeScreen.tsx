import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const ResumeScreen: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity style={styles.backButton}>
            <Icon name="chevron-left" size={24} color="#333" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Analysis Details</Text>
          <TouchableOpacity style={styles.moreButton}>
            <Icon name="dots-vertical" size={24} color="#333" />
          </TouchableOpacity>
        </View>

        {/* Scanning Complete Badge */}
        <View style={styles.statusBadge}>
          <Icon name="check-circle" size={24} color="#10B981" />
          <Text style={styles.statusText}>Scanning Complete</Text>
        </View>

        {/* Resume Preview Card */}
        <View style={styles.previewCard}>
          <View style={styles.resumePreview}>
            {/* Left Column - Dark */}
            <View style={styles.resumeLeft}>
              <View style={styles.profileSection}>
                <View style={styles.profileAvatar}>
                  <Text style={styles.profileInitial}>N</Text>
                </View>
                <Text style={styles.profileName}>Nina Lane</Text>
                <Text style={styles.profileRole}>Designer</Text>
              </View>

              <View style={styles.resumeSection}>
                <Text style={styles.resumeSectionTitle}>Contact</Text>
                <Text style={styles.resumeText}>email@example.com</Text>
                <Text style={styles.resumeText}>+1 (555) 000-0000</Text>
              </View>

              <View style={styles.resumeSection}>
                <Text style={styles.resumeSectionTitle}>Skills</Text>
                <Text style={styles.resumeText}>UI Design</Text>
                <Text style={styles.resumeText}>Figma</Text>
                <Text style={styles.resumeText}>Prototyping</Text>
              </View>
            </View>

            {/* Right Column - Light */}
            <View style={styles.resumeRight}>
              <View style={styles.resumeSection}>
                <Text style={styles.resumeSectionTitle}>Experience</Text>
                <Text style={styles.resumeText}>Senior Designer</Text>
                <Text style={styles.resumeSubText}>2020 - Present</Text>
                <Text style={styles.resumeText}>Product Designer</Text>
                <Text style={styles.resumeSubText}>2018 - 2020</Text>
              </View>

              <View style={styles.resumeSection}>
                <Text style={styles.resumeSectionTitle}>Education</Text>
                <Text style={styles.resumeText}>B.S. Design</Text>
                <Text style={styles.resumeSubText}>University Name</Text>
              </View>
            </View>
          </View>
        </View>

        {/* Score Section */}
        <View style={styles.scoreSection}>
          <Text style={styles.scoreValue}>85/100</Text>
          <Text style={styles.scoreLabel}>AI Resume Score</Text>
        </View>

        {/* See Required Skills Button */}
        <TouchableOpacity style={styles.requiredSkillsButton}>
          <Text style={styles.requiredSkillsText}>See Required Skills</Text>
          <Icon
            name="chevron-right"
            size={20}
            color="#FBBF24"
            style={{ marginLeft: 8 }}
          />
        </TouchableOpacity>

        {/* Optimize Button */}
        <TouchableOpacity style={styles.optimizeButton}>
          <Text style={styles.optimizeButtonText}>Optimize Now</Text>
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
  statusBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#D1F8E8',
    marginHorizontal: 16,
    borderRadius: 8,
    marginBottom: 20,
  },
  statusText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#10B981',
    marginLeft: 8,
  },
  previewCard: {
    marginHorizontal: 16,
    marginBottom: 24,
    borderRadius: 12,
    backgroundColor: '#f0f4f8',
    overflow: 'hidden',
  },
  resumePreview: {
    flexDirection: 'row',
    minHeight: 320,
  },
  resumeLeft: {
    flex: 1,
    backgroundColor: '#1f2937',
    padding: 16,
    justifyContent: 'flex-start',
  },
  resumeRight: {
    flex: 1,
    backgroundColor: '#f9fafb',
    padding: 16,
    justifyContent: 'flex-start',
  },
  profileSection: {
    alignItems: 'center',
    marginBottom: 20,
  },
  profileAvatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#FBBF24',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
  profileInitial: {
    fontSize: 24,
    fontWeight: '700',
    color: '#000',
  },
  profileName: {
    fontSize: 14,
    fontWeight: '700',
    color: '#fff',
    textAlign: 'center',
  },
  profileRole: {
    fontSize: 12,
    color: '#d1d5db',
    marginTop: 4,
  },
  resumeSection: {
    marginBottom: 16,
  },
  resumeSectionTitle: {
    fontSize: 12,
    fontWeight: '700',
    color: '#FBBF24',
    marginBottom: 8,
    textTransform: 'uppercase',
  },
  resumeText: {
    fontSize: 11,
    fontWeight: '600',
    color: '#fff',
    marginBottom: 4,
  },
  resumeSubText: {
    fontSize: 10,
    color: '#d1d5db',
    marginBottom: 6,
  },
  scoreSection: {
    alignItems: 'center',
    marginBottom: 24,
  },
  scoreValue: {
    fontSize: 48,
    fontWeight: '700',
    color: '#000',
  },
  scoreLabel: {
    fontSize: 14,
    fontWeight: '600',
    color: '#666',
    marginTop: 8,
  },
  requiredSkillsButton: {
    flexDirection: 'row',
    marginHorizontal: 16,
    paddingVertical: 14,
    paddingHorizontal: 16,
    backgroundColor: '#1f2937',
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
  },
  requiredSkillsText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FBBF24',
  },
  optimizeButton: {
    marginHorizontal: 16,
    paddingVertical: 16,
    backgroundColor: '#FBBF24',
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },
  optimizeButtonText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#000',
  },
});

export default ResumeScreen;