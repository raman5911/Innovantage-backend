const { formatInTimeZone, utcToZonedTime, format } = require('date-fns-tz');

function format_date(date, timezone, format) {
    const formattedDate = formatInTimeZone(date, timezone, format);
    return formattedDate;
}

function format_date_in_user_time_zone(date, zone, formatString) {
    const zonedDate = utcToZonedTime(date, zone);
    const currentTime = format(zonedDate, formatString, { timeZone: zone });
    return currentTime;
}

function get_time_from_date(req_date) {
    const date = new Date(req_date);
    let hours = date.getHours(); 
    hours = hours < 10 ? "0" + hours : hours;

    let minutes = date.getMinutes();
    minutes = minutes < 10 ? "0" + minutes : minutes;

    const time = hours + ":" + minutes;
    return time;
}

module.exports = { format_date, format_date_in_user_time_zone, get_time_from_date }