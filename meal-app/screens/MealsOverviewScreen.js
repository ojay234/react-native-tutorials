import { FlatList, StyleSheet, Text, View } from "react-native";
import { MEALS } from "../data/dummyData";
import MealItem from "../components/MealItem";

function MealsOverviewScreen({ route }) {
  const catId = route.params.categoryId;

  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(catId) >= 0;
  });

  function renderMealItem(itemData) {
    const item = itemData.item

    const MealItemProps = {
       title: item.title,
       imageUrl: item.imageUrl,
       affordability: item.affordability,
       complexity: item.complexity,
       duration: item.duration
    }
    
    return <MealItem {...MealItemProps}/>
  }
  return (
    <View style={styles.container}>
      <FlatList
        data={displayedMeals}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
}

export default MealsOverviewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
