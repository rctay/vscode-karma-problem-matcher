declare namespace Chai {
  interface Assertion {
    readonly haveAnEntry: Assertion;

    matchFirstRegexpOf(pattern: ProblemPatternP[], expectedValues?: string[]): Assertion;
    matchNextRegexpOfPattern(expectedValues?: string[]): Assertion;

    matchRegexp(pattern: ProblemPatternP): Assertion;
    readonly anyNextEntry: Assertion;

    readonly patternsExhausted: Assertion;
  }
}


interface ProblemPatternP {
  regexp: string;
}
