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

	render() {
		return (
			<div className="App">
				<h1 className="container">Dom Challenge Through React</h1>
				<button type="button" onClick={() => this.addRow()}>
					Add Row
				</button>
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
