import chai = require('chai');

interface StrictSequenceState {
  entryIndex: number;
  patternIndex: number;
  patterns: RegExp[];
}

interface RelaxedSequenceState {
  entryIndex?: number;
}

chai.use((_chai: any, utils: any) => {
  const Assertion = _chai.Assertion;

  Assertion.addProperty('haveAnEntry', function(this: any) {
    const subject: string[] = this._obj;

    // tslint:disable-next-line:no-unused-expression-chai
    new Assertion(subject).to.be.an('array').that.is.not.empty;
  });

  function findMatch(lines: string[], pattern: RegExp, from = 0) {
    let i, match;
    for (i = from; i < lines.length; i++) {
      match = lines[i].match(pattern);
      if (match !== null) {
        break;
      }
    }
    return {i, match};
  }

  Assertion.addMethod(
      'matchFirstRegexpOf',
      function(this: any, problemPattern: ProblemPatternP[]) {
        new Assertion(problemPattern).to.be.an('array');

        const patterns: RegExp[] =
            problemPattern.map(s => new RegExp(s.regexp));

        const subject: string[] = this._obj;
        const firstPattern = patterns[0];

        const {i, match} = findMatch(subject, firstPattern);

        this.assert(
            i < subject.length && match !== null,
            'expected 1st pattern #{exp} to match a line in #{this}',
            'expected 1st pattern #{exp} to not match a line in #{this}',
            firstPattern);

        const state: StrictSequenceState = {
          entryIndex: i,
          patternIndex: 0,
          patterns,
        };
        utils.flag(this, '__strictSequenceState', state);
      });

  Assertion.addProperty('nextEntryAndPatternMatch', function(this: any) {
    const subject: string[] = this._obj;
    const {entryIndex, patternIndex, patterns}: StrictSequenceState =
        utils.flag(this, '__strictSequenceState');

    const entryIndexCandidate = entryIndex + 1;
    const patternIndexCandidate = patternIndex + 1;

    const pattern = patterns[patternIndexCandidate];

    this.assert(
        entryIndexCandidate < subject.length &&
            subject[entryIndexCandidate].match(pattern) !== null,
        `expected next (${
            patternIndexCandidate}-th) pattern #{exp} to match next (${
            entryIndexCandidate}-th) line in #{this}`,
        `expected next (${
            patternIndexCandidate}-th) pattern #{exp} to not match next (${
            entryIndexCandidate}-th) line in #{this}`,
        pattern);

    const updatedState: StrictSequenceState = {
      entryIndex: entryIndexCandidate,
      patternIndex: patternIndex + 1,
      patterns,
    };
    utils.flag(this, '__strictSequenceState', updatedState);
  });

  Assertion.addProperty('patternsExhausted', function(this: any) {
    const {patternIndex, patterns}: StrictSequenceState =
        utils.flag(this, '__strictSequenceState');
    this.assert(
        patternIndex === patterns.length - 1,
        'expected no further patterns, but found #{act}',
        'expected further patterns, but found #{act}', [],
        patterns.slice(patternIndex + 1));
  });

  Assertion.addProperty('anyNextEntry', function(this: any) {
    const {entryIndex} = utils.flag(this, '__relaxedSequenceState');

    // tslint:disable-next-line:no-unused-expression-chai
    new Assertion(entryIndex).not.null;
  });

  Assertion.addMethod(
      'matchRegexp', function(this: any, problemPattern: ProblemPatternP) {
        const pattern = new RegExp(problemPattern.regexp);
        const subject: string[] = this._obj;

        const {entryIndex = undefined}: RelaxedSequenceState =
            utils.flag(this, '__relaxedSequenceState') || {};

        const qualifier = (entryIndex === undefined) ? '' : 'subsequent ';
        const {i, match} = findMatch(
            subject, pattern, entryIndex === undefined ? 0 : entryIndex + 1);

        this.assert(
            i < subject.length && match !== null,
            'expected pattern #{exp} to match a ' + qualifier +
                'line in #{this}',
            'expected pattern #{exp} to not match a ' + qualifier +
                'line in #{this}',
            pattern);

        const updatedState: RelaxedSequenceState = {entryIndex: i};
        utils.flag(this, '__relaxedSequenceState', updatedState);
      });
});
