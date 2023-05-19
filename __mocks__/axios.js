export default {
  get: jest.fn(() => Promise.resolve({ data: {} })),
  // Include all other methods that you use in your project
  post: jest.fn(() => Promise.resolve({ data: {} })),
  put: jest.fn(() => Promise.resolve({ data: {} })),
  delete: jest.fn(() => Promise.resolve({ data: {} })),
  create: jest.fn(() => Promise.resolve({ data: {} })),
};
