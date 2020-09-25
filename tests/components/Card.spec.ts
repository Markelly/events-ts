import Card from '@/components/Card.vue';
import { createLocalVue, shallowMount } from '@vue/test-utils';
import BootstrapVue from 'bootstrap-vue';

const localVue = createLocalVue();
localVue.use(BootstrapVue);

describe('Card.vue', () => {
  let wrapper: any;
  let event = {
    id: '1',
    favorite: false,
    date: { start: '2020-03-20' },
    images: [{ url: 'image/url' }]
  };

  beforeEach(() => {
    wrapper = shallowMount(Card, {
      localVue,
      propsData: {
        event
      },
      computed: {
        price: () => {
          return '100';
        },
        favoriteIcon: () => {
          return 'foo';
        },
        redirectIcon: () => {
          return 'bar';
        }
      }
    });
  });

  test('should render Card component', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('should redirect user to event page', () => {
    window.open = jest.fn();
    wrapper.find('[data-icon-redirect]').trigger('click');
    expect(window.open).toHaveBeenCalled();
  });
});
