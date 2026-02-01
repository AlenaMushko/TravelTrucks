export const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

export const VALIDATION_MESSAGES = {
  REQUIRED_FIELD: "This field is required",
  EMAIL_FORMAT: "Invalid email format. Please enter a valid email address.",
  BOOKING_DATE_REQUIRED: "Please select booking dates",
} as const;

export interface BookingFormValues {
  name: string;
  email: string;
  bookingDate: [Date | null, Date | null];
  comment: string;
}

export const validateBookingForm = (values: BookingFormValues) => {
  const errors: Partial<Record<keyof BookingFormValues, string>> = {};

  if (!values.name || values.name.trim() === "") {
    errors.name = VALIDATION_MESSAGES.REQUIRED_FIELD;
  }
  if (!values.email || values.email.trim() === "") {
    errors.email = VALIDATION_MESSAGES.REQUIRED_FIELD;
  } else if (!EMAIL_REGEX.test(values.email)) {
    errors.email = VALIDATION_MESSAGES.EMAIL_FORMAT;
  }
  if (!values.bookingDate || !values.bookingDate[0] || !values.bookingDate[1]) {
    errors.bookingDate = VALIDATION_MESSAGES.BOOKING_DATE_REQUIRED;
  }
  return errors;
};

export const validateName = (name: string): string | true => {
  if (!name || name.trim() === "") {
    return VALIDATION_MESSAGES.REQUIRED_FIELD;
  }
  return true;
};

export const validateEmail = (email: string): string | true => {
  if (!email || email.trim() === "") {
    return VALIDATION_MESSAGES.REQUIRED_FIELD;
  }
  if (!EMAIL_REGEX.test(email)) {
    return VALIDATION_MESSAGES.EMAIL_FORMAT;
  }
  return true;
};

export const validateBookingDate = (
  bookingDate: [Date | null, Date | null] | undefined,
): string | true => {
  if (!bookingDate || !bookingDate[0] || !bookingDate[1]) {
    return VALIDATION_MESSAGES.BOOKING_DATE_REQUIRED;
  }
  return true;
};
