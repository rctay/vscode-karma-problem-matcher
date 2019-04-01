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
          .to.haveAnEntry.matchFirstRegexpOf(matcherDef().pattern, [`Expected 'my-app' to equal 'my-app aoeu'.`])
          .and.matchNextRegexpOfPattern([])
          .and.matchNextRegexpOfPattern(['src/app/app.component.spec.ts', '33', '54'])
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

  describe('given karma-jasmine3 output with a failure, without a base url', () => {
    // Yes, the strange 3-space indentation of ie/edge launchers is accurate
    const launchers : {[launcher: string]: string} = {
      'karma-ie-launcher 1.0.0': `IE 11.0.0 (Windows 10.0.0) hello_world should equal "Hello, world!" FAILED
      Error: Expected 'hello, world!' to equal 'Hello, world!'.
          at <Jasmine>
         at Anonymous function (tests.js:17:56)
          at <Jasmine>`,

      'karma-edge-launcher 0.4.2': `Edge 18.17763.0 (Windows 10.0.0) hello_world should equal "Hello, world!" FAILED
      Error: Expected 'hello, world!' to equal 'Hello, world!'.
          at <Jasmine>
         at Anonymous function (tests.js:17:56)
          at <Jasmine>`,

      'karma-chrome-launcher 2.2.0': `Chrome 73.0.3683 (Windows 10.0.0) hello_world should equal "Hello, world!" FAILED
      Error: Expected 'hello, world!' to equal 'Hello, world!'.
          at <Jasmine>
          at UserContext.<anonymous> (tests.js:17:56)
          at <Jasmine>`,

      'karma-firefox-launcher 1.1.0': `Firefox 65.0.0 (Windows 10.0.0) hello_world should equal "Hello, world!" FAILED
        Expected 'hello, world!' to equal 'Hello, world!'.
        <Jasmine>
        @tests.js:17:56
        <Jasmine>`,
    };

    // tslint:disable-next-line:mocha-no-side-effect-code
    for (const launcher of Object.keys(launchers)) {
      it(`${launcher} output should match a problemMatcher.pattern`, () => {
        const lines = launchers[launcher].split('\n');
        expect(lines)
            .to.haveAnEntry.matchFirstRegexpOf(matcherDef().pattern, [`Expected 'hello, world!' to equal 'Hello, world!'.`])
            .and.matchNextRegexpOfPattern([])
            .and.matchNextRegexpOfPattern(['tests.js', '17', '56'])
            .and.patternsExhausted;
      });
    }
  });
});
