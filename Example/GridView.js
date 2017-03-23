// @flow weak
import React, {Component} from 'react';
import {View, StyleSheet, ListView, Text} from 'react-native';

const styles = StyleSheet.create({
    contentContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'flex-start',
        marginHorizontal: 0,
        paddingHorizontal: 0
    }
});

export default class GridView extends Component {
    static propTypes = {
        numberOfItemsPerRow: React.PropTypes.number.isRequired,
        renderRow: React.PropTypes.func.isRequired,
        listViewRef: React.PropTypes.func,
        contentContainerStyle: React.PropTypes.any
    };

    state: {
        availableWidth?: number,
        itemWidth?: number,
        outerContainerLeftPadding?: number
    };

    constructor(props) {
        super(props);

        this.state = {};
        (this: any)._onLayout = this._onLayout.bind(this);
        (this: any)._renderRow = this._renderRow.bind(this);
    }

    _onLayout(event) {
        var {width} = event.nativeEvent.layout;

        if (this.state.availableWidth !== width) {
            this.setState({
                availableWidth: width,
                itemWidth: Math.floor(width / this.props.numberOfItemsPerRow),
                /* this is used for centering the listview */
                outerContainerLeftPadding: Math.floor((width % this.props.numberOfItemsPerRow) / 2)
            });
        }
    }

    render() {
        if (__DEV__) {
            if (this.state.availableWidth === 0) {
                console.warn(
                   'Cannot render GridView because available width is 0! ' +
                   'Try setting {flex: 1} to the parent component.'
               );
            }
        }

        return (
            <View
                onLayout={this._onLayout}
                style={this.state.outerContainerLeftPadding > 0 && {
                    paddingLeft: this.state.outerContainerLeftPadding
                }}>
                {this.state.availableWidth > 0 && this._renderListView()}
            </View>
        );
    }

    _renderListView() {
        return (
            <ListView
                ref={this.props.listViewRef}
                {...this.props}
                renderRow={this._renderRow}
                contentContainerStyle={[this.props.contentContainerStyle, styles.contentContainer]}
            />
        );
    }

    _renderRow() {
        return (
            <View style={{width: this.state.itemWidth}}>
                {this.props.renderRow.apply(null, arguments)}
            </View>
        );
    }
}
