import { mount, RouterLinkStub, VueWrapper } from '@vue/test-utils';
import Header from '@/components/layout/Header.vue';

describe('Header', () => {
  let wrapper: VueWrapper<any>;

  beforeEach(async () => {
    wrapper = mount(Header, {
      global: {
        stubs: {
          RouterLink: RouterLinkStub,
        },
      },
    });
  });

  it('should display menus', () => {
    const menuDivs = wrapper.findAll('[data-test=menu-item]');

    expect(menuDivs[0].text()).toEqual('Home');
    expect(menuDivs[1].text()).toEqual('Blog');
    expect(menuDivs[2].text()).toEqual('Portfolio');
    expect(menuDivs[3].text()).toEqual('Slides');
  });
});
