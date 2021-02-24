<?php

add_action('wp_enqueue_scripts', 're_files');

function re_files() {
    wp_enqueue_style('custom-google-fonts', '//fonts.googleapis.com/css?family=Roboto+Condensed:300,300i,400,400i,700,700i|Roboto:100,300,400,400i,700,700i');
    wp_enqueue_style('font-awesome', '//maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css');
    wp_enqueue_style('our-main-styles', get_theme_file_uri('/css/styles.min.css'));
      
}

add_action( 'pre_get_posts', 'add_my_post_types_to_query' );
 
function add_my_post_types_to_query( $query ) {
    if ( is_home() && $query->is_main_query() )
        $query->set( 'post_type', array( 'post', 're-object' ) );
    return $query;
}


function real_estate_features() {
    add_image_size('landscape', 400, 260, true);
    add_image_size('portrait', 480, 650, true);
}

add_action('after_setup_theme', 'real_estate_features');
?>