import moment from 'moment'

const convertDateToOurFormat = (date) => {
    return (date) ? moment(date).format('MMMM D, [at] YYYY h:mm a') : null
}

export const UtilServices = {
    convertDateToOurFormat,
}