// This file is created by egg-ts-helper
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportTest = require('../../../app/model/Test');

declare module 'egg' {
  interface Application {
    model: IModel;
  }

  interface IModel {
    Test: ReturnType<typeof ExportTest>;
  }
}
