import {contributes} from '../../package.json';

export function findProblemMatcher(problemMatcherName: string) {
  const matcherDef = contributes.problemMatchers.find(
      matcherDef => matcherDef.name === problemMatcherName);
  if (matcherDef === undefined) {
    throw new Error();
  }
  return matcherDef;
}

export const blobToLines = (blob: string) => blob.trim().split('\n');