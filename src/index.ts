// Note: This (importing and then exporting media) is a workaround for doc extraction, which doesn't
// support 'export * as ___ from ___' yet.
import * as media from './media';

export * from './local-track';
export * from './peer-connection';
export { media };
