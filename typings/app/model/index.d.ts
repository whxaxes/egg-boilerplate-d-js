// This file is created by egg-ts-helper@1.24.0
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportTest = require('../../../app/model/Test');

declare module 'egg' {
  interface IModel {
    Test: ReturnType<typeof ExportTest>;
  }
}
