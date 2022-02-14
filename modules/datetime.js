import { time } from "./mainprog.js";

import { DateTime } from '../node_modules/luxon/src/luxon.js';

const now = DateTime.now();
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const month = months[now.month - 1];
const currentTime = `${month} ${now.day}th ${now.year}, ${now.hour}:${now.minute}:${now.second}`;

export { now, months, month, currentTime };