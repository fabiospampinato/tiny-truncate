
/* IMPORT */

import colors from 'tiny-colors';
import truncate from '../dist/index.js';

/* MAIN */

const intervalId = setInterval ( () => {

  console.log ( '---' );

  console.log ( truncate ( colors.red ( 'Content '.repeat ( 1000 ) ) ) );

}, 200 );

setTimeout ( () => {

  clearInterval ( intervalId );

}, 3000 );
