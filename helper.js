export const setPageData = (store, { resource, slug }) => {
  if (process.browser) {
    setTimeout(() => {
      store.dispatch('set', { resource: resource, slug: slug })
    }, 350)
  } else {
    store.dispatch('set', { resource: resource, slug: slug })
  }
}

export const fullUrl = () => {
  return `${window.location.protocol}//${window.location.host}/${window.location.pathname}`
}

export const getFormattedDate = (date) => {
  const months = [
    // '',
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ]
  const dateObj = new Date(date)
  const y = dateObj.getFullYear()
  const mo = months[dateObj.getMonth()]
  const d = dateObj.getDate()
  const h =
    dateObj.getHours() > 12 ? dateObj.getHours() - 12 : dateObj.getHours()
  const m = dateObj.getMinutes() === 0 ? '00' : dateObj.getMinutes()
  const sign = dateObj.getHours() > 11 ? 'PM' : 'AM'
  return `${mo} ${d}, ${y} ${h}:${m}${sign}`
}
