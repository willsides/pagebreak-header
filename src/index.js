import { registerBlockType } from '@wordpress/blocks';
import './style.scss';
import Edit from './edit';
import save from './save';

registerBlockType( 'willsides/pagebreak-header', {
	apiVersion: 2,

	attributes: {
		headertext: {
			type: 'string',
			default: ''
		},
	},
	/**
	 * @see ./edit.js
	 */
	edit: Edit,

	/**
	 * @see ./save.js
	 */
	save,
} );
