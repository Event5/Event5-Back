// DASHBOARD
const getDataMock = [
  {
    organization: {
      id: 1,
      name: 'Facebook',
      user_id: 3,
    },
    events: [
      {
        id: 1,
        event_name: 'React',
        url: 'react-event',
        event_start_date: 'Sun Feb 28 2010 05:30:00 GMT+0530 (IST)',
        template: 1,
        user_id: 3,
        organization_id: 1,
        organizers: [
          {
            id: 3,
            username: 'Mario',
            email: 'mario@gmail.com',
            type_user: 'organizer',
          },
          {
            id: 4,
            username: 'juan',
            email: 'juan@gmail.com',
            type_user: 'organizer',
          },
        ],
      },
    ],
  },
];

class GetDataServiceMock {
  constructor() {}

  getAdmin() {
    return Promise.resolve(getDataMock[0]);
  }
  getOrganizer() {
    return Promise.resolve(getDataMock[0]);
  }
  getIdEvent() {
    return Promise.resolve(getDataMock[0]);
  }
  getUrlEvent() {
    return Promise.resolve(getDataMock[0]);
  }
  get() {
    return Promise.resolve(getDataMock[0]);
  }
  create() {
    return Promise.resolve(getDataMock[0]);
  }
  update() {
    return Promise.resolve(getDataMock[0]);
  }
}

module.exports = {
  GetDataServiceMock,
  getDataMock,
};
