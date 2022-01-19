let vm = require('vm');
function filterJobs(jobs, filter) {
  let filteredJobs = [];
  for (let job of jobs) {
    if (vm.runInNewContext(filter, job) === true) {
      filteredJobs.push(job);
    }
  }
  return filteredJobs;
}
module.exports = filterJobs;
