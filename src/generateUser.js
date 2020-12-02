import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, Dimensions, TouchableOpacity, Button } from 'react-native';
import { globalStyles } from './styles/globalStyles'
import Man from '../image/Man.svg'
import NextButtom from '../image/NextButtom.svg'

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

export default class GenerateUser extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={{ flexDirection: 'column', flex: 1, height: deviceHeight, }}>
                    <View style={styles.section_Header}>
                        <Image
                            style={styles.image}
                            source={require('../image/header.png')} />
                    </View>

                    <View style={styles.section_body}>
                        <View style={{ flex: 1, flexDirection: 'column', }}>
                            <View style={styles.container_logo}>
                                <Image
                                    style={styles.logo}
                                    source={require('../image/Logo.png')} />
                            </View>
                            <View style={styles.section_content}>
                                <Text style={globalStyles.h1}>What should we call you by?</Text>
                                <Text style={globalStyles.h3}>Or just randomly generate a name</Text>
                            </View>
                            <View style={{ flex: 5, flexDirection: 'column', marginHorizontal: 16, marginRight: 16, top: 40, }}>
                                <TouchableOpacity onPress={() => this.props.navigation.navigate('GenerateUser')} style={styles.buttom}>
                                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', }}>
                                        <View style={{ flex: 1, justifyContent: 'center', marginLeft: 16 }}>
                                            <Text style={globalStyles.h3}>Hangry Man </Text>
                                        </View>
                                        <View style={{ flex: 1, justifyContent: 'center', marginLeft: 15, alignItems: 'flex-end', marginRight: 16 }} >
                                            <Man />
                                        </View>
                                    </View>
                                </TouchableOpacity>
                                <View style={styles.buttom_Go}>
                                    <View style={{ flex: 1,     flexDirection: 'row',}}>
                                        <View style={{ flex: 1, justifyContent: 'center', marginLeft: 12 }}>
                                            <Text style={globalStyles.h4}>Let's eat!</Text>
                                        </View>
                                        <View style={{ flex: 1, alignItems:'flex-end',justifyContent:'center', marginRight:12 }}>
                                        <NextButtom />
                                            
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>

                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: deviceHeight,

    },
    section_Header: {
        position: 'absolute',
        flex: 1,
        flexDirection: 'column',
        width: '100%',
        height: '50%',
    },
    image: {
        flex: 1,
        width: '100%',
        height: deviceHeight,

    },
    image_th: {
        height: 24,
        width: 32,
    },
    section_body: {
        position: 'absolute',
        top: 300,
        borderTopStartRadius: 30,
        borderTopEndRadius: 20,
        width: '100%',
        height: deviceHeight,
        backgroundColor: 'white',
        flexDirection: 'column',
        flex: 1,
    },

    container_logo: {
        position: 'absolute',
        top: -50,
        flex: 1, flexDirection: 'column',
        shadowOpacity: 130,
        shadowColor: 'black'
    },
    logo: {
        width: 86, position: 'relative',
        height: 86,
        borderRadius: 86 / 2,
        left: 19,
    },
    section_content: {
        flexDirection: 'column',
        flex: 1,
        top: 50,
        left: 19,
        marginHorizontal: 16,
        marginRight: 16,

    },
    section_buttom: {
        flex: 3,
        top: 50,
        flexDirection: 'column',
        borderWidth: 1,

    },
    buttom: {
        height: 62, backgroundColor: '#F9FBFF', shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,

        elevation: 6,
    },
    buttom_en: {
        height: 62, backgroundColor: '#F9FBFF', shadowColor: "#000", marginTop: 15,
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,

        elevation: 6,
    },
    buttom_Go: {
        height: 62, width: 162, backgroundColor: '#A19D39', shadowColor: "#000", marginTop: 15, alignSelf: 'flex-end', borderRadius: 5,
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,

        elevation: 6,
    },

});