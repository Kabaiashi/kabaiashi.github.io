<!DOCTYPE html>
<html <?php language_attributes(); ?>>
  <head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <?php wp_head(); ?>
  </head>
  <body <?php body_class(); ?>>
    <header class="site-header">
    <div class="container">
      <h1 class="school-logo-text float-left"><a href="<?php echo site_url() ?>"><strong>Real</strong> Estate</a></h1>
      <div class="site-header__menu group">
        <nav class="main-navigation">
          <?php wp_nav_menu(); ?>
        </nav>
      </div>
    </div>
  </header>

<div class="page-banner">
  <div class="page-banner__bg-image" style="background-image: url(<?php echo get_theme_file_uri('/images/ocean.jpg') ?>);"></div>
  <div class="page-banner__content container container--narrow">
    <h1 class="page-banner__title"><?php the_title(); ?></h1>
  </div>  
</div>

<div class="container pt-5">
  <div class="row">
    <div class="col-md-12 d-flex justify-content-around single-item">
      <div class="col-md-5 d-flex align-items-center single-item__title">
        <p><?php the_excerpt(); ?></p>
	  </div>
	  <div class="col-md-5 d-flex align-items-center single-item__img">
        <div>
	      <?php the_post_thumbnail('portrait'); ?>
		</div>
	  </div>
    </div>
  </div>  
</div>

<?php get_footer(); ?>