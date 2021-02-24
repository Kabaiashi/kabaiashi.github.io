<?php
/**
 * Основные параметры WordPress.
 *
 * Скрипт для создания wp-config.php использует этот файл в процессе
 * установки. Необязательно использовать веб-интерфейс, можно
 * скопировать файл в "wp-config.php" и заполнить значения вручную.
 *
 * Этот файл содержит следующие параметры:
 *
 * * Настройки MySQL
 * * Секретные ключи
 * * Префикс таблиц базы данных
 * * ABSPATH
 *
 * @link https://ru.wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Параметры MySQL: Эту информацию можно получить у вашего хостинг-провайдера ** //
/** Имя базы данных для WordPress */
define( 'DB_NAME', 'word-press' );

/** Имя пользователя MySQL */
define( 'DB_USER', 'word-press_admin' );

/** Пароль к базе данных MySQL */
define( 'DB_PASSWORD', 'test' );

/** Имя сервера MySQL */
define( 'DB_HOST', 'localhost' );

/** Кодировка базы данных для создания таблиц. */
define( 'DB_CHARSET', 'utf8mb4' );

/** Схема сопоставления. Не меняйте, если не уверены. */
define( 'DB_COLLATE', '' );

/**#@+
 * Уникальные ключи и соли для аутентификации.
 *
 * Смените значение каждой константы на уникальную фразу.
 * Можно сгенерировать их с помощью {@link https://api.wordpress.org/secret-key/1.1/salt/ сервиса ключей на WordPress.org}
 * Можно изменить их, чтобы сделать существующие файлы cookies недействительными. Пользователям потребуется авторизоваться снова.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'n;j|O;n(]O~5%3Eu{=!K0$!Iye<];:Q zcub]7:8d5HI[rPW d)KVN# H&/_P(6I' );
define( 'SECURE_AUTH_KEY',  'l{;sarLRyPF6#WCcoD$<jqf^i}|sy(_pF#M1MX;0J3dV4!_}!YhG;V;lifRVF07w' );
define( 'LOGGED_IN_KEY',    '1!8lDa--?_]hNeHEEV;uk@o%i2pzD4t%>kpMIroj4/yFu|jTJgadrB<iRz%+N$L`' );
define( 'NONCE_KEY',        'd(8P)#D}7%>FXkq@P>/~#PkOl}c-|e~!+b6K<,>Vl<3$l0yD0j/($5*tqwr#_3x[' );
define( 'AUTH_SALT',        '[&CUx^gjC,drWmG}~?)K<2a U)GQew}i:s-gwq[cZNOfHX9_R,NFE(@^UkSHf74|' );
define( 'SECURE_AUTH_SALT', '`jWS:(BqT8_T]_v3!OE0D$yFo}*,X2Ru6^QyqNuV<0e[|^-beY:VJPR]&Ed?AT;&' );
define( 'LOGGED_IN_SALT',   '8+LX2fF*F}XOH ]Ucw~Qlgef>c2_c:N _J%%,zL ;EFyf*<W,F~et|~X:h%XjOMl' );
define( 'NONCE_SALT',       'BgU4yk&8yd4Yuu0fkhp,s8+Thtk.$/{M-a>3,NVcja3vUL,?]TkT3[xajor%$yH=' );

/**#@-*/

/**
 * Префикс таблиц в базе данных WordPress.
 *
 * Можно установить несколько сайтов в одну базу данных, если использовать
 * разные префиксы. Пожалуйста, указывайте только цифры, буквы и знак подчеркивания.
 */
$table_prefix = 'wp_';

/**
 * Для разработчиков: Режим отладки WordPress.
 *
 * Измените это значение на true, чтобы включить отображение уведомлений при разработке.
 * Разработчикам плагинов и тем настоятельно рекомендуется использовать WP_DEBUG
 * в своём рабочем окружении.
 *
 * Информацию о других отладочных константах можно найти в документации.
 *
 * @link https://ru.wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Это всё, дальше не редактируем. Успехов! */

/** Абсолютный путь к директории WordPress. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Инициализирует переменные WordPress и подключает файлы. */
require_once ABSPATH . 'wp-settings.php';
