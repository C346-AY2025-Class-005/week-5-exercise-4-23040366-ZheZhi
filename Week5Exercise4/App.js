import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SectionList, TouchableOpacity, Image, Alert } from 'react-native';
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";

const datasource = [
  {
    title: "'Shonen'",
    bgcolor: '#ffe08a',
    icon: 'fire-flame-curved',
    data: [
      {
        key: 'Naruto',
        image: { uri: 'https://m.media-amazon.com/images/M/MV5BZTNjOWI0ZTAtOGY1OS00ZGU0LWEyOWYtMjhkYjdlYmVjMDk2XkEyXkFqcGc@._V1_.jpg' },
      },
      {
        key: 'Attack on Titan',
        image: { uri: 'https://m.media-amazon.com/images/M/MV5BZjliODY5MzQtMmViZC00MTZmLWFhMWMtMjMwM2I3OGY1MTRiXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg' },
      },
    ],
  },
  {
    title: "'Slice of Life'",
    bgcolor: '#cce6ff',
    icon: 'heart',
    data: [
      {
        key: 'Your Name',
        image: { uri: 'https://m.media-amazon.com/images/M/MV5BOTkzMGIyYzAtMDQyYi00OTkxLWI2ZGMtODNmYjMyMWM3ZGY1XkEyXkFqcGc@._V1_.jpg' },
      },
      {
        key: 'Violet Evergarden',
        image: { uri: 'https://m.media-amazon.com/images/M/MV5BMWUwNDFiNjQtYjQ0MC00MTcxLWE0MGQtNTdkYTlhZGU2NDFmXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg' },
      },
    ],
  },
];

const renderItem = ({ item, section }) => {
  let img = null;
  if (item.image) {
    img = (
      <Image style={styles.poster} source={item.image} />
    );
  }

  return (
    <TouchableOpacity
      style={styles.itemTouchable}
      onPress={() => Alert.alert(item.key, section.title + ' anime selected')}
    >
      <View style={[styles.row, { backgroundColor: section.bgcolor }]}>
        <Text style={styles.animeTitle}>{item.key}</Text>
        {img}
      </View>
    </TouchableOpacity>
  );
};

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.appTitle}>Anime List</Text>

      <SectionList
        style={{ flex: 1 }}
        contentContainerStyle={styles.listContent}
        sections={datasource}
        renderItem={renderItem}
        SectionSeparatorComponent={() => <View style={{ height: 20 }} />}
      />

      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'whitesmoke',
    paddingTop: 40,
  },
  appTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  listContent: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    paddingVertical: 6,
    width: '100%',
  },
  headerIcon: {
    marginRight: 8,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  itemTouchable: {
    borderWidth: 1,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  animeTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    maxWidth: '40%',
  },
  poster: {
    width: 120,
    height: 180,
    resizeMode: 'contain',
  },
});

export default App;
