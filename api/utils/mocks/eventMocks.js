const eventsMock = [
  {
    id: 1,
    name: 'Node',
    url: 'event5.com/nodejs',
    day: 1597902641,
    template: 'one',
    user_id: 1,
  },
];

function getEvent(id) {
  const event = eventsMock.find((event) => event.id === id);
  if (!event) {
    console.log('No event!!!!!!!');
  }

  return event;
}

function getEvents() {
  return eventsMock;
}

function createEvent(event) {
  event.id = eventsMock.length + 1;
  return eventsMock.push(event);
}
