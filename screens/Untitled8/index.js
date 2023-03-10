import { faqList } from "./../../modules/faq/store/index.js";
import { updateItem } from "./../../modules/faq/store/index.js";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import React from "react";
import { StyleSheet, ScrollView, SafeAreaView } from "react-native";

const Untitled8 = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(updateItem());
    dispatch(faqList());
    dispatch(faqList());
  }, []);
  return <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={{
      backgroundColor: '#f0f0f1',
      padding: 10,
      position: 'relative',
      flex: 1
    }}></ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    height: '100%'
  }
});
export default Untitled8;