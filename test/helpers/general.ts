import { contributes } from '../../package.json';

type ProblemMatcherP = {
    name: string;
    pattern: {regexp: string}[];
    background: {
        beginsPattern: {regexp: string};
        endsPattern: {regexp: string};
    };
};

export function findProblemMatcher(problemMatcherName: string) {
  const problemMatchers: ProblemMatcherP[] = contributes.problemMatchers;
  const matcherDef = problemMatchers.find(
      def => def.name === problemMatcherName);

  if (matcherDef === undefined) {
    throw new Error();
  }

  return matcherDef;
}

export const blobToLines = (blob: string): string[] => blob.trim().split('\n');
