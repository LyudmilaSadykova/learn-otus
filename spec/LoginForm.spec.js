import { mount } from '@vue/test-utils';
import component from '../src/view/LoginForm.vue';
import { createTestingPinia } from '@pinia/testing';
import { useAccountStore } from '../src/store/user';
import { vi } from 'vitest';


describe('LoginForm component', () => {
    const buildWrapper = () => mount(component, {
        global: {
            plugins: [createTestingPinia({
                createSpy: vi.fn,
                stubActions: false,
                initialState: {
                    isAuth: false
                }}
            )],
        },
    });

    it('mount without errors', () => {
        const wrapper = buildWrapper();
        expect(wrapper.exists()).toBe(true);
        expect(wrapper.element).toMatchSnapshot();
    });

    it('find login header', () => {
        const wrapper = buildWrapper();
        expect(wrapper.text()).contain('Войти в аккаунт');
    });

    it('find login button',() => {
        const wrapper = buildWrapper();
        const button = wrapper.find('button');
        expect(button.exists()).toBe(true);
    });

    it('emit input fields', async () => {
        const wrapper = buildWrapper();

        const inputLogin = wrapper.find('[name="login"]');
        expect(inputLogin.exists()).toBe(true);
        await inputLogin.setValue('admin');

        const inputPassword = wrapper.find('[name="password"]');
        expect(inputPassword.exists()).toBe(true);
        await inputPassword.setValue('123456')

        // const button = wrapper.find('button');
        // await button.trigger('click');

        const account = useAccountStore()
        expect(account.isAuth).toBe(false)
        
        account.loginUser('admin123456')
        expect(account.loginUser).toHaveBeenCalledTimes(1)
        expect(account.isAuth).toBe(true)

        expect(wrapper.text()).contain('Заполните данные профиля для оформления заказа');
    });
});