<?php 

/*================================================
#Load custom Filterable Portfolio Module
================================================*/

function divi_custom_filterable_portfolio_module() {
    get_template_part( '/includes/custom-FilterablePortfolio' );
    $dcfm = new custom_ET_Builder_Module_Filterable_Portfolio();
    remove_shortcode( 'et_pb_filterable_portfolio' );
    add_shortcode( 'et_pb_filterable_portfolio', array( $dcfm, '_shortcode_callback' ) );
}

add_action( 'et_builder_ready', 'divi_custom_filterable_portfolio_module' );


function divi_custom_filterable_portfolio_class( $classlist ) { 
    // Blog Module 'classname' overwrite. 
    $classlist['et_pb_filterable_portfolio'] = array( 'classname' => 'custom_ET_Builder_Module_Filterable_Portfolio',); 
    return $classlist; 
} 

add_filter( 'et_module_classes', 'divi_custom_filterable_portfolio_class' );