// This file is created by egg-ts-helper@1.24.0
// Do not modify this file!!!!!!!!!

import 'egg';
type AutoInstanceType<T, U = T extends (...args: any[]) => any ? ReturnType<T> : T> = U extends { new (...args: any[]): any } ? InstanceType<U> : U;
import ExportTest = require('../../../app/custom/Test');

declare module 'egg' {
  interface Context {
    custom: T_custom_custom;
  }

  interface T_custom_custom {
    Test: AutoInstanceType<typeof ExportTest>;
  }
}
