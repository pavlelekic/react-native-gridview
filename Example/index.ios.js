// @ flow weak
import React, { Component } from 'react';
import {AppRegistry, View, StyleSheet, ListView, Text} from 'react-native';
const GridView = require('./GridView').default;

const styles = StyleSheet.create({
    listContainer: {flex: 1, backgroundColor: 'powderblue'},
    item: {backgroundColor: 'navajowhite', margin: 3, paddingVertical: 7, borderWidth: 4, borderColor: 'orange', alignItems: 'center', justifyContent: 'center'}
});

const Example = React.createClass({
    getInitialState: function() {
        var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        var data = Array.apply(null, {length: 40}).map(Number.call, Number);

        return {
            dataSource: ds.cloneWithRows(data)
        };
    },

    render: function() {
        return (
            <View style={styles.listContainer}>
                <GridView
                    dataSource={this.state.dataSource}
                    renderRow={this._renderRow}
                    numberOfItemsPerRow={5}
                    removeClippedSubviews={false}
                    initialListSize={1}
                    pageSize={5}
                />
            </View>
        );
    },

    _renderRow: function(rowData) {
        return (
            <View style={styles.item}>
                <Text>{rowData}</Text>
            </View>
        );
    }
});

AppRegistry.registerComponent('Example', () => Example);
