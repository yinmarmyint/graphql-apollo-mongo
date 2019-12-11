import moment from 'moment';
import myanmarNumbers from 'myanmar-numbers';
import _ from 'lodash';
import {
  END_OF_DAY,
  END_OF_TOMORROW,
  START_OF_TOMORROW,
  START_OF_DAY,
} from '../variables/constants';

export const calculateDuration = deadline => {
  // const normalisedDate = moment.isMoment(date) ? date : moment(date);
  // const deadlineDate = moment(normalisedDate).add(deadline, 'days');

  const deadlineDate = moment.isMoment(deadline) ? deadline : moment(deadline);
  const now = moment().format();
  const exp = moment(deadlineDate);

  const days = exp.diff(now, 'days');
  // const hours = exp.subtract(days, 'days').diff(now, 'hours');
  // const minutes = exp.subtract(hours, 'hours').diff(now, 'minutes');

  // return {
  //   days,
  //   hours,
  //   minutes,
  // };
  return days;
};

export const formatCurrency = number => {
  if (number && _.isNumber(number)) {
    return number.toLocaleString();
  }
  return number;
};

export const getStartDate = val => {
  if (val === 'tomorrow') {
    return START_OF_TOMORROW;
  }
  return START_OF_DAY;
};

export const getEndDate = val => {
  if (val === 'tomorrow') {
    return END_OF_TOMORROW;
  }
  return END_OF_DAY;
};

export const convertToMyannarCode = val => {
  return myanmarNumbers(val, 'my');
};

export const getLotteryFormat = val => {
  let result = '';
  if (val) {
    const numberOnly = val.match(/\d+/g);

    const alphaOnly = val.replace(/[0-9]/g, '');

    result = `${alphaOnly} ${convertToMyannarCode(numberOnly)}`;
  }

  return result;
};
