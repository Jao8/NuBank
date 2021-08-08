import React from "react";
import QRCode from "react-native-qrcode-generator";
import Icon from "react-native-vector-icons/MaterialIcons";

import {
  Container,
  Qcode,
  Nav,
  NavItem,
  NavText,
  SignOutButton,
  SignOutButtonText,
} from "./styles";

export default function Menu() {
  return (
    <Container>
      <Qcode>
        <QRCode
          value={"https://nubank.com.br/en/"}
          size={80}
          fgColor={"#FFF"}
          bgColor={"#8B10AE"}
        />
      </Qcode>
      <Nav>
        <NavItem>
          <Icon name="portrait" size={20} color="#FFF" />
          <NavText>Profille Setting</NavText>
        </NavItem>
        <NavItem>
          <Icon name="credit-card" size={20} color="#FFF" />
          <NavText>Card Setting</NavText>
        </NavItem>
        <NavItem>
          <Icon name="smartphone" size={20} color="#FFF" />
          <NavText>App Settings</NavText>
        </NavItem>
        <NavItem>
          <Icon name="support-agent" size={20} color="#FFF" />
          <NavText>Help!</NavText>
        </NavItem>
      </Nav>
      <SignOutButton onPress={() => {}}>
        <SignOutButtonText>Log Out</SignOutButtonText>
      </SignOutButton>
    </Container>
  );
}
