import React, { Component } from 'react';

//inserts the actual cell to the row
class TableCol extends Component {
	addCol = () => {
		let cols = [];
		for (let i = 1; i <= this.props.amountCol; i++) {
			cols.push(<td key={i}></td>);
		}
		return cols;
	};

	render() {
		return this.addCol();
	}
}
export default TableCol;
