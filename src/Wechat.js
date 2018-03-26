import React, { Component, PropTypes } from 'react'
import { StyleSheet, View, Image, TouchableOpacity, Text, PixelRatio, Dimensions } from 'react-native'

import ModalBox from 'react-native-modalbox'
//import * as WeChat from 'react-native-wechat'

const Window = {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
}

const shareList = [
    {
        icon: require('./icon-weixin.png'),
        name: '微信好友',
        code: 'wx_friend',
    },
    {
        icon: require('./icon-circle.png'),
        name: '朋友圈',
        code: 'wx_circle',
    }
];

export default class ShareModal extends Component {

    constructor(props) {
        super(props)
      //    WeChat.registerApp('wx9ff8aa789903dff7')
        this.lock = false  // 防止重复提交
        this.shareData = {
            thumbImage: props.thumbImage || 'http://xiangke.da56.com/static/img/xiangke.png',
            title: props.title || '享客 - 享你所想',
            webpageUrl: props.webpageUrl || 'http://xiangke.da56.com/static/',
        }
    }
  componentDidMount() {
      WeChat.registerApp('wx9ff8aa789903dff7');
    }
  render() {
    return <Text>asdasd</Text>
  }
}
const styles = StyleSheet.create({
    content: {
        padding: 10,
        flexDirection: 'row',
        flexWrap: 'wrap',
        paddingLeft: 20,
        paddingRight: 20,
        position: 'relative',
    },
    item: {
        width: (Window.width - 40) / 3,
        height: 100,
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        marginBottom: 10,
    },
    title: {
        fontSize: 14,
        color: '#9B9B9B',
    },
    btn: {
        borderTopColor: '#eee',
        borderTopWidth: 1/PixelRatio.get(),
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    btnText: {
        fontSize: 16,
        color: '#686868',
    },
});
