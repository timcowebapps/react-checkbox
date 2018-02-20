'use strict';

/* Внешние зависимости. */
import * as _ from 'lodash';
import * as React from 'react';
import * as PropTypes from 'prop-types';
import { Classes, Schema } from 'timcowebapps-react-utils';

/* Внутренние зависимости. */
import { CheckboxProps } from './checkbox-props';

class Checkbox extends React.Component<CheckboxProps.IProps, any> {
	public static displayName: string = 'Checkbox';
	public static propTypes: PropTypes.ValidationMap<CheckboxProps.IProps> = CheckboxProps.types;
	public static defaultProps: CheckboxProps.IProps = CheckboxProps.defaults;

	/**
	 * Конструктор класса.
	 * 
	 * @class Checkbox
	 * @public
	 * @constructor
	 * @param {CheckboxProps.IProps} props Свойства компонента.
	 */
	public constructor(props?: CheckboxProps.IProps) {
		super(props);
	}

	/**
	 * Отрисовывает компонент.
	 * 
	 * @class Checkbox
	 * @public
	 * @method render
	 */
	public render() {
		const { schema } = this.props;

		const inputSchema = Schema.getItemById(schema.items, 'input');
		const labelSchema = Schema.getItemById(schema.items, 'label');

		console.log(inputSchema.properties.checked);
		return (
			<div className={Classes.bem(schema.properties.classes.pipeline, schema.properties.classes.block, {
				modifiers: [
					inputSchema.properties.checked ? 'checked' : '',
					'disabled'
				]
			})}>
				<div className={Classes.bem(schema.properties.classes.pipeline, schema.properties.classes.block, { element: "inner" })}>
					<input className={Classes.bem(schema.properties.classes.pipeline, schema.properties.classes.block + "__inner", { element: "input" })} type="checkbox" name={inputSchema.properties.name} id={schema.properties.value} value={schema.properties.value} checked={inputSchema.properties.checked} onChange={schema.properties.onChange} />
					<span className={Classes.bem(schema.properties.classes.pipeline, schema.properties.classes.block + "__inner", { element: "indicator" })}></span>
				</div>
				<label htmlFor={schema.properties.value}>{labelSchema.properties.text}</label>
			</div>
		);
	}
}

export default Checkbox;
