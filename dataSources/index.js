import manager from './manager';
// import pubsub from './pubsub';

export default (headers) => ({
  // pubsub,
  manager: () => manager(headers),
});
