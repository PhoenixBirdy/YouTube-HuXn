import React from 'react';
import { functionConveyor } from './functions';
import { Counter } from './Counter/Counter';
import { Another } from './Another/Another';

export const INC_1 = '+1';
export const DEC_1 = '-1';
export const MUL_2 = '*2';
export const DIV_3 = '/3';
const PROJECT1_OPERANDS = [INC_1, DEC_1, MUL_2, DIV_3];

export const PROJECTS = {
  0: <Counter />,
  1: <Another />,
};

export const PROJECTS_MAX_INDEX = Object.keys(PROJECTS).length - 1;

export const PROJECT1_OPERATIONS = functionConveyor(PROJECT1_OPERANDS);
