import { HttpException, HttpStatus } from '@nestjs/common';
import * as dayjs from 'dayjs';

function formatToISODateString(date) {
  return dayjs(date).format('YYYY-MM-DD');
}

function formatToLocalDateString(date) {
  return dayjs(date).format('DD-MM-YYYY');
}

function getMonthStartDate(dateFrom) {
  const date = new Date(dateFrom);
  const firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
  return firstDay;
}

function getMonthEndDate(dateTo) {
  const date = new Date(dateTo);
  const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);
  return lastDay;
}

function getCurrentMonthStartDate() {
  const date = new Date();
  const firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
  return firstDay;
}

function getCurrentMonthEndDate() {
  const date = new Date();
  const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);
  return lastDay;
}

export function getMonthRangeFromQuery(query: any) {
  const dateFrom = query.dateFrom
    ? getMonthStartDate(query.dateFrom)
    : getCurrentMonthStartDate();
  const dateTo = query.dateTo
    ? getMonthEndDate(query.dateTo)
    : getCurrentMonthEndDate();

  if (dateTo.getTime() < dateFrom.getTime()) {
    throw new HttpException(
      'dateTo should be greater than dateFrom',
      HttpStatus.BAD_REQUEST,
    );
  }
  return {
    dateFrom: formatToISODateString(dateFrom),
    dateTo: formatToISODateString(dateTo),
  };
}

export function getYearsList(dateFrom, dateTo) {
  const startYear = dayjs(dateFrom).year();
  const endYear = dayjs(dateTo).year();
  const yearList = Array();
  for (let i = startYear; i <= endYear; i++) {
    yearList.push(i);
  }
  return yearList;
}

export function getMonthFromDate(date) {
  return dayjs(date).month();
}

export function generateDateSeries(dateFrom, dateTo) {
  const startDate = new Date(dateFrom);
  const endDate = new Date(dateTo);
  if (endDate < startDate) {
    throw new HttpException(
      'dateTo should be greater than dateFrom',
      HttpStatus.BAD_REQUEST,
    );
  }
  let datesArr = [];
  for (const dt = startDate; dt <= endDate; dt.setDate(dt.getDate() + 1)) {
    datesArr.push(formatToLocalDateString(new Date(dt)));
  }
  return datesArr;
}

export function getCurrentUTCTimestamp() {
  return new Date().toISOString();
}

export function toLocalDateFormat(date) {
  return dayjs(date).format('DD/MM/YYYY');
}
