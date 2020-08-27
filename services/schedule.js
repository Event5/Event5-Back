const RemoteStore = require('../lib/remoteStore');

class ScheduleService {
  constructor() {
    this.remoteStore = new RemoteStore();
    this.table = 'schedule';
  }

  async createSchedule(schedule) {
    const createdSchedule = await this.remoteStore.create(this.table, schedule);
    return createdSchedule;
  }
}

module.exports = ScheduleService;
