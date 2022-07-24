<?php
/**
 * Plugin Name:       Pagebreak Header
 * Description:       Displays header text within a pagrbreak line
 * Requires at least: 5.8
 * Requires PHP:      7.0
 * Version:           1.0.0
 * Author:            Will Sides
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       pagebreak-header
 *
 * @package           willsides
 */

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/block-editor/tutorials/block-tutorial/writing-your-first-block-type/
 */
function willsides_pagebreak_header_block_init() {
	register_block_type( __DIR__ );
}
add_action( 'init', 'willsides_pagebreak_header_block_init' );
