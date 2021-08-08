import { Animated } from "react-native";
import styled from "styled-components/native";

export const Container = styled(Animated.View)`
  height: 100px;
  margin-top: 20px;
`;

export const TabsContainer = styled.ScrollView.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
  contentContainerStyle: {
    paddingRight: 10,
    paddingLeft: 10,
  },
})``;

export const TabsItem = styled.View`
  width: 100px;
  height: 100px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 3px;
  margin-left: 10px;
  padding: 10px;
  /* align-items: center; */
  justify-content: space-between;
`;

export const TabsText = styled.Text`
  font-size: 13px;
  color: #fff;
`;
