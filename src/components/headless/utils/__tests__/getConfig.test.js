// @flow
import getConfig from '../getConfig';

describe('getConfig()', () => {
  it('should return matching config for teaser', () => {
    const result = getConfig('teaser');
    expect(result).toMatchSnapshot();
    const data = {
      teaserTitle: 'Content Management at a new Scale with CoreMedia CaaS',
      teaserText: 'Discover the new CoreMedia Headless Services.',
      teaserTarget: {
        title: '',
        segment: '',
        link: 'https://www.coremedia.com/',
      },
      picture: {
        title: 'Globe',
        alt: 'Globe',
        link: 'coremedia:///image/2656/data',
      },
    };
    const params = { color: 'blue', ctaShow: true, url: '/caas.html' };
    let props = result.createProps({ data, params });
    expect(props).toMatchSnapshot();
    delete data.picture;
    props = result.createProps({ data });
    expect(props).toMatchSnapshot();
  });

  it('should return matching config for article', () => {
    const result = getConfig('article');
    expect(result).toMatchSnapshot();
    const data = {
      title: 'CoreMedia Content as a Service (CaaS)',
      detailText: `<p>CoreMedia is a Content Management System (CMS) which can manage your content from creation straight through to rendering. Our Content Application Engine (CAE) provides tools and a framework with which you can easily design a beautiful, consistent and fully-functional user experience.</p><p>The components of the CoreMedia system works gracefully together as an isolated system, but it is also flexible enough to be a small but crucial component in a larger ecosystem. This larger system can include commerce systems, brick-and-mortar backend systems, marketing data, user management and many more kinds of sub-systems.</p><p>One way to achieve this flexibility is to make content from our CMS available for another system, leaving you full freedom to design and render your content using the framework of your choice. We affectionately call this service the "Headless API".</p><p>Using the Headless API you can generate ready-to-go HTML content fragments or dynamic Javascript modules. You can then easily insert these fragments into any webpage or single-page application. Use these fragments to seamlessly integrate, reuse, syndicate or publish your content from your CoreMedia CMS anywhere.</p><p><img cms-src="coremedia:///image/2662/data" alt="Scrum" class="float--left"/></p><h2>How does it work?</h2><p>The Headless API defines a simple REST API to access content from the CoreMedia repository. On the server side the content is transformed via GraphQL queries before being returned to the client as JSON response. On the client side, simply parse the JSON response and process it as you please.</p><p>You can customize the GraphQL queries to tailor the returned JSON to your application's needs.</p><p>The first step is to define a schema, which maps from the content properties in the repository scheme to the attributes that you would like to extract. This can be done manually or with the help of a schema generator.</p><p>Then you define a set of GraphQL queries which will be matched against the schema.</p><p>The schema and query set are either deployed alongside the headless server or installed in the CoreMedia repository. The headless server can be started either by Spring Boot or as a Tomcat webapp.</p><p>On the client side, simply request the service's URLs and process the JSON response with whatever technology you prefer.</p><h2>Resources</h2><p>Interested in a deeper understanding of CaaS in CoreMedia? See what we’ve cooked up for you in our <a href="#none" cms-href="coremedia:///page/home~2450">CoreMedia Labs</a>.</p><ul><li><a href="https://labs.coremedia.com/"><strong>Github project</strong></a>: Headless Server as source code, plus a React client as an example</li><li><a href="https://labs.coremedia.com/wiki"><strong>Technical wiki</strong></a>: Documentation on installing and customizing the Headless Server, plus documentation on the example React client</li></ul>`,
      teaserTitle: 'CoreMedia CaaS',
      teaserText:
        'Using the Headless API you can generate ready-to-go HTML content fragments or dynamic Javascript modules. You can then easily insert these fragments into any webpage or single-page application. Use these fragments to seamlessly integrate, reuse, syndicate or publish your content from your CoreMedia CMS anywhere.',
      pictures: [
        {
          title: 'Lego',
          alt: 'Lego',
          link: 'coremedia:///image/2658/data',
        },
      ],
    };
    const params = { color: 'blue' };
    let props = result.createProps({ data, params });
    expect(props).toMatchSnapshot();
    delete data.pictures;
    props = result.createProps({ data });
    expect(props).toMatchSnapshot();
  });

  it('should return matching config for shoppablevideo', () => {
    const result = getConfig('shoppablevideo');
    expect(result).toMatchSnapshot();
    const data = {
      teaserTitle: 'Teaser Title',
      picture: {
        title: 'Summer Dresses Shoppable Video Picture',
        alt: 'Summer Dresses Shoppable Video Picture',
        link: 'coremedia:///image/6188/data',
      },
      link: 'coremedia:///media/6200/data',
      timeLine: {
        sequences: [
          {
            position: 4,
            startTimeMillis: 18000,
            target: {
              _id: 'coremedia:///cap/content/6196',
              teaserTitle: 'HKMX DK Sweater',
              teaserText:
                'This warm sweater from our Doutzen collection is ideal for wearing after your workout. It will keep nice and warm even on cold days. Combine with matching items from the DK collection.',
              picture: {
                title: 'Sweater',
                alt: 'Sweater',
                link: 'coremedia:///image/6226/data',
              },
              price: 42.99,
            },
          },
        ],
      },
    };
    const params = { color: 'blue' };
    let props = result.createProps({ data, params });
    expect(props).toMatchSnapshot();
    delete data.picture;
    props = result.createProps({ data });
    expect(props).toMatchSnapshot();
  });

  it('should throw Error', () => {
    const getUndefinedConfig = () => getConfig('undefined');
    expect(getUndefinedConfig).toThrowErrorMatchingSnapshot();
  });
});
