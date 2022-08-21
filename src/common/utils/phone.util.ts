// import parsePhoneNumber from 'libphonenumber-js/mobile';

export function formatPhoneNumber(phoneNumber, countryCode) {
  // const phone = parsePhoneNumber(phoneNumber, countryCode);
  const phone = phoneNumber;
  if (phone && phone.isValid() === true) {
    return phone.number;
  } else {
    return '';
  }
}
