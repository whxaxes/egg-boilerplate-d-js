// This file is created by egg-ts-helper
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportTest = require('../../../app/custom/Test');

declare module 'egg' {
  interface Context {
    custom: TC100;
  }

  interface TC100 {
    Test: ReturnType<typeof ExportTest>;
  }
}
