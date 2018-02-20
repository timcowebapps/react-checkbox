'use strict';

/* Внешние зависимости. */
import * as _ from 'lodash';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Classes, IJsonSchema } from 'timcowebapps-react-utils';

/* Внутрение зависимости. */
import Checkbox from '../src/components/checkbox';
var styles: any = require('./index.scss');

class App extends React.Component<any, any> {
	/**
	 * Конструктор класса.
	 * 
	 * @class App
	 * @public
	 * @constructor
	 * @param {any} props Свойства компонента.
	 */
	public constructor(props?: any) {
		super(props);

		this.state = {
			isChecked: false
		};

		this._handleChange = this._handleChange.bind(this);
	}
	
	private _handleChange=(changeEvent: any) => {
		this.setState({
			isChecked: !this.state.isChecked
		})
	}

	/**
	 * Отрисовывает компонент.
	 * 
	 * @class App
	 * @public
	 * @method render
	 */
	public render(): JSX.Element {
		return (
			<div>
				<Checkbox schema={{
				properties: {
					value: "option1",
					onChange: this._handleChange,
					classes: {
						pipeline: styles,
						block: "checkbox"
					}
				},
				items: [{
					id: "input",
					properties: {
						name: "noname",
						checked: this.state.isChecked
					}
				}, {
					id: "label",
					properties: {
						text: "checkbox option1"
					}
				}]
			}} />
			</div>
		);
	}
};

ReactDOM.render(
	<App />,
	document.getElementById('react-view')
);
