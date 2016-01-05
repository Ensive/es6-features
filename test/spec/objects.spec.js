/* global: buildUser */
'use strict';

(function () {
  'use strict';

  describe('buildUser function', function () {
    it('should build a user', function () {
      let user = buildUser('Sam', 'Williams', 11);
      expect(user.first).to.be.equal('Sam');
      expect(user.last).to.be.equal('Williams');
      expect(user.fullName).to.be.equal('Sam Williams');
      expect(user.isActive()).to.equal(true);

      let newUser = buildUser('First', 'Last', 5);
      expect(newUser.isActive()).to.equal(false);
    });
  });

})();
