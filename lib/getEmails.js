const RemoteStore = require('./remoteStore');
const remoteStore = new RemoteStore();

async function getEmails(id) {
  const data = `?event_id=${id}`;
  let registryResponse = await remoteStore.get('registry-event', data);

  if (Array.isArray(registryResponse)) {
    registryResponse = registryResponse.map((a) => a.email);
  }

  return registryResponse;
}
async function getEvent(id) {
  let eventResponse = await remoteStore.get('event-detail', id);

  return eventResponse;
}

module.exports = {
  getEmails,
  getEvent,
};
