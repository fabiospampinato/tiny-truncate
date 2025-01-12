# Tiny Truncate

A tiny function for truncating a string which may containg ANSI escapes, with automatic terminal width detection.

## Install

```sh
npm install tiny-truncate
```

## Usage

```ts
import colors from 'tiny-colors';
import truncate from 'tiny-truncate';

// Let's truncate a string, spanning at most the entire width of the terminal

truncate ( colors.red ( '---'.repeat ( 1000 ) ) ); // Some red dashes that don't overflow the width of the terminal
```

## License

MIT © Fabio Spampinato
