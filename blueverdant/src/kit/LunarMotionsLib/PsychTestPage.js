

import React, {Component} from 'react';
import {StyleSheet,View,TouchableOpacity,Alert,Button, Text,RefreshControl,ScrollView} from 'react-native';
import { ListItem ,Card,Icon} from 'react-native-elements';

import IconConfig from '../../config/IconConfig'


class PsychTestPage extends React.Component {
   constructor(props) {
    super(props);
		this.state = {
		};
  }


  static navigationOptions = ({navigation})=>{
    const { navigate } = navigation;
    return{
      
    title: RouteConfig["PsychTestPage"].name,
    }
  };

  render()
  {
    const { navigate } = this.props.navigation;
    return (
    <View style={styles.container}>
      <ScrollView>
      <Card title={RouteConfig["MBTIModule"].cardname}>
        <ListItem
        leftIcon = {IconConfig.IconMBTI}
        title={
          <View style={styles.subtitleView}>
            <Text style={styles.ratingText}  >{RouteConfig["MBTIModule"].cardname}</Text>
            <Text style={styles.ratingText}> </Text>
        </View>
        }
          subtitle={
            <View style={styles.subtitleView}>

              <Text style={styles.ratingText}  >以荣格的《人格分类》理论为基础,提出了影响大脑作出决定的第四因素：生活方式。综合荣格的人格分类学说形成MBTI。</Text>
          </View>
          }
          onPress={ () => navigate('MBTIModule',{"action":"new"})}
        >
        </ListItem>
        </Card>
        <Card title={RouteConfig["EnneagramModule"].cardname}>
        <ListItem
        leftIcon = {IconConfig.IconEnneagram}
        title={
          <View style={styles.subtitleView}>

          <Text style={styles.ratingText}  >{RouteConfig["EnneagramModule"].cardname}</Text>
          <Text style={styles.ratingText}> </Text>
        </View>
        }
          subtitle={
            <View style={styles.subtitleView}>
            
            <Text style={styles.ratingText}  >九型人格学是一个有2000多年历史的古老学问，它按照人们习惯性的思维模式，情绪反应和行为习惯等性格特质，将人的性格分为九种</Text>
          </View>
          }
          onPress={ () => navigate('EnneagramModule',{"action":"new"})}
        >
        </ListItem>
        </Card>
        <Card title={RouteConfig["HollandModule"].cardname}>
        <ListItem
        leftIcon = {IconConfig.IconEnneagram}
        title={
          <View style={styles.subtitleView}>

          <Text style={styles.ratingText}  >{RouteConfig["HollandModule"].cardname}</Text>
          <Text style={styles.ratingText}> </Text>
        </View>
        }
          subtitle={
            <View style={styles.subtitleView}>
            
            <Text style={styles.ratingText}  >霍兰德的职业兴趣理论主要从兴趣的角度出发来探索职业指导的问题</Text>
          </View>
          }
          onPress={ () => navigate('HollandModule',{"action":"new"})}
        >
        </ListItem>
        </Card>
      </ScrollView>
    </View>
					)
  }

}

var styles = StyleSheet.create ({
  container: {
    flex:1,
  },
  subtitleView:{
    flexDirection:'row',
    paddingLeft:10,
    //paddingTop:5
  },
  ratingText:{
    paddingLeft:10,
    color:'blue'
  },


  list:{
    height:45,
    marginLeft: 10,
    paddingLeft:10,
    borderRadius: 4,
    justifyContent: 'center', //虽然样式中设置了 justifyContent: 'center'，但无效 
  },

    
});
module.exports=PsychTestPage;  