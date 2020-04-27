

import React, { Component } from 'react';
import {
    StyleSheet,
    ScrollView,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import {DragSortableView} from "react-native-drag-sort"
import { Grid, WingBlank, WhiteSpace, SegmentedControl, Toast } from '@ant-design/react-native';
import RouteConfig from '../config/RouteConfig';
import IconConfig from '../config/IconConfig';
import ScreenConfig from '../config/ScreenConfig';
import StyleConfig from '../config/StyleConfig';
import WechatShare from '../config/WechatShare'
import shareimage from '../config/shareimage'
import { HistoryArrayGroup } from '../config/StorageModule'
import KitConfig from '../config/KitConfig'
const deviceWidth = ScreenConfig.__screenW()
const childrenWidth = deviceWidth / 3;
const childrenHeight = deviceWidth / 8;
const itemWidth = 90
const itemHeight = 36
const sortWidth = deviceWidth

const fixedItems = [0];
let kitConfigPageController = null
class kitConfigPage extends React.Component {
    constructor(props) {
        super()
        

        this.state = {
            selectmode:[],
            selectmodetitle: "",
            scrollEnabled: true,
            isEditState: true,
            selectedItems: [],
            unselectedItems: []
        }
        kitConfigPageController = this
    }
    async recover() {
        var itemsrandom = KitConfig.getitemsrandom()
        var itemlist = itemsrandom['全部']
        var arr = new Array();
        itemlist.forEach(element => {
            //var obj ={}
            //obj.title = element.title;
            //obj.isSelect = element.isSelect
            arr.push(element);
        })
        await HistoryArrayGroup.save("kitConfigselectmode", "职业性格")
        console.log("kitConfigPage", typeof (arr), arr)
        var selectmode = KitConfig.getselectmode()
        this.setState({
            selectmode: selectmode,
            selectedItems: arr.filter((item, index) => item.isSelect),
            unselectedItems: arr.filter((item, index) => !item.isSelect), selectmode: selectmode, selectmodetitle: ""
        })
    }

    componentDidMount() {
        this.recover()
        this.refreshlist()
    }
    static navigationOptions = ({ navigation }) => {
        const { navigate } = navigation;
        return {
            title: RouteConfig["kitConfigPage"].name,
        }
    }
    refreshlist() {
        HistoryArrayGroup.GetKitConfigHistory().then(ids => {

            if (ids.length != 0) {
                console.log("refreshlist", ids)
                let selectedItems = ids.filter((ids, index) => ids.isSelect)
                let unselectedItems = ids.filter((ids, index) => !ids.isSelect)
                this.setState({ selectedItems: selectedItems, unselectedItems: unselectedItems })
            }
        })
    }

    render() {
        if(this.state.selectmode ==[])
        {return(<View></View>)}
        if (false == this.state.isEditState) {
            this.SaveKitConfigs()
        }
        return (
            <View style={StyleConfig.container}>
                <ScrollView
                    scrollEnabled={this.state.scrollEnabled}
                    style={styles.container}>
                    <View style={styles.hurdle}>
                        <Text style={StyleConfig.hurdle_title}>{'测评模式'}</Text>


                        <TouchableOpacity style={styles.hurdle_edit} onPress={this.onEditClick}>
                            <Text style={StyleConfig.hurdle_edit_text}>{this.state.isEditState ? '保存' : '编辑'}</Text>
                        </TouchableOpacity>
                    </View>
                    <DragSortableView
                        dataSource={this.state.selectedItems}
                        parentWidth={sortWidth}
                        childrenWidth={childrenWidth}
                        childrenHeight={childrenHeight}
                        marginChildrenTop={10}
                        fixedItems={fixedItems}
                        onDragStart={this.onSelectedDragStart}
                        onDragEnd={this.onSelectedDragEnd}
                        onDataChange={(data) => { this.setState({ selectedItems: data }) }}
                        keyExtractor={(item, index) => item.title} // FlatList作用一样，优化
                        onClickItem={this.onSelectedClickItem}
                        renderItem={this.renderSelectedItemView} />
                    <View style={[styles.hurdle, { justifyContent: 'flex-start', marginTop: 40 }]}>
                        <Text style={StyleConfig.hurdle_title}>{'测评列表'}</Text>
                    </View>
                    <DragSortableView
                        dataSource={this.state.unselectedItems}
                        parentWidth={sortWidth}
                        sortable={false}
                        childrenWidth={childrenWidth}
                        childrenHeight={childrenHeight}
                        marginChildrenTop={10}
                        onDataChange={(data) => { this.setState({ unselectedItems: data }) }}
                        keyExtractor={(item, index) => item.title} // FlatList作用一样，优化
                        onClickItem={this.onUnSelectedClickItem}
                        renderItem={this.renderUnSelectedItemView} />
                    <View style={styles.hurdle}>
                        <Text style={StyleConfig.hurdle_title}>{'推荐模式'}</Text>
                        <View style={styles.hurdle_show}>
                            <Text style={StyleConfig.hurdle_show_text}>{this.state.selectmodetitle}</Text>
                        </View>
                    </View>
                    <DragSortableView
                        dataSource={this.state.selectmode}
                        parentWidth={sortWidth}
                        sortable={false}
                        childrenWidth={childrenWidth}
                        childrenHeight={childrenHeight}
                        marginChildrenTop={10}
                        //onDataChange = {(data)=>{this.setState({unselectedItems: data})}}
                        keyExtractor={(item, index) => item.title} // FlatList作用一样，优化
                        onClickItem={this.onSelectedModeClickItem}
                        renderItem={this.renderSelectedModeView} />


                </ScrollView>
                <TabNavigator tabBarStyle={{ height: ScreenConfig.getTabBarHeight(), backgroundColor: '#ffffff', }}>
                    { function(){if(Platform.OS === 'android'){
                        return(<TabNavigator.Item
                        title={RouteConfig["service"].name}
                        renderIcon={() => RouteConfig["service"].icon}
                        //renderSelectedIcon={() => IconConfig.IconDvinationSel}
                        onPress={() => this.onBussion("service", navigate)}
                        titleStyle={StyleConfig.menufont}>
                        </TabNavigator.Item>)}}()
                    }
                    <TabNavigator.Item
                        title={RouteConfig["ReCover"].name}
                        renderIcon={() => RouteConfig["ReCover"].icon}
                        //renderSelectedIcon={() => IconConfig.IconDvinationSel}
                        onPress={() => this.recover()}
                        titleStyle={StyleConfig.menufont}>
                    </TabNavigator.Item>
                </TabNavigator >
            </View>
        )
    }

    renderSelectedItemView = (item, index) => {
        const isFixed = fixedItems.includes(index)
        const clearIcon = this.state.isEditState && !isFixed ? IconConfig.MenuIosClose : undefined
        return (
            <View style={styles.selected_container}>
                <View style={styles.selected_item}>

                    <Text style={StyleConfig.selected_item_text}>{clearIcon}{item.title}</Text>
                </View>

            </View>
        )
    }

    renderUnSelectedItemView = (item, index) => {
        const clearIcon = this.state.isEditState ? IconConfig.MenuIosAdd : undefined
        return (
            <View style={styles.selected_container}>
                <View style={styles.unselected_item}>

                    <Text style={StyleConfig.selected_item_text}> {clearIcon}{item.title}</Text>
                </View>
            </View>
        )
    }

    renderSelectedModeView = (item, index) => {
        const cur = this.state.selectmode[index].isSelect
        const IconUp = this.state.isEditState && cur ? IconConfig.IconUp : undefined
        return (
            <View style={styles.selected_container}>
                <View style={styles.unselected_item}>

                    <Text style={StyleConfig.selected_item_text}> {IconUp}{item.title}</Text>
                </View>
            </View>
        )
    }

    onSelectedDragEnd = () => this.setState({ scrollEnabled: true })

    onSelectedDragStart = () => {
        if (!this.state.isEditState) {
            this.setState({
                isEditState: true,
                scrollEnabled: false
            })
        } else {
            this.setState({
                scrollEnabled: false
            })
        }
    }

    onSelectedClickItem = async (data, item, index) => {
        // delete, data 是最新的数据
        const isFixed = fixedItems.includes(index)
        if (this.state.isEditState && !isFixed) {
            //await HistoryArrayGroup.save("kitConfigselectmode","职业性格")
            this.setState({
                selectedItems: [...data].filter((wItem, windex) => windex !== index),
                unselectedItems: [item, ...this.state.unselectedItems]
            })
        }
    }

    onSelectedModeClickItem = async (data, item, index) => {
        // delete, data 是最新的数据
        var selectmode = KitConfig.getselectmode()
        var itemsrandom = KitConfig.getitemsrandom()
        console.log("kitConfigselectmode", selectmode)
        var curselectmode = JSON.parse(JSON.stringify(selectmode))
        curselectmode[index].isSelect = false
        await HistoryArrayGroup.save("kitConfigselectmode", curselectmode[index].title)

        let curitmes = JSON.parse(JSON.stringify(itemsrandom[item.title]))
        this.setState({
            selectmode: curselectmode, selectmodetitle: curselectmode[index].title, selectedItems: curitmes.filter((item, index) => item.isSelect),
            unselectedItems: curitmes.filter((item, index) => !item.isSelect)
        })
    }

    onUnSelectedClickItem = async (data, item, index) => {
        if (this.state.isEditState) {
            //await HistoryArrayGroup.save("kitConfigselectmode","职业性格")
            this.setState({
                selectedItems: [...this.state.selectedItems, item],
                unselectedItems: [...data].filter((wItem, windex) => windex !== index)
            })
        }
    }

    async SaveKitConfigs() {
        const { navigate } = this.props.navigation;
        let items = new Array()
        this.state.selectedItems.forEach(element => {
            element.isSelect = true
            items.push(element)
        });
        this.state.unselectedItems.forEach(element => {
            element.isSelect = false
            items.push(element)
        });

        //console.log("kitConfig",items)
        HistoryArrayGroup.removeall("kitConfig").then(R => {
            HistoryArrayGroup.saveid("kitConfig", 0, items).then(T1 => {
                navigate(RouteConfig['kitPage'].route, { text: "refresh" })
                Toast.success("保存成功")
            })
        })
    }

    onEditClick = async () => {
        this.setState({ isEditState: !this.state.isEditState })
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ffffff',
    },
    hurdle: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 20
    },

    hurdle_edit: {
        height: 24,
        paddingLeft: 10,
        paddingRight: 10,
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: '#ff6548',
        marginRight: 15,
        borderRadius: 12
    },
    hurdle_show: {
        height: 24,
        paddingLeft: 10,
        paddingRight: 10,
        justifyContent: 'center',
        borderWidth: 0,
        //borderColor: 'green',
        marginRight: 15,
        borderRadius: 12
    },


    selected_container: {
        width: childrenWidth,
        height: childrenHeight,
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },
    selected_item: {
        width: 90,
        height: 36,
        backgroundColor: '#f0f0f0',
        borderRadius: 2,
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        textAlignVertical: 'center',
    },

    selected_item_icon: {
        width: 16,
        height: 16,
        resizeMode: 'contain',
        position: 'absolute',
        top: (childrenHeight - itemHeight - 16) / 2 + 16 * 0.25, //下移点
        left: (childrenWidth + itemWidth - 16) / 2 - 16 * 0.25 //右移点，也可以换个布局
    },
    unselected_item: {
        width: 90,
        height: 36,
        backgroundColor: '#f0f0f0',
        borderRadius: 2,
        flexDirection: 'row',
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        textAlignVertical: 'center',
    },
    unselected_item_icon: {
        width: 14,
        height: 14,
        resizeMode: 'contain',
        marginLeft: 6,
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        textAlignVertical: 'center',
    }
})
module.exports = kitConfigPage;  