import React, {useRef, useEffect} from 'react'
import {Animated, View} from 'react-native'

export default function ViewSlide (props) {
    let startValue = 0
    let endValue = 0

    switch (props.int){
      case 0: //-- translateX from Top
      case 1: //-- translateY from left
      case 4: //-- translate X & Y from top left
              startValue = -200; endValue = 0; break;
      case 2: //-- translateX from bottom
      case 3: //-- translateY from right 
      case 5: //-- translate X & Y from bottom right
              startValue = 200; endValue = 0; break;
    }
    const slideValue = useRef(new Animated.Value(startValue)).current   

    useEffect(() => {      
      Animated.timing(
        slideValue,
        {
          toValue: endValue,
          duration: 600,
          useNativeDriver: true,
        }
      ).start();
    }, [slideValue])
  
    return (
      <View>
        {(() => {
          switch (props.int) {
            case 0: 
            case 2: return (<Animated.View style={[props.style, {transform:[{translateX: slideValue}]}]}>{props.children}</Animated.View>)
            
            case 1: 
            case 3: return (<Animated.View style={[props.style, {transform:[{translateY: slideValue}]}]}>{props.children}</Animated.View>)
            
            case 4: 
            case 5: return (<Animated.View style={[props.style, {transform:[{translateX: slideValue},{translateY: slideValue}]}]}>{props.children}</Animated.View>)
          }
        })()}
      </View>
    );
  }

