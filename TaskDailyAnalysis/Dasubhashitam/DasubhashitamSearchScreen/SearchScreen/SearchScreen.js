import React from 'react';
import {
    View,
    Text,
    TextInput,
    Image,
    StyleSheet,
    SectionList,
    TouchableHighlight,
    TouchableOpacity,
    ScrollView
} from 'react-native';
import { connect } from 'react-redux';
import {getSearchHistory, saveNewSearch, deletehistory, deletehistoryvalue} from "./Realm";

import { SendAuthors, SendVoiceArtists } from "../actions/action";


class SearchScreen extends React.Component{

    static navigationOptions = { title: 'Welcome', header: { visible:false } };

    constructor(props){
        super(props);
        this.state={
            data: [ ],
            onSelectAuthors: false,
            onSelectVoiceArtists: false,
            search: '',
            textinputvalue: '',
            realm: null,
            historyvalues: [],
        };
        this.icons = {
            'up'    : require('../uparrow.png'),
            'down'  : require('../downarrow.png')
        };
        this.icons2 = {
            'up'    : require('../uparrow.png'),
            'down'  : require('../downarrow.png')
        };
    }

    componentDidMount() {
        const historydata = getSearchHistory()
        console.log("data from componentdidmount:",historydata)
        this.setState({
            historyvalues: historydata
        })
    }

    searchList(value){
        this.setState({
            textinputvalue: value
        })
    }

    handleKeyDown(e) {
        if(e.nativeEvent.text=== ''){
            return;
        }
        else {
            const abc = {name: e.nativeEvent.text}
            console.log('handle key event', abc)
            this.pushvalues = this.state.historyvalues;
            this.pushvalues.unshift(abc)
            this.setState({
                realm: this.history,
                historyvalues: this.pushvalues
            })
            saveNewSearch(abc)
        }
    }


    clearValue(text){

    }

    cleartext(){
        this.setState({
            textinputvalue: '',
        })
    }

    research(search){
        console.log("Seach value:", search)
    }

    deletehistoryname(value){
        console.log("delete log:",value)
        //deletehistoryvalue(value)
    }

    deletehistorycontent(){
        deletehistory()
        this.setState({
            historyvalues: []
        })
    }

    onViewAuthors(){
        this.props.SendAuthors();
        if(this.state.onSelectAuthors===false) {
            this.setState({
            onSelectAuthors: true,
        });}
        else {
            this.setState({
            onSelectAuthors: false,
        });}
    }

    onViewVoiceArtists(){
        this.props.SendVoiceArtists();
        if(this.state.onSelectVoiceArtists===false)
        {this.setState({
            onSelectVoiceArtists: true,
        });}
        else
        {this.setState({
            onSelectVoiceArtists: false,
        });}
    }

    render(){
        let icon = this.icons['down'];

        if(this.state.onSelectAuthors){
            icon = this.icons['up'];
        }
        let icon2 = this.icons2['down'];

        if(this.state.onSelectVoiceArtists){
            icon2 = this.icons2['up'];
        }
        console.log("testing historyvalues array",this.state.historyvalues)
        return(
            <View style={{flex: 1, backgroundColor: '#ffffff'}}>
                <View style={styles.topNavBar}>
                    <TouchableHighlight onPress={ this.clearValue.bind(this)} underlayColor='#ffffff' style={styles.leftArrow}>
                        <Image source={require('../leftarrow.png')} style={styles.arrowimage}/>
                    </TouchableHighlight>
                    <TextInput
                        underlineColorAndroid = 'transparent'
                        placeholder = 'Search for ebooks,Audio books,Author...'
                        placeholderTextColor = '#afb6b6'
                        autoCapitalize = 'none'
                        onChangeText  = {(text)=>this.searchList(text)}
                        value={this.state.textinputvalue}
                        onEndEditing={(e)=>this.handleKeyDown(e)}
                        style={styles.textInput}
                    />
                    <View style={{top: 10}}>
                        <TouchableHighlight onPress={ this.cleartext.bind(this) } underlayColor='#ffffff' style={styles.exit}>
                            <Text style={{fontSize: 25, bottom: 5 }}>x</Text>
                        </TouchableHighlight>
                    </View>
                </View>
                <ScrollView contentContainerStyle={{flexGrow:1}} showsVerticalScrollIndicator={false}>
                    <View style={styles.secondView}>
                        <Text style={{left: 12, color: '#000000', fontSize: 12}}> RECENT SEARCHES </Text>
                        <TouchableOpacity onPress={this.deletehistorycontent.bind(this)} underlayColor='#ffffff'>
                        <Text style={{color: 'black', right: 12, fontSize: 12}}>      CLEAR </Text>
                        </TouchableOpacity>
                    </View>
                    <View>
                        {this.state.historyvalues ?  <SectionList
                            showsVerticalScrollIndicator={false}
                            sections={[ {data: this.state.historyvalues} ]}
                            keyExtractor={(item, index) => index}
                            renderItem={({item}) =>
                                (<View style={{marginLeft: 25,paddingBottom: 5, flexDirection:'row',justifyContent:'space-between' }}>
                                    <View style={{flexDirection: 'row',marginTop: 10}}>
                                            <Image source={require('../recentsearch.png')} style={{width: 18, height: 15}}/>
                                        <View>
                                            <Text style={styles.item}> {item.name}  </Text>
                                        </View>
                                    </View>
                                    <View><TouchableHighlight onPress={ this.deletehistoryname(item.name) } underlayColor='#ffffff' style={styles.exit}>
                                        <Text style={{fontSize: 25, bottom: 5 }}>x</Text>
                                    </TouchableHighlight>
                                    </View>
                                </View>)}
                        /> :
                            <View/> }
                    </View>
                    <View style={{borderWidth: 0.5, marginTop: 20, marginRight: 30, marginLeft: 25, borderColor: '#cecece'}}/>
                    <View>
                        <Text style={{left: 22, color: '#000000', fontSize: 12, marginTop: 15}}> TRENDING </Text>
                        <View style={{marginLeft: 25}}>
                            <SectionList
                                horizontal
                                showsHorizontalScrollIndicator={false}
                                sections={[
                                    {data: ['Naham Kartah','Asalem Jarigin', 'Tirumala', 'Guntur', 'A.p','Naham Kartah','Asalem Jarigin', 'Tirumala', 'Guntur', 'A.p']},
                                ]}
                                keyExtractor={(item, index) => index}
                                renderItem={({item}) =>
                                    (<View style={{backgroundColor:'#5360ff',marginRight: 5, marginTop: 20, paddingRight: 15, paddingTop: 7,paddingBottom: 7,borderRadius: 3, flexDirection: 'row'}}>
                                        <Image source={require('../music.jpg')} style={{width: 11, height: 11, top: 2,marginLeft: 8}}/>
                                        <Text style={styles.item2}>{item}</Text>
                                    </View>)}
                            />
                        </View>
                    </View>
                    <View style={{borderWidth: 0.5, marginTop: 30, marginRight: 30, marginLeft: 25, borderColor: '#cecece'}}/>
                    <TouchableOpacity onPress={this.onViewAuthors.bind(this)} underlayColor='#ffffff'>
                        <View style={{marginTop: 25, marginBottom: 25, marginLeft: 25, marginRight: 30, flexDirection: 'row', justifyContent:'space-between'}}>
                            <Text style={{color: '#000000', fontSize: 12}}>AUTHORS (31)</Text>
                            <Image source={icon} style={{width: 25, height: 25, right: 10}}/>
                        </View>
                    </TouchableOpacity>
                    {this.state.onSelectAuthors ?
                        (<View>
                                <SectionList
                                    showsVerticalScrollIndicator={false}
                                    sections={[ {data: this.props.authors} ]}
                                    keyExtractor={(item, index) => index}
                                    renderItem={({item}) =>
                                        (<View style={{marginLeft: 55,paddingBottom: 5, flexDirection:'row',justifyContent:'space-between' }}>
                                            <View style={{flexDirection: 'row',marginTop: 10, marginBottom: 5}}>
                                                <View>
                                                    <Image source={require('../person1.jpg')} style={{width: 50, height: 50, borderRadius: 100, borderWidth: 1}}/>
                                                </View>
                                                <View style={{alignItems:'center', justifyContent:'center', marginLeft: 20}}>
                                                    <Text style={{fontSize: 13, color: 'black'}}>{item}</Text>
                                                </View>
                                            </View>
                                        </View>)}
                                />
                            </View>
                        ) : null}
                    <View style={{borderWidth: 0.5, marginRight: 30, marginLeft: 25, borderColor: '#cecece'}}/>
                    <TouchableOpacity onPress={this.onViewVoiceArtists.bind(this)} underlayColor='#ffffff'  style={{marginTop: 25, marginBottom: 25, marginLeft: 25, marginRight: 30}}>
                        <View style={{ flexDirection: 'row', justifyContent:'space-between' }}>
                            <Text style={{color: '#000000', fontSize: 12}}>VOICE ARTISTS (12)</Text>
                            <Image source={icon2} style={{width: 25, height: 25, right: 10}}/>
                        </View>
                    </TouchableOpacity>
                    {this.state.onSelectVoiceArtists ?
                        (
                            <View>
                                <SectionList
                                    showsVerticalScrollIndicator={false}
                                    sections={[ {data: this.props.voiceArtists} ]}
                                    keyExtractor={(item, index) => index}
                                    renderItem={({item}) =>
                                        (<View style={{marginLeft: 55,paddingBottom: 5, flexDirection:'row',justifyContent:'space-between' }}>
                                            <View style={{flexDirection: 'row',marginTop: 10, marginBottom: 5}}>
                                                <View>
                                                    <Image source={require('../person1.jpg')} style={{width: 50, height: 50, borderRadius: 100, borderWidth: 1}}/>
                                                </View>
                                                <View style={{alignItems:'center', justifyContent:'center', marginLeft: 20}}>
                                                    <Text style={{fontSize: 13, color: 'black'}}>{item}</Text>
                                                </View>
                                            </View>
                                        </View>)}
                                />
                            </View>
                        ) : null}
                </ScrollView>
            </View>

        )
    }
}

const styles = StyleSheet.create({
    topNavBar:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10
    },
    leftArrow:{
        top: 10,
        left: 20
    },
    textInput:{
        width: 300,
        left: 10,
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    arrowimage:{
        width : 30,
        height : 30,
    },
    exit:{
        right: 10,
        width: 30,
        height: 30,
    },
    iconExit:{
        left: 4,
    },
    secondView:{
        margin: 10,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    item: {
        fontSize: 11,
        color: '#333333',
        left: 22
    },
    sectionHeader: {
        marginLeft: 25,
        marginTop: 15,
        fontSize: 12,
        color: 'black',
    },
    item2: {
        fontSize: 11,
        color: '#ffffff',
        marginLeft: 8
    },
})

function mapStateToProps (state) {
    return {
        authors: state.appData.data1,
        voiceArtists: state.appData.data2,
    }
}

function mapDispatchToProps (dispatch) {
    return {
        SendAuthors: () => dispatch(SendAuthors()),
        SendVoiceArtists: () => dispatch(SendVoiceArtists())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SearchScreen)