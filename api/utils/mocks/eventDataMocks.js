exports.eventDataMock = [
  {
    id: 1,
    logo_url: 'http://images.com/logo_event',
    background_url: 'http://images.com/background_url',
    title: 'React the Library of the Future',
    description: 'React is a Library created at Facebook and 100% Open Source',
    event_image_url: 'http://images.com/event_image_url',
    event_id: 1,
  },
];

// function createEventData(event) {
//   const eventObj = Object.assign({}, event);
//   eventObj.event_id = event.id;
//   delete eventObj.id;

//   const newEventData = Object.assign(
//     { id: eventDataMock.length + 1 },
//     eventObj
//   );
//   // event.id = eventsMock.length + 1;
//   eventDataMock.push(newEventData);
//   const eventCreated = eventDataMock.find((val) => val.id === newEventData.id);
//   return eventCreated;
// }

// module.exports = {
//   eventDataMock,
// };
