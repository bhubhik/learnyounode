import moment from 'moment';
import chalk from 'chalk';
const date = new Date();
console.log(moment(date).format('MM/DD/YYYY'));
console.log(
  'The time is: ' + chalk.bgCyan.black.bold(moment(date).format('h:mm:ss'))
);
