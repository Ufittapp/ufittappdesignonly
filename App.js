/*import React from 'react'
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  Alert,
  Button,
  TouchableHighlight,
  Navigator
} from 'react-native';
const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

const onButtonPress = () => {
  Alert.alert('Button has been pressed!');
};

const styles = StyleSheet.create({

  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    width: null,
    height: null,

  },

  welcome: {
    top: deviceHeight - 300,
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 20,
    paddingRight: 20,
  },
  logo: {
    height: 170,
    justifyContent: "center",
    resizeMode: "contain",
    width: deviceWidth - 40,


  },

  buttonsContainer: {
    flexDirection: 'row',

  },

  registerButton: {
    width: 150,
    backgroundColor: '#55160d',
    marginRight: 10,
    paddingTop:12,
    paddingBottom: 12,
    borderRadius: 5
  },

  loginButton:  {
    width: 150,
    backgroundColor: '#a15d1d',
    marginLeft: 10,
    paddingTop:12,
    paddingBottom: 12,
    borderRadius: 5
  },
  buttonText: {
    color: '#ffffff',
    textAlign: 'center',
    fontSize: 15
  },
  fbButton: {
    borderRadius: 5,
    backgroundColor: '#242e4d',
    paddingTop:12,
    paddingBottom: 12,
    width: 320,
    marginTop: 10
  }
});


class BackgroundImage extends React.Component{
  render() {
      return (
        <Image source={require('./src/img/splash_bg.png')} style={styles.backgroundImage}>

            {this.props.children}

        </Image>
      )
  }
}

export default class App extends React.Component{
    render(){
        return (


          <BackgroundImage>

            <View style={styles.welcome}>
              <Image source={require('./src/img/logo.png')} style={styles.logo} />
              <View style={styles.buttonsContainer}>
                  <TouchableHighlight onPress={onButtonPress} style={styles.registerButton}>
                    <Text style={styles.buttonText}>Register</Text>
                  </TouchableHighlight>

                  <TouchableHighlight onPress={onButtonPress} style={styles.loginButton}>
                    <Text style={styles.buttonText}>Log In</Text>
                  </TouchableHighlight>
              </View>

                <View>
                <TouchableHighlight onPress={onButtonPress} style={styles.fbButton}>
                  <Text style={styles.buttonText}>Join with Facebook</Text>
                </TouchableHighlight>
                </View>

              <View>

              </View>
            </View>
          </BackgroundImage>

        );
    }
}*/


/* REGISTER SCENE*/

import React from 'react'
import { Container, Content, ListItem, Text, CheckBox, Header, Left, Button, Icon, Body, Title, Right,
InputGroup, Input, Form, Label, Item } from 'native-base';
import {Image, StyleSheet, View, Dimensions} from 'react-native';
import { connectStyle } from 'native-base';

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

 class App extends React.Component{
      render(){

        const styles = this.props.style;

          return (


            <Container>
              <Header style={styles.headerBg}>
                  <Left>
                      <Button transparent>
                          <Icon name='menu' style={styles.whiteText} />
                      </Button>
                  </Left>
                  <Body>
                      <Title style={styles.whiteText}>Create Profile</Title>
                  </Body>
                  <Right>
                      <Button transparent>
                          <Icon name='more' style={styles.whiteText} />
                      </Button>
                  </Right>
              </Header>

              <Image source={require('./src/img/register_bg.png')} style={styles.backgroundImage}>
                  <Content>

                    <Image source={require('./src/img/profile.png')} style={styles.profileImg}/>

                    <Text style={styles.registerTitle}>REGISTER</Text>

                  <Form style={styles.registerForm}>
                          <Item stackedLabel style={styles.itemContainer}>
                              <Label style={styles.registerLabel}>FULL NAME</Label>
                              <Input style={styles.registerInput} />
                          </Item>
                          <Item stackedLabel style={styles.itemContainer}>
                              <Label style={styles.registerLabel}>EMAIL</Label>
                              <Input style={styles.registerInput} />
                          </Item>
                          <View style={styles.registerWrap}>
                              <Item stackedLabel style={styles.itemContainerWrap}>
                                  <Label style={styles.registerLabel}>PHONE</Label>
                                  <Input style={styles.registerInput} />
                              </Item>
                              <Item stackedLabel style={styles.itemContainerWrap}>
                                  <Label style={styles.registerLabel}>DATE OF BIRTH</Label>
                                  <Input style={styles.registerInput} />
                              </Item>
                          </View>
                          <Item stackedLabel style={styles.itemContainer}>
                              <Label style={styles.registerLabel}>USERNAME</Label>
                              <Input style={styles.registerInput} />
                          </Item>
                          <Item stackedLabel>
                              <Label style={styles.registerLabel}>PASSWORD</Label>
                              <Input style={styles.registerInput} />
                          </Item>

                          <Button primary style={styles.buttonRegister}>
                           <Text> Register </Text>
                         </Button>
                      </Form>

                  </Content>
              </Image>

              </Container>


          );
      }
  }



  const styles = {
    registerLabel: {
      fontSize: 12,
      color: '#b5afaf',
    },

    itemContainer: {
      marginBottom: 5
    },

    itemContainerWrap: {
        marginBottom: 5,
        width: 160,
    },

    registerForm: {
      margin: 20,
      marginLeft: 5
    },

    backgroundImage: {
      flex: 1,
      resizeMode: 'cover',
      width: null,
      height: null,

    },

    buttonRegister: {
      alignSelf: 'center',
      marginTop: 15,
      backgroundColor: '#5a1d12',
      opacity: 0.9,

    },

    profileImg: {
      alignSelf: 'center',
      marginTop: 15
    },
    registerTitle: {
      fontSize: 20,
      color: '#d6d7d7',
      textAlign: 'center',
      marginTop: 15,
      fontWeight: '500',
      letterSpacing: 3
    },

    registerWrap: {
      flexDirection: 'row',
      },

      registerInput:{
        color: '#ffffff'
      },

      headerBg: {
        backgroundColor: '#212121',
      },

      whiteText: {
        color: '#ffffff'
      }
  };

  export default connectStyle('yourTheme.App', styles)(App); 



  /* PROFILE SCENE

  import React from 'react'
  import { Container, Content, ListItem, Text, CheckBox, Header, Left, Button, Icon, Body, Title, Right,
  InputGroup, Input, Form, Label, Item, Picker } from 'native-base';
  import {Image, StyleSheet, View, Dimensions} from 'react-native';
  import { connectStyle } from 'native-base';

  const deviceWidth = Dimensions.get('window').width;
  const deviceHeight = Dimensions.get('window').height;

   class App extends React.Component{

     constructor(props) {
        super(props);
        this.state = {
            selectedItem: undefined,
            selected1: 'key1',
            color: '#ffffff',
            results: {
                items: []
            }
        }
    }
    onValueChange (value: string) {
        this.setState({
            selected1 : value
        });
    }
        render(){

          const styles = this.props.style;

            return (


              <Container>
                <Header style={styles.headerBg}>
                    <Left>
                        <Button transparent>
                            <Icon name='menu' style={styles.whiteText} />
                        </Button>
                    </Left>
                    <Body>
                        <Title style={styles.whiteText}>Create Profile</Title>
                    </Body>
                    <Right>
                        <Button transparent>
                            <Icon name='more' style={styles.whiteText} />
                        </Button>
                    </Right>
                </Header>

                <Image source={require('./src/img/create_profile_bg.png')} style={styles.backgroundImage}>
                    <Content>

                      <Text style={styles.registerTitle}>PROFILE</Text>

                      <View style={styles.genreSelector}>
                          <View style={styles.uploadView}>
                            <Image source={require('./src/img/profile.png')} />
                            <Text style={styles.uploadText}>Upload</Text>
                          </View>

                          <View style={styles.userInfo}>
                            <Text style={styles.userFullName}>Simons Aberfa</Text>
                            <Text style={styles.ageText}>Age: 37</Text>
                          </View>
                      </View>

                      <View style={styles.genreSelector}>
                            <Button full info style={styles.maleButton}>
                            <Text style={styles.genreText}> Male </Text>
                            </Button>

                            <Button full info style={styles.femaleButton}>
                            <Text style={styles.genreText}> Female </Text>
                            </Button>
                      </View>

                    <Form style={styles.registerForm}>
                            <Item stackedLabel style={styles.itemContainer}>
                                <Label style={styles.registerLabel}>LIVES</Label>
                                <Input style={styles.registerInput} />
                            </Item>
                            <Item stackedLabel style={styles.itemContainer}>
                                <Label style={styles.registerLabel}>TRAINS</Label>
                                <Input style={styles.registerInput} />
                            </Item>

                            <Item stackedLabel style={styles.itemContainer}>
                                <Label style={styles.registerLabel}>PRIMARY ACTIVITY</Label>
                                <Picker
                                    textStyle={styles.pickerText}
                                    iosHeader="Select one"
                                    mode="dropdown"
                                    selectedValue={this.state.selected1}
                                    onValueChange={this.onValueChange.bind(this)}>
                                    <Item label="Obstacle Course Race" value="key0"  />
                                    <Item label="Marathons" value="key1" />
                                    <Item label="Test" value="key2" />
                                    <Item label="Test2" value="key3" />
                               </Picker>
                            </Item>

                            <Item stackedLabel style={styles.itemContainer}>
                                <Label style={styles.registerLabel}>SECONDARY ACTIVITY</Label>
                                <Picker
                                    textStyle={styles.pickerText}

                                    iosHeader="Select one"
                                    mode="dropdown"
                                    selectedValue={this.state.selected1}
                                    onValueChange={this.onValueChange.bind(this)}>
                                    <Item label="Obstacle Course Race" value="key0" color="white" />
                                    <Item label="Marathons" value="key1" />
                                    <Item label="Test" value="key2" />
                                    <Item label="Test2" value="key3" />
                               </Picker>
                            </Item>


                            <Button primary style={styles.buttonRegister}>
                             <Text> Get Started </Text>
                           </Button>
                        </Form>

                    </Content>
                </Image>

                </Container>


            );
        }
    }



    const styles = {
      registerLabel: {
        fontSize: 12,
        color: '#b5afaf',
      },

      itemContainer: {
        marginBottom: 5
      },

      itemContainerWrap: {
          marginBottom: 5,
          width: 160,
      },

      registerForm: {
        margin: 20,
        marginLeft: 5
      },

      backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
        width: null,
        height: null,

      },

      buttonRegister: {
        alignSelf: 'center',
        marginTop: 15,
        backgroundColor: '#5a1d12',
        opacity: 0.9,

      },

      profileImg: {
        alignSelf: 'center',
        marginTop: 15
      },
      registerTitle: {
        fontSize: 20,
        color: '#d6d7d7',
        textAlign: 'center',
        marginTop: 15,
        fontWeight: '500',
        letterSpacing: 3
      },

      registerWrap: {
        flexDirection: 'row',
        },

        registerInput:{
          color: '#ffffff'
        },

        headerBg: {
          backgroundColor: '#212121',
        },

        whiteText: {
          color: '#ffffff'
        },

        genreSelector: {
          flexDirection: 'row',
          margin: 20,
          marginBottom: 0
        },

        maleButton: {
          borderRadius: 0,
          width: 165,
          backgroundColor: '#1a5262'
        },

        femaleButton: {
          borderRadius: 0,
          width: 165,
          backgroundColor: '#437b8b',
          alignItems: 'center'
        },
        genreText: {
          textAlign: 'center',
          alignSelf: 'center'
        },

        userInfo: {
          flex: 1,
          justifyContent: 'center'
        },

        uploadView: {
          width: deviceWidth / 3,
          justifyContent: 'center',
          alignItems: 'center'
        },

        uploadText: {
          color: '#ffffff',
          marginTop: 5,
          fontSize: 12
        },

        ageText: {
          color: '#ffffff',
          marginTop: 5,
          fontSize: 12
        },

        userFullName: {
          color: '#ffffff',
          fontWeight: 'bold',
          fontSize: 17
        },
        pickerText: {
          color: '#ffffff',
          textAlign: 'left',
        }
    };

    export default connectStyle('yourTheme.App', styles)(App); */


  /* FEED SCENE

    import React from 'react'
    import { Container, Content, ListItem, Text, CheckBox, Header, Left, Button, Icon, Body, Title, Right,
    InputGroup, Input, Form, Label, Item, Picker, Footer, FooterTab, Thumbnail} from 'native-base';
    import {Image, StyleSheet, View, Dimensions} from 'react-native';
    import { connectStyle } from 'native-base';

    const deviceWidth = Dimensions.get('window').width;
    const deviceHeight = Dimensions.get('window').height;



    class App extends React.Component{

         render(){

           const styles = this.props.style;

             return (


               <Container>
                 <Header style={styles.headerBg}>
                     <Left>
                         <Button transparent>
                             <Icon name='menu' style={styles.whiteText} />
                         </Button>
                     </Left>
                     <Body>
                         <Title style={styles.whiteText}>Feed</Title>
                     </Body>
                     <Right>
                         <Button transparent>
                             <Icon name='more' style={styles.whiteText} />
                         </Button>
                     </Right>
                 </Header>

                 <Content>
                    <View style={styles.feedContainer}>
                        <View style={styles.feedHeader}>

                            <View style={styles.userFeed}>

                              <View><Thumbnail size={40} source={require('./src/img/feed_img.png')} /></View>
                                <View style={styles.userName}>
                                    <Text style={styles.boldName}>James Wilson</Text>
                                    <Text style={styles.status}>posted</Text>
                                </View>

                            </View>

                            <View style={styles.timeFeed}>
                              <Icon name='clock' style={styles.clockText} />
                              <Text style={styles.status}>2h</Text>
                            </View>

                        </View>

                        <View style={styles.feedSlide}>
                          <Image source={require('./src/img/feed_img.png')} style={styles.feedImg}/>
                        </View>
                    </View>

                    <View style={styles.footerFeed}>
                        <View style={styles.iconContainer}>
                          <Icon name='heart' style={styles.footerFeedIcons} />
                          <Text style={styles.footerFeedText}>2K</Text>
                        </View>

                        <View style={styles.iconContainer}>
                          <Icon name='chatboxes' style={styles.footerFeedIcons} />
                          <Text style={styles.footerFeedText}>98</Text>
                        </View>

                        <View style={styles.iconContainer}>
                          <Icon name='md-share' style={styles.footerFeedIcons} />
                          <Text style={styles.footerFeedText}>69</Text>
                        </View>

                        <View style={styles.iconContainer}>
                          <Icon name='person' style={styles.footerFeedIcons} />
                          <Text style={styles.footerFeedText}>profile</Text>
                        </View>
                    </View>
                 </Content>



                 <Footer style={styles.footerBg}>
                    <FooterTab>
                        <Button active>
                            <Icon active name="home" style={styles.whiteText} />
                        </Button>
                        <Button>
                            <Icon name="camera" style={styles.whiteText} />
                        </Button>
                        <Button >
                            <Icon  name="navigate" style={styles.whiteText} />
                        </Button>
                        <Button>
                            <Icon name="person" style={styles.whiteText} />
                        </Button>
                    </FooterTab>
                </Footer>



                 </Container>


             );
         }
     }


     const styles = {


         headerBg: {
           backgroundColor: '#212121',
         },

         whiteText: {
           color: '#ffffff'
         },

         footerBg: {
           backgroundColor: '#7a1405'
         },

         feedContainer: {
           marginTop: 15,
           marginBottom: 15
         },

         feedHeader: {
           margin: 15,
           flexDirection: 'row'
         },

         userFeed: {
           flex: 1,
           flexDirection: 'row',
           alignItems: 'flex-start',
         },

         timeFeed: {
           width: 50,
           flexDirection: 'row',
           justifyContent: 'flex-end',
           alignItems: 'flex-start'
         },

         userName: {
           marginLeft: 10
         },

         boldName: {
           color: '#7d7885',
           fontWeight: 'bold',
           fontSize: 15
         },

         status: {
           color: '#beb9c1',
           fontSize: 13,
           fontWeight: 'bold'
         },
         clockText: {
           color: '#beb9c1',
           fontSize: 18,
           fontWeight: 'bold',
           marginRight: 5
         },
         feedImg: {
           height: 220,
           width: deviceWidth
         },

         footerFeedIcons: {
           color: '#7d7885',
           fontWeight: 'bold',
           fontSize: 24
         },

         footerFeedText: {
           color: '#7d7885',
           fontWeight: 'bold',
           fontSize: 14,
           marginLeft: 5,
         },

         footerFeed: {
           margin: 15,
           flexDirection: 'row',
           marginTop: 0
         },

         iconContainer: {
           flexDirection: 'row',
           width: deviceWidth / 4,
           alignItems: 'center',
         }


     };

     export default connectStyle('yourTheme.App', styles)(App); */


  /* PUBLISH SCENE

  import React from 'react'
     import { Container, Content, ListItem, Text, CheckBox, Header, Left, Button, Icon, Body, Title, Right,
     InputGroup, Input, Form, Label, Item, Picker, Footer, FooterTab, Thumbnail} from 'native-base';
     import {Image, StyleSheet, View, Dimensions} from 'react-native';
     import { connectStyle } from 'native-base';

     const deviceWidth = Dimensions.get('window').width;
     const deviceHeight = Dimensions.get('window').height;

     class App extends React.Component{

          render(){

            const styles = this.props.style;

              return (


                <Container>
                  <Header style={styles.headerBg}>
                      <Left>
                          <Button transparent>
                              <Icon name='menu' style={styles.whiteText} />
                          </Button>
                      </Left>
                      <Body>
                          <Title style={styles.whiteText}>Publish</Title>
                      </Body>
                      <Right>
                          <Button transparent>
                              <Icon name='checkmark' style={styles.green} />
                          </Button>
                      </Right>
                  </Header>

                  <Content>

                  <InputGroup>

                      <Input placeholder='Write a comment...' style={styles.textAreaPublish} multiline={true} placeholderTextColor="#898f94"/>
                  </InputGroup>

                     <InputGroup>
                         <Icon name='navigate' style={{color:'#898f94'}}/>
                         <Input placeholder='Take a geolocation' style={styles.publishInput} placeholderTextColor="#898f94" />
                     </InputGroup>

                     <InputGroup>
                         <Icon name='ios-person' style={{color:'#898f94'}}/>
                         <Input placeholder='Check the friends' style={styles.publishInput} placeholderTextColor="#898f94"/>
                     </InputGroup>


                     <View style={styles.logosView}>
                     <Text style={{color: '#898f94', fontSize: 15, margin: 5}}>SHARE</Text>
                          <View style={styles.brandContainer}>
                              <View style={styles.brandContainerItem}>
                                <Icon name='logo-twitter' style={{color:'#dedfe0'}} />
                                <Text style={styles.logoText}>Twitter</Text>
                              </View>
                              <View style={styles.brandContainerItem}>
                                <Icon name='logo-instagram' style={{color:'#dedfe0'}} />
                                <Text style={styles.logoText}>Instagram</Text>
                              </View>
                          </View>
                          <View style={styles.brandContainer}>
                              <View style={styles.brandContainerItem}>
                                <Icon name='logo-facebook' style={{color:'#dedfe0'}} />
                                <Text style={styles.logoText}>Facebook</Text>
                              </View>
                              <View style={styles.brandContainerItem}>
                                <Icon name='logo-tumblr' style={{color:'#dedfe0'}} />
                                <Text style={styles.logoText}>VK</Text>
                              </View>
                          </View>

                          <View style={styles.brandContainer}>
                              <View style={styles.brandContainerItem}>
                                <Icon name='logo-tumblr' style={{color:'#dedfe0'}} />
                                <Text style={styles.logoText}>Tumblr</Text>
                              </View>
                              <View style={styles.brandContainerItem}>
                                <Icon name='logo-tumblr' style={{color:'#dedfe0'}} />
                                <Text style={styles.logoText}>Flickr</Text>
                              </View>
                          </View>
                     </View>

                 </Content>


            </Container>


              );
          }
      }


      const styles = {


          headerBg: {
            backgroundColor: '#212121',
          },

          whiteText: {
            color: '#ffffff'
          },

          green: {
            color: '#78c479'
          },

          textAreaPublish: {
            height: 130,
            fontSize: 14,
            marginTop: 15
          },

          publishInput: {
            fontSize: 14,
          },

          brandContainer: {
            flexDirection: 'row',
            borderTopWidth: .5,
            borderColor: '#dedfe0',
            borderBottomWidth: .5,
            alignItems: 'center',
            justifyContent: 'center',
          },
          brandContainerItem: {
            flexDirection: 'row',
            width: deviceWidth / 2,
            alignItems: 'center',
            justifyContent: 'flex-start',
            paddingLeft: 15,
            paddingTop: 10,
            paddingBottom: 10,
            borderLeftWidth: .5,
              borderColor: '#dedfe0',

          },

          logosView: {
            marginTop: 20
          },

          logoText: {
            color: '#dedfe0',
            marginLeft: 10,
            fontSize: 12
          }


      };

      export default connectStyle('yourTheme.App', styles)(App);*/
