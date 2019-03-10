// This file is created by egg-ts-helper@1.24.0
// Do not modify this file!!!!!!!!!

import 'egg';
import ExtendContext = require('../../../app/extend/context');
declare module 'egg' {
  type ExtendContextType = typeof ExtendContext;
  interface Context extends ExtendContextType { }
}