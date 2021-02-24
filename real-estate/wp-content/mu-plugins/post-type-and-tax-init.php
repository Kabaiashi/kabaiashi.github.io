<?php

/*
Plugin Name: Post Type and Taxonomy Init
Description: Creates a new post type and a taxonomy
Version: 1.0
Author: Denys
Text Domain: nptt
*/

/*Custom Post type start*/
function post_type_real_estate_object() {
    $supports = array(
      'title', // post title
      'thumbnail', // featured images
      'custom-fields', // custom fields
      'post-formats', // post formats
    );
    $labels = array(
      'name' => _x('Объекты недвижимости', 'plural'),
      'singular_name' => _x('Объект недвижимости', 'singular'),
      'menu_name' => _x('Объект недвижимости', 'admin menu'),
      'name_admin_bar' => _x('Объект недвижимости', 'admin bar'),
      'add_new' => _x('Добавить новый', 'add new'),
      'add_new_item' => __('Добавить объект'),
      'new_item' => __('Новый объект'),
      'edit_item' => __('Редактировать объект'), 
      'view_item' => __('Смотреть объект'),
      'all_items' => __('Все объекты'),
      'search_items' => __('Искать объекты'),
      'not_found' => __('Объекты не найдены.'),
    );
    $args = array(
      'supports' => $supports,
      'labels' => $labels,
      'public' => true,
      'query_var' => true,
      'rewrite' => array('slug' => 'objects'),
      'menu_position' => 5,
      'has_archive' => true,
      'hierarchical' => false,
      'menu_icon' => 'dashicons-admin-multisite',
    );
    register_post_type('re_objects', $args);
}

add_action('init', 'post_type_real_estate_object');
    /*Custom Post type end*/


    //Hook into the init action 
add_action( 'init', 'create_districts_taxonomy');
 
function create_districts_taxonomy() {
 
    // Labels part for the GUI
    $labels = array(
      'name' => _x( 'Район', 'taxonomy general name' ),
      'singular_name' => _x( 'Район', 'taxonomy singular name' ),
      'search_items' =>  __( 'Искать районы' ),
      'popular_items' => __( 'Популярные районы' ),
      'all_items' => __( 'Все районы' ),
      'parent_item' => null,
      'parent_item_colon' => null,
      'edit_item' => __( 'Редактировать район' ), 
      'update_item' => __( 'Обновить район' ),
      'add_new_item' => __( 'Добавить новый' ),
      'new_item_name' => __( 'Новое название' ),
      'separate_items_with_commas' => __( 'Разделить районы запятыми' ),
      'add_or_remove_items' => __( 'Добавить или удалить районы' ),
      'menu_name' => __( 'Район' ),
    ); 
 
    // Register the taxonomy like tag
    register_taxonomy('Район','re_objects',array(
      'hierarchical' => false,
      'labels' => $labels,
      'show_ui' => true,
      'show_in_rest' => true,
      'show_admin_column' => true,
      'update_count_callback' => '_update_post_term_count',
      'query_var' => true,
      'rewrite' => array( 'slug' => 'district' ),
    ));
}

?>