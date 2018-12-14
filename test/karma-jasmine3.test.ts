import { expect } from 'chai';

import { fixtures } from './fixtures';
import { blobToLines, findProblemMatcher } from './helpers/general';

describe('karma-jasmine3 problemMatcher', () => {
  const matcherName = 'karma-jasmine3';
  const matcherDef = () => findProblemMatcher(matcherName);

  it('exists in package.json', () => {
    expect(matcherDef(), `problemMatcher with name ${matcherName}`).to.be.ok;
  });

  describe('given karma-jasmine3 output with a failure', () => {
    const lines = () => blobToLines(fixtures.jasmine3OutputWithAFailure);

    it('has a sequence matching beginsPattern and endsPattern', () => {
      const backgroundPattern = matcherDef().background;

      expect(lines())
          .to.haveAnEntry.matchRegexp(backgroundPattern.beginsPattern)
          .and.anyNextEntry.matchRegexp(backgroundPattern.endsPattern);
    });

    it('has a sequence matching problemMatcher.pattern sequence', () => {
      expect(lines())
          .to.haveAnEntry.matchFirstRegexpOf(matcherDef().pattern)
          .and.nextEntryAndPatternMatch
          .and.nextEntryAndPatternMatch
          .and.patternsExhausted;
    });
  });

  describe('given karma-jasmine3 output with no failures', () => {
    const lines = () => blobToLines(fixtures.jasmine3OutputWithNoFailure);

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
