'use strict';

/* Внешние зависимости. */
import * as React from 'react';
import * as PropTypes from 'prop-types';
import { IJsonSchema } from 'timcowebapps-react-utils';

export namespace CheckboxProps {
	export interface IProps {
		/**
		 * Схема.
		 * 
		 * @type {IJsonSchema}
		 * @memberof CheckboxProps.IProps
		 */
		schema?: IJsonSchema;
	}

	export const types: PropTypes.ValidationMap<IProps> = {
	};

	export const defaults: IProps = {
		schema: {
			properties: {
				classes: {
					pipeline: undefined,
					block: "checkbox"
				}
			}
		}
	};
}
