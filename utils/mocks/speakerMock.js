const speakerMock = [
  {
    name: 'Ramon',
    biography: 'Ramon is google developer expert',
    role: 'Angular expert',
    twitter: '@ramon',
    photo_url: 'http://image.com/photo_ramon',
    schedule_id: [1],
  },
];

class SpeakerServiceMock {
  constructor() {}

  getSpeaker() {
    return Promise.resolve(speakerMock);
  }

  createSpeaker() {
    return Promise.resolve(speakerMock[0]);
  }

  updateSpeaker() {
    return Promise.resolve(speakerMock[0]);
  }

  get() {
    return Promise.resolve(speakerMock[0]);
  }

  create() {
    return Promise.resolve(speakerMock[0]);
  }
  update() {
    return Promise.resolve(speakerMock[0]);
  }
}

module.exports = {
  SpeakerServiceMock,
  speakerMock,
};
