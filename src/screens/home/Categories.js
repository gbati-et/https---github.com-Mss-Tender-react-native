import { Text, View, ScrollView, TouchableOpacity } from "react-native";
import React, { Component, useState } from "react";
import COLORS from "../../constants/colors";
import CheckBox from "react-native-check-box";
import Data from "../../components/Data.json";



// Ui Component for checkboxes and the name of categories
const RenderItem = ({ category, handleChecked }) => {
  const [isChecked, setIsChecked] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpansion = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <View style={{
      flexDirection: "row"}}>
      <TouchableOpacity
        style={{
          flexDirection: "row",
          gap: 5,
          padding: 5,
        }}
        onPress={() => [handleChecked(category.id), setIsChecked(!isChecked)]}
      >
        <CheckBox
          isChecked={isChecked}
          onClick={() => [handleChecked(category.id), setIsChecked(!isChecked)]}
        />
        <Text>{category.key}</Text>
      </TouchableOpacity>

      {category.subcategories && isExpanded && (
        <View style={{ marginLeft: 20 }}>
          {category.subcategories.map((subcategory) => (
            <TouchableOpacity
              key={subcategory.id}
              style={{
                flexDirection: "row",
                gap: 5,
                padding: 5,
              }}
              onPress={() => [handleChecked(subcategory.id)]}
            >
              <CheckBox isChecked={isChecked} 
               onClick={() => [handleChecked(category.id),setIsChecked(!isChecked)]}/>
              <Text >{subcategory.key}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}

      {category.subcategories && (
        <TouchableOpacity onPress={toggleExpansion} style={{
          flexDirection: 'column-reverse',
          gap: 5,
          padding: 5,
        }}>
          <Text style={{ marginLeft: 20 }}>
            {isExpanded ? "Collapse" : "Expand"}
          </Text>
        </TouchableOpacity>
      )}
    </View>
  );
};


const Categories = () => {
  const [selectedCategories, setSelectedCategories] = useState([]);

  const handleChecked = (id) => {
    // Handle selected categories as before
  };

  return (
    <ScrollView
      contentContainerStyle={{
        flexGrow: 1,
        paddingBottom: "20%",
      }}
    >
      {Data.map((category, index) => {
        return <RenderItem {...{ category, handleChecked }} key={index} />;
      })}
    </ScrollView>
  );
};

export default Categories;
