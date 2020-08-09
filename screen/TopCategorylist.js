import React from "react";

import Category from "./category";

const TopCategorylist = (props) => {
  console.log("props hai", props);
  return <Category navigation={props.navigation} />;
};

//const styles = StyleSheet.create({});

export default TopCategorylist;
