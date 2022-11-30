<?php
function my_theme_enqueue_styles() {
    wp_enqueue_style( 'parent-style', get_template_directory_uri() . '/style.css');
	
    //Uncomment following if you receive jquery error on console. mostly due to jquery version mismatch
    /*
    wp_deregister_script('jquery');
    wp_enqueue_script( 'jquery', 'https://code.jquery.com/jquery-3.6.0.min.js');
    */
}
add_action( 'wp_enqueue_scripts', 'my_theme_enqueue_styles', 99 );

function my_theme_enqueue_cdn_style() {
	wp_enqueue_style( 'cog-cdn-normalize', 'https://cogbranding.github.io/COGbrandingCDN.github.io/src/cdn/css/divi/diviNormalize.css' );
}
add_action( 'wp_enqueue_scripts', 'my_theme_enqueue_cdn_style', 999 );

function my_theme_enqueue_scripts() {
    wp_enqueue_script( 'custom', get_stylesheet_directory_uri() . '/js/custom.js', array( 'jquery' ), true );
	wp_enqueue_script( 'cog-cdn-function','https://cogbranding.github.io/COGbrandingCDN.github.io/src/cdn/js/divi/diviFunction.js', array( 'jquery' ), true );
	wp_enqueue_script( 'scroll-reveal','https://unpkg.com/scrollreveal', array( 'jquery' ), true );
}
add_action( 'wp_footer', 'my_theme_enqueue_scripts' );

//This function can be used to add multiple file types to be accepted by Wordpress core.
function add_file_types_to_uploads($file_types){
    $new_filetypes = array();
    $new_filetypes['svg'] = 'image/svg+xml';
    $file_types = array_merge($file_types, $new_filetypes );
    return $file_types;
}
add_filter('upload_mimes', 'add_file_types_to_uploads');

//This function allows you to add a menu to a page with a shortcode
function print_menu_shortcode($atts, $content = null) {
	extract(shortcode_atts(array( 'name' => null, 'class' => null ), $atts));
	return wp_nav_menu( array( 'menu' => $name, 'menu_class' => 'listed__menu', 'echo' => false ) );
}

add_shortcode('menu', 'print_menu_shortcode');