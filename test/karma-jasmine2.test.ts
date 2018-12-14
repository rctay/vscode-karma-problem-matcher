import { expect } from 'chai';

import { fixtures } from './fixtures';
import { blobToLines, findProblemMatcher } from './helpers/general';

describe('karma-jasmine2 problemMatcher', () => {
  const matcherName = 'karma-jasmine2';
  const matcherDef = () => findProblemMatcher(matcherName);

  it('exists in package.json', () => {
    expect(matcherDef(), `problemMatcher with name ${matcherName}`).to.be.ok;
  });

  describe('given karma-jasmine2 output with a failure', () => {
    const lines = () => blobToLines(fixtures.jasmine2OutputWithAFailure);

    it('has a sequence matching beginsPattern and endsPattern', () => {
      const backgroundPattern = matcherDef().background;

      expect(lines())
          .to.haveAnEntry.matchRegexp(backgroundPattern.beginsPattern)
          .and.anyNextEntry.matchRegexp(backgroundPattern.endsPattern);
    });

    it('has a sequence matching problemMatcher.pattern sequence', () => {
      expect(lines())
          .to.haveAnEntry.matchFirstRegexpOf(matcherDef().pattern)
          .and.nextEntryAndPatternMatch.and.patternsExhausted;
    });
  });

  describe('given karma-jasmine2 output with no failures', () => {
    const lines = () => blobToLines(fixtures.jasmine2OutputWithNoFailure);

    it('has a sequence matching beginsPattern and endsPattern', () => {
      const backgroundPattern = matcherDef().background;

      expect(lines())
          .to.haveAnEntry.matchRegexp(backgroundPattern.beginsPattern)
          .and.anyNextEntry.matchRegexp(backgroundPattern.endsPattern);
    });

    it('does not have a sequence matching problemMatcher.pattern', () => {
      expect(lines()).to.not.haveAnEntry.matchFirstRegexpOf(matcherDef().pattern);
    });
  });
});
