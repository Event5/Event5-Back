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

  async updateSchedule(schedule) {
    this.table = 'schedule-detail';
    const updatedSchedule = await this.remoteStore.update(this.table, schedule);
    return updatedSchedule;
  }
}

module.exports = ScheduleService;
