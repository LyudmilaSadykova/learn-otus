import { mount } from '@vue/test-utils';
import component from '../src/components/ProductCatalog.vue';
import { createTestingPinia } from '@pinia/testing';

describe('ProductCatalog component', () => {
    const buildWrapper = () => mount(component, {
        global: {
            plugins: [createTestingPinia()],
        },
    });

    it('mount without errors', () => {
        const wrapper = buildWrapper();
        expect(wrapper.exists()).toBe(true);
        expect(wrapper.element).toMatchSnapshot();
    });
    
});
