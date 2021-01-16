import React, { Component } from 'react';
import TableRow from './TableRow';

//table as a whole with both row and col components
class Table extends Component {
	render() {
		return (
			<TableRow
				amountRow={this.props.amountRow}
				amountCol={this.props.amountCol}
				selectedColor={this.props.selectedColor}
				changeColor={this.props.changeColor}
			/>
		);
	}
}

export default Table;
