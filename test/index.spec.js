/* eslint no-underscore-dangle: 0 */

import { expect } from 'chai';
import { isEqual } from '../src/ts/helpers';
import router from '../src/ts/Router';
import Profile from '../src/ts/pages/Profile/Profile';
import Button from '../src/ts/components/Button/Button';
import { getChats } from '../src/ts/api/chat';
import buttonTemplate from '../src/ts/components/Button/buttonTemplate';
import { queryStringify } from '../src/ts/utils';

describe('isEqual', () => {
	it('Returns true when params are equal', () => {
		expect(isEqual(1, 1)).to.equal(true);
	});

	it('Returns false when params are not equal', () => {
		expect(isEqual(1, 2)).to.equal(false);
	});

	it('Returns false if params have different types', () => {
		expect(isEqual(1, '1')).to.equal(false);
	});
});

describe('Router', () => {
	it('Can add new route', () => {
		const routesCountBefore = router.routes.length;
		router.use('/anotherRoute', Profile);
		const routesCountAfter = router.routes.length;

		expect(routesCountBefore + 1).to.equal(routesCountAfter);
	});

	it('Can get route', () => {
		const path = '/someTestRoute';
		router.use(path, Profile);
		expect(router.getRoute(path)._pathname).to.equal(path);
	});
});

describe('Block', () => {
	it('ComponentDidUpdate returns true on new props', () => {
		const oldProps = {};
		const newProps = { newProp: true };
		expect(new Button('text').componentDidUpdate(oldProps, newProps)).to.equal(true);
	});
});

describe('HTTPTransport', () => {
	it('queryStringify returns correct string', () => {
		const queryString = queryStringify({ name: 'value', arrayOfValues: [1, 2], thirdValue: 'value3' });
		expect(queryString).to.equal('?name=value&arrayOfValues=1,2&thirdValue=value3');
	});

	it('Gets some response', (done) => {
		getChats().then((response) => {
			if (response.status === 401) {
				done();
			} else {
				done(new Error('Response status is not 401'));
			}
		}).catch((err) => done(err));
	});
});

describe('Templator', () => {
	it('Returns expected string', () => {
		expect(buttonTemplate({ buttonText: 'text', buttonType: 'button', buttonStyle: 'buttonClass' }))
			.to.equal('<button class="buttonClass" type="button">text</button>');
	});
});
