import {expect} from 'chai';

import router from '../../server/app/router/comment';


describe('store', () => {
	it('should equal 4', ()=> {
		    const m = router.testFunc(2);
    		expect(m).to.equal(4);
	})
})