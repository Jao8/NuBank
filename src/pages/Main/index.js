import React from "react";
import Icon from "react-native-vector-icons/MaterialIcons";

import { View, Text } from "react-native";

import Header from "~/Components/Header/index.js";
import Tabs from "~/Components/Tabs";
import Menu from "~/Components/Menu";

import {
  Container,
  Content,
  Card,
  CardHeader,
  CardContent,
  CardFooter,
  Title,
  Description,
  Annotation,
} from "./style";

export default function Main() {
  return (
    <Container>
      <Header />
      <Content>
        <Menu />
        <Card>
          <CardHeader>
            <Icon name="attach-money" size={28} color="#666" />
            <Icon name="visibility-off" size={28} color="#666" />
          </CardHeader>
          <CardContent>
            <Title>Your Balance</Title>
            <Description>$ 852,452.87</Description>
          </CardContent>
          <CardFooter>
            <Icon name="add-circle" size={28} color="#16ad34" />
            <Annotation>$250.43 received from Luis Gustavo Teixera</Annotation>
          </CardFooter>
        </Card>
      </Content>
      <Tabs />
    </Container>
  );
}
