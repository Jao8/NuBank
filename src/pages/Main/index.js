import React from "react";
import Icon from "react-native-vector-icons/MaterialIcons";

import { Animated } from "react-native";
import { PanGestureHandler, State } from "react-native-gesture-handler";

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
  let offset = 0;

  const translateY = new Animated.Value(0);
  const animatedEvent = new Animated.event(
    [
      {
        nativeEvent: {
          translationY: translateY,
        },
      },
    ],
    { useNativeDriver: true }
  );

  function onHandlerStateChange(event) {
    if (event.nativeEvent.oldState == State.ACTIVE) {
      let show = false;
      const { translationY } = event.nativeEvent;
      offset += translationY;

      if (translationY >= 100) {
        show = true;
      } else {
        translateY.setValue(offset);
        translateY.setOffset(0);
        offset = 0;
      }

      Animated.timing(translateY, {
        toValue: show ? 380 : 0,
        duration: 200,
        useNativeDriver: true,
      }).start(() => {
        offset = show ? 380 : 0;
        translateY.setOffset(offset);
        translateY.setValue(0);
      });
    }
  }

  return (
    <Container>
      <Header />
      <Content>
        <Menu translateY={translateY} />
        <PanGestureHandler
          onGestureEvent={animatedEvent}
          onHandlerStateChange={onHandlerStateChange}
        >
          <Card
            style={{
              transform: [
                {
                  translateY: translateY.interpolate({
                    inputRange: [-350, 0, 380],
                    outputRange: [-50, 0, 380],
                    extrapolate: "clamp",
                  }),
                },
              ],
            }}
          >
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
              <Annotation>
                $250.43 received from João Victor Oliveira
              </Annotation>
            </CardFooter>
          </Card>
        </PanGestureHandler>
      </Content>
      <Tabs translateY={translateY} />
    </Container>
  );
}
