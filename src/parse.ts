import { load as loadAST } from '@stoplight/yaml-ast-parser';
import { walkAST } from './parseWithPointers';

export const parse = <T>(value: string): T => walkAST(loadAST(value)) as T;
