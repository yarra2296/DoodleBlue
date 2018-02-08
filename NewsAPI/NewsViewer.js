import React,{Component} from 'react';
import {View,Text,FlatList,ScrollView, TouchableHighlight} from 'react-native';
import NewsCard from './NewsCard';

export default class NewsViewer extends React.Component{
    static navigationOptions = {
        title:'News Reader           '
    };
    constructor(props){
        super(props);
        this.state={
            isGettingNews: true,
            data:[],
            OpenNews: false,
        }
    };

    componentDidMount(){
        console.log("I am Working on getting News");
        this.GetNews();
    };

    GetNews() {
         /*console.log("calling get news from the API");
         const response = await fetch('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=ef561f7020714b2abd8e39b9407c402d');
         const json = await response.json();
         this.setState({
             isGettingNews: false,
             data: [json.results]
         });
         console.log("I am in the API call and callback is completed")*/
       return fetch('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=ef561f7020714b2abd8e39b9407c402d')
            .then((response) => response.json())
            .then((response) => { console.log(response);
                this.setState({
                    isGettingNews: false,
                    data: response.articles
                });
            })
            .catch((error) => {
                console.log(error);
            });
    };
    render(){
        const { navigate } = this.props.navigation;
        return(
          <ScrollView contentContainerStyle={{flexGrow:1}}>
              {this.state.isGettingNews ?
                  <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                      <Text>Loading...</Text>
                  </View>  :
                  <View>
                      <FlatList
                          data={this.state.data}
                          renderItem={({item}) =>
                              <TouchableHighlight activeOpacity= {0} underlaycolor = '#2980b9' onPress={()=> navigate('NewsScreen',{newstitle: item.title, newsdescription: item.description, newsimmages: item.urlToImage, newsauthor: item.author, newsurl: item.url, newstime: item.publishedAt})}>
                                  <NewsCard description={item.description} urlToImage={item.urlToImage} author={item.author} titlename={item.title} urilink={item.url} time={item.publichedAt}/>
                              </TouchableHighlight>
                          }
                          keyExtractor={(x, i) => i}
                          />
                  </View>
              }
          </ScrollView>
      );
  }
};