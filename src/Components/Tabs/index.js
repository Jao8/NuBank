import React from "react";
import Icon from "react-native-vector-icons/MaterialIcons";

import { Container, TabsContainer, TabsItem, TabsText } from "./styles";

export default function Tabs() {
  return (
    <Container>
      <TabsContainer>
        <TabsItem>
          <Icon name="attach-money" size={24} color="#FFF" />
          <TabsText>Payments</TabsText>
        </TabsItem>
        <TabsItem>
          <Icon name="person-add" size={24} color="#FFF" />
          <TabsText>Referral Program</TabsText>
        </TabsItem>
        <TabsItem>
          <Icon name="chat-bubble-outline" size={24} color="#FFF" />
          <TabsText>Charge</TabsText>
        </TabsItem>
        <TabsItem>
          <Icon name="play-for-work" size={24} color="#FFF" />
          <TabsText>Deposit</TabsText>
        </TabsItem>
        <TabsItem>
          <Icon name="next-week" size={24} color="#FFF" />
          <TabsText>Transfer</TabsText>
        </TabsItem>
        <TabsItem>
          <Icon name="screen-lock-portrait" size={24} color="#FFF" />
          <TabsText>Block Cellphone</TabsText>
        </TabsItem>
        <TabsItem>
          <Icon name="multiple-stop" size={24} color="#FFF" />
          <TabsText>Credit Options</TabsText>
        </TabsItem>
      </TabsContainer>
    </Container>
  );
}
