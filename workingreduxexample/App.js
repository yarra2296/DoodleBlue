import React from 'react'
import { TouchableHighlight, View, Text, StyleSheet, ScrollView, FlatList, Image } from 'react-native'

import { connect } from 'react-redux'
import { fetchData } from './actions/action'

let styles

const App = (props) => {
    const {
        container,
        text,
        button,
        buttonText,
        mainContent
    } = styles
    const{
        appData
    } = props

    return (
        <ScrollView contentContainerStyle={{flexGrow:1}}>
        <View style={container}>
          <Text style={text}>Redux Examples</Text>
          <TouchableHighlight style={button} onPress={() => props.fetchData()}>
            <Text style={buttonText}>Load News</Text>
          </TouchableHighlight>
          <View style={mainContent}>
              {
                  props.isFetching && <Text>Loading...</Text>
              }
             <View>
                 {console.log("test in app:",props.articles)}
                 <FlatList
                     data={props.articles}
                     renderItem={({item})=> (
                         <View style={{flex: 1, borderBottomWidth: 1, borderColor: '#d3d3d3', padding: 10, flexDirection: 'row', flexWrap: 'wrap'}}>
                             <Image source={{uri: item.urlToImage}} style={{width: 120, height: 160, bottom: 8, marginRight: 20, marginTop: 10,}}/>
                             <View style={{flex: 1, flexDirection:'column',}}>
                             <Text style={{fontWeight: 'bold', fontSize: 20, color: '#000000',}}>{item.title}</Text>
                             <Text>{item.description}</Text>
                             </View>
                         </View>)}
                 />
             </View>
          </View>
        </View>
        </ScrollView>
    )
}

styles = StyleSheet.create({
    container: {
        marginTop: 100
    },
    text: {
        textAlign: 'center'
    },
    button: {
        height: 60,
        margin: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#0b7eff'
    },
    buttonText: {
        color: 'white'
    },
    mainContent: {
        marginTop: 5,
        marginBottom: 5,

    }
})

function mapStateToProps (state) {
    return {
        articles: state.appData.articles,
        isFetching: state.appData.isFetching
    }
}

function mapDispatchToProps (dispatch) {
    return {
        fetchData: () => dispatch(fetchData())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App)