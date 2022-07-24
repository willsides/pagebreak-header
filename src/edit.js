import { __ } from '@wordpress/i18n';
import { RichText } from '@wordpress/block-editor';
import { useBlockProps } from '@wordpress/block-editor';
import './editor.scss';

export default function Edit( { attributes, setAttributes } ) {
	return (
		<div { ...useBlockProps() }>
			<RichText 
				tagName="h2"
				placeholder="Type your heading here"
				value={attributes.headertext}
				onChange={(newtext) => setAttributes({ headertext: newtext })} />
		</div>
	);
}
