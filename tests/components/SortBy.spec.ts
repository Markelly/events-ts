import SortBy from '@/components/SortBy.vue';
import { createLocalVue, shallowMount, Wrapper } from '@vue/test-utils';
import BootstrapVue from 'bootstrap-vue';

const localVue = createLocalVue();
localVue.use(BootstrapVue);

describe('<SortBy/>', () => {
  let wrapper: any;

  beforeEach(() => {
    wrapper = shallowMount(SortBy, {
      localVue
    });
  });

  test('should render SortBy component', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('should emit sortEvents event', () => {
    wrapper.vm.sort('date,asc');
    expect(wrapper.emitted('sort', 'date,asc')).toBeTruthy();
  });
});
