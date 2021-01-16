import React, { Component } from 'react';
import TableCol from './TableCol';

//controls rows, but requires TableCol to insert the actual cell into the row
class TableRow extends Component {
	addRow = () => {
		let rows = [];
		for (let i = 1; i <= this.props.amountRow; i++) {
			rows.push(
				<tr key={i}>
					<TableCol
						amountCol={this.props.amountCol}
						changeColor={this.props.changeColor}
					/>
				</tr>
			);
		}
		return rows;
	};

	render() {
		return this.addRow();
	}
}

export default TableRow;
