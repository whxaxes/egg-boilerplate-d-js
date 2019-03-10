// This file is created by egg-ts-helper@1.24.0
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportAccess = require('../../../app/middleware/access');

declare module 'egg' {
  interface IMiddleware {
    access: typeof ExportAccess;
  }
}
