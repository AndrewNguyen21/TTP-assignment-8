import React from 'react';
import { Table } from './components/';
import './App.css';

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			selectedColor: '',
			amountRow: 1,
			amountCol: 1,
			colored: false
		};
	}

	//changes state of row to add a row
	addRow = () => {
		this.setState((prevState) => ({ amountRow: prevState.amountRow + 1 }));
	};

	//changes state of col to add a col
	addCol = () => {
		this.setState((prevState) => ({ amountCol: prevState.amountCol + 1 }));
	};
	render() {
		return (
			<div className="App">
				<h1 className="container">Dom Challenge Through React</h1>
				<button type="button" onClick={() => this.addRow()}>
					Add Row
				</button>
				<button type="button" onClick={() => this.addCol()}>
					Add Col
				</button>
				<select name="color" id="color" onChange={this.selectedColor}>
					<option value>Select Color</option>
					<option value="#800000">Red</option>
					<option value="#87ceeb">Blue</option>
					<option value="#999900">Green</option>
					<option value="#ffd500">Yellow</option>
					<option value="#ad0aaf">Purple</option>
				</select>
				<div className="container">
					<table>
						<tbody>
							<Table
								selectedColor={this.state.selectedColor}
								amountRow={this.state.amountRow}
								amountCol={this.state.amountCol}
							/>
						</tbody>
					</table>
				</div>
			</div>
		);
	}
}

export default App;
