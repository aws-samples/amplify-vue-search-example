import { shallowMount } from '@vue/test-utils';
import Welcome from '@/views/Welcome.vue';

describe('Welcome.vue', () => {
  it('renders Welcome component', () => {
    const wrapper = shallowMount(Welcome);
    const msg = 'Welcome Search Books Sample!';
    expect(wrapper.text()).toMatch(msg);
  });
});
