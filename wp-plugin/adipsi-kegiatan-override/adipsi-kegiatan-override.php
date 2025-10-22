<?php
/**
 * Plugin Name: ADIPSI Kegiatan Override
 * Description: Override the hard-coded "Kegiatan ADIPSI" section and inject dynamic items from a REST endpoint.
 * Author: Emergent Assistant
 * Version: 1.0.0
 */

if (!defined('ABSPATH')) {
    exit;
}

// Allow configuration via constants or filters
if (!defined('ADIPSI_KEGIATAN_REST_PATH')) {
    define('ADIPSI_KEGIATAN_REST_PATH', '/wp-json/adipsi/v1/kegiatan');
}
if (!defined('ADIPSI_KEGIATAN_SELECTOR')) {
    // Default section selector used by the theme
    define('ADIPSI_KEGIATAN_SELECTOR', '#kegiatan');
}

add_action('wp_enqueue_scripts', function () {
    $ver = '1.0.0';

    // 1) Blocker style to hide the static section children and reserve space
    wp_register_style(
        'adipsi-kegiatan-override',
        plugins_url('assets/injector.css', __FILE__),
        [],
        $ver
    );
    wp_enqueue_style('adipsi-kegiatan-override');

    // 2) Injector script – robust DOM takeover with MutationObserver
    wp_register_script(
        'adipsi-kegiatan-injector',
        plugins_url('assets/injector.js', __FILE__),
        [],
        $ver,
        true
    );

    $config = [
        'selector' => ADIPSI_KEGIATAN_SELECTOR,
        'restUrl'  => site_url(ADIPSI_KEGIATAN_REST_PATH),
        'perPage'  => 6,
        'debug'    => defined('WP_DEBUG') && WP_DEBUG,
    ];

    wp_localize_script('adipsi-kegiatan-injector', 'adipsiKegiatan', $config);
    wp_enqueue_script('adipsi-kegiatan-injector');
}, 9);
