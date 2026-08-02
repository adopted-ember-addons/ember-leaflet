import { module, test } from 'qunit';
import { visit, currentURL, click } from '@ember/test-helpers';
import { setupApplicationTest } from 'dummy/tests/helpers';

module('Acceptance | documentation', function (hooks) {
  setupApplicationTest(hooks);

  test('renders home page', async function (assert) {
    await visit('/');

    assert.strictEqual(currentURL(), '/', 'user can open home page');
    assert
      .dom('.main-page-section a[href="/docs"]')
      .exists({ count: 1 }, 'home page contains a link to docs')
      .hasText('Read the docs');
  });

  test('renders addons page', async function (assert) {
    await visit('/addons');

    assert.strictEqual(currentURL(), '/addons', 'user can open addons page');
    assert.dom('h1').exists({ count: 1 }, 'addons page contains headline').hasText('Addons');
  });

  module('docs pages', async function () {
    const docPages = [
      { path: '/docs', title: 'Overview' },
      { path: '/docs/installation', title: 'Installation' },
      { path: '/docs/container', title: 'The container' },
      { path: '/docs/adding-layers', title: 'Adding layers' },
      { path: '/docs/actions', title: 'Actions and interaction' },
      { path: '/docs/templates', title: "They're just templates!" },
      { path: '/docs/addons', title: 'Addons' }
    ];

    for (const { path, title } of docPages) {
      test(`renders docs page: ${title}`, async function (assert) {
        await visit('/docs');

        const linkSelector = `.docs-viewer nav a[href="${path}"]`;
        assert
          .dom(linkSelector)
          .exists({ count: 1 }, `Link to page ${title} exists`)
          .hasText(title, `Link to page ${title} has expected text`);

        await click(linkSelector);
        assert.strictEqual(currentURL(), path, `user can open docs page ${title}`);
        assert.dom('h1').exists({ count: 1 }, 'renders headline').hasText(title);
      });
    }
  });
});
