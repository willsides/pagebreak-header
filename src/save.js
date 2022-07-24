import { __ } from '@wordpress/i18n';
import { RichText } from '@wordpress/block-editor';
import { useBlockProps } from '@wordpress/block-editor';

export default function save( { attributes } ) {
	return (
		<div { ...useBlockProps.save() }>
			<RichText.Content 
				tagName="h2"
				value={attributes.headertext}
			/>
		</div>
	);
}
