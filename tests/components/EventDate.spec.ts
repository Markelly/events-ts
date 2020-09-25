import EventDate from '@/components/EventDate.vue';
import { createLocalVue, shallowMount } from '@vue/test-utils';

const localVue = createLocalVue();

describe('<EventDate/>', () => {
  let wrapper: any;

  beforeEach(() => {
    wrapper = shallowMount(EventDate, {
      localVue,
      propsData: {
        EventDate: {
          start: {
            localDate: '2020-04-03'
          }
        }
      }
    });
  });

  test('should render the component', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
