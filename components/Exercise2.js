import React from 'react';
import { View, Text, SectionList, StyleSheet } from 'react-native';

const Example = () => {
  const contacts = [
    { id: '1', name: 'John Doe', phoneNumber: '123-456-7890' },
    { id: '2', name: 'Jane Smith', phoneNumber: '987-654-3210' },

    { id: '3', name: 'Alice Johnson', phoneNumber: '555-123-4567' },
    // ...more contacts
  ];

  const contactsBySection = contacts.reduce((sections, contact) => {
    const firstLetter = contact.name.charAt(0).toUpperCase();
    if (!sections[firstLetter]) {
      sections[firstLetter] = { title: firstLetter, data: [] };
    }
    sections[firstLetter].data.push(contact);
    return sections;
  }, {});

  const sections = Object.values(contactsBySection);

  const renderContactItem = ({ item }) => (
    <View style={styles.item}>
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.phoneNumber}>{item.phoneNumber}</Text>
    </View>
  );

  const renderSectionHeader = ({ section }) => (
    <Text style={styles.sectionHeader}>{section.title}</Text>
  );

  return (
    <View style={styles.container}>
      <SectionList
        sections={sections}
        renderItem={renderContactItem}
        renderSectionHeader={renderSectionHeader}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  item: {
    paddingVertical: 8,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  phoneNumber: {
    fontSize: 14,
    color: '#666',
  },
  sectionHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    backgroundColor: '#f5f5f5',
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  separator: {
    height: 1,
    backgroundColor: '#ccc',
  },
});

export default Example;
