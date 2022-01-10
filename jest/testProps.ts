export const mockNav = jest.fn();
export const mockGoBack = jest.fn();
export const createTestProps = (props: any) => ({
  navigation: {
    navigate: mockNav,
    goBack: mockGoBack,
  },
  ...props,
});

export const props = createTestProps({});
