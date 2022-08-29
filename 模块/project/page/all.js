//这是一个入口文件负责其他全部文件的导入
// import a from './a.js';
// import b from './b.js';
// export { a, b };
//太麻烦

// export * from './a.js';
// export * from './b.js';
//忽略了default

export * as a from './a.js';
export * as b from './b.js';
//将a，b作为一个module导入，包含default
