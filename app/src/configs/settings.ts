import Store from 'electron-store';

const store = new Store({
  watch: true,
  schema: {
    isFirstTime: {
      type: 'boolean',
      default: true,
    },
    userPreferences: {
      type: 'object',
      default: {
        language: 'auto',
      },
    },
  },
});

console.log(store.path);
export default store;
