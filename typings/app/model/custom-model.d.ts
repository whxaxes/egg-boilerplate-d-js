// This file is created by egg-ts-helper@1.24.0
// Do not modify this file!!!!!!!!!

import 'egg';
type AutoInstanceType<T, U = T extends (...args: any[]) => any ? ReturnType<T> : T> = U extends { new (...args: any[]): any } ? InstanceType<U> : U;
import ExportTest = require('../../../app/model/Test');

declare module 'egg' {
  interface Application {
    model: T_custom_model;
  }

  interface T_custom_model {
    Test: AutoInstanceType<typeof ExportTest>;
  }
}
