import React from 'react';
import PropTypes from 'prop-types';
import './assets/Table.sass';

class TableContainer extends React.Component {
	static propTypes = {
		theadData: PropTypes.array.isRequired,
		tbodyData: PropTypes.array.isRequired
	};

	render() {
		const {theadData, tbodyData} = this.props;
		return (
			<div>
				<table>
					<thead>
					<tr>
						{theadData.map((item, idx) => {
							return <th key={idx}>{item}</th>
						})
						}
					</tr>
					</thead>
					<tbody>
					{tbodyData.map((obj, idxrow) => {
						return <tr key={idxrow}>{Object.keys(obj).map((objKey, idxcell) => {
							return <td key={idxcell}>{obj[objKey]}</td>
						})}
						</tr>
					})
					}
					</tbody>
				</table>
			</div>
		)
	}
}

export default TableContainer