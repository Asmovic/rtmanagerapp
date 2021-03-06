import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import { Text, View, TouchableWithoutFeedback } from 'react-native';
import { CardSection } from './common';


class ListItem extends Component {

    onRowPress() {
        Actions.employeeEdit({ employee: this.props.employee });
    }
    render() {
        const { name } = this.props.employee;
        return (
            <TouchableWithoutFeedback onPress={this.onRowPress.bind(this)}>
                <View>
                    <CardSection>
                        <Text style={styles.titleStyle}>
                            {name}
                        </Text>
                    </CardSection>
                </View>
            </TouchableWithoutFeedback>
        );
    }
}
export default ListItem;

const styles = {
    titleStyle: {

        fontSize: 18,
        paddingLeft: 15
    }
}
