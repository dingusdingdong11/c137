import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    Button,
    Alert,
    FlatList,
    SafeAreaView
} from 'react-native'
import {Listitem} from 'react-native-elements';
import axios from 'axios';

export default class HomeScreen extends Component{

    constructor(props){
        super(props);
        this.state={
            listData:[],
            url: ""
        }
    }

    componentDidMount(){
        this.getPlanets();
    }

    getPlanets=()=>{
        const url = this.state;
        axios.get(url)
        .then(response => {
            return this.setState({
                listData : response.data.data
            })
        })
        .catch(error =>{
            alert(error.message);
        })
    }
    renderItem = ({ item, index }) => (
        <ListItem
          key={index}
          title={`Planet : ${item.name}`}
          subtitle={`Distance from earth : ${item.distance_from_earth}`}
          titleStyle={styles.title}
          containerStyle={styles.listContainer}
          bottomDivider
          chevron
          onPress={() =>
            this.props.navigation.navigate("Details", { planet_name: item.name })
          }
        />
      );
    
      keyExtractor = (item, index) => index.toString();
    render(){
        return(
            <View>
                <Text>
                    Home Screen
                </Text>
            </View>
        )
    }
}