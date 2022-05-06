
/* IMPORT */

import ansi from 'ansi-truncate';

/* MAIN */

const truncate = ( str: string, options?: { ellipsis?: string, width?: number } ): string => {

  const width = ( globalThis.process?.stdout?.getWindowSize?.()?.[0] || 25 ) - 1;

  return ansi ( str, width, options );

};

/* EXPORT */

export default truncate;
