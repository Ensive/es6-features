/* global: buildUser */
'use strict';

(function () {
  'use strict';

  describe('buildUser function', function () {
    it('should build a user', function () {
      let user = buildUser('Sam', 'Williams');
      expect(user.first).to.be.equal('Sam');
      expect(user.last).to.be.equal('Williams');
      expect(user.fullName).to.be.equal('Sam Williams');
    });
  });

})();
