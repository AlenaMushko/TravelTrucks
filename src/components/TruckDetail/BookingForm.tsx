import { useForm } from "react-hook-form";
import { Box, TextField, Typography } from "@mui/material";

import { Button, DatePicker } from "@/shared/components";
import { useNotification } from "@/hooks";
import {
  validateName,
  validateEmail,
  validateBookingDate,
  VALIDATION_MESSAGES,
  type BookingFormValues,
} from "@/utils/validation";
import { spacing, colors, borderRadius, getSpacing } from "@/styles/tokens";

const BookingForm = () => {
  const { showSuccess } = useNotification();

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    trigger,
    formState: { errors },
    reset,
  } = useForm<BookingFormValues>({
    mode: "onBlur",
    reValidateMode: "onChange",
    defaultValues: {
      name: "",
      email: "",
      bookingDate: [null, null],
      comment: "",
    },
  });

  const bookingDate = watch("bookingDate");

  const handleDateChange = (
    date: Date | null | [Date | null, Date | null],
  ) => {
    const newDate: [Date | null, Date | null] = Array.isArray(date)
      ? (date as [Date | null, Date | null])
      : [date, null];
    setValue("bookingDate", newDate, { shouldValidate: true });
    trigger("bookingDate");
  };

  const onSubmit = (data: BookingFormValues) => {
    console.log("Booking submitted:", data);
    showSuccess("Form submitted successfully!");
    reset();
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      sx={{
        backgroundColor: colors.background.white,
        borderRadius: borderRadius.xs,
        padding: spacing[11],
        border: `1px solid ${colors.border.default}`,
        display: "flex",
        flexDirection: "column",
        height: "fit-content",
      }}
    >
      <Box>
        <Typography
          variant="h4"
          component="h4"
          sx={{
            mb: spacing[1],
          }}
        >
          Book your campervan now
        </Typography>
        <Typography
          variant="h6"
          component="h5"
          sx={{
            color: colors.text.tertiary,
            mb: spacing[6],
          }}
        >
          Stay connected! We are always ready to help you.
        </Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: getSpacing(14),
          mb: getSpacing(14),
        }}
      >
        <TextField
          {...register("name", {
            required: VALIDATION_MESSAGES.REQUIRED_FIELD,
            validate: validateName,
          })}
          label="Name"
          required
          error={!!errors.name}
          helperText={errors.name?.message}
          fullWidth
        />

        <TextField
          {...register("email", {
            required: VALIDATION_MESSAGES.REQUIRED_FIELD,
            validate: validateEmail,
          })}
          label="Email"
          type="email"
          required
          error={!!errors.email}
          helperText={errors.email?.message}
          fullWidth
        />

        <Box>
          <input
            type="hidden"
            {...register("bookingDate", {
              validate: validateBookingDate,
            })}
          />
          <DatePicker
            label="Booking date"
            value={bookingDate}
            onChange={handleDateChange}
            required
            name="bookingDate"
            selectsRange
          />
          {errors.bookingDate && (
            <Typography
              variant="caption"
              sx={{
                color: colors.accent.primary,
                mt: spacing[1],
                ml: spacing[5],
                display: "block",
              }}
            >
              {errors.bookingDate.message}
            </Typography>
          )}
        </Box>

        <TextField
          {...register("comment")}
          label="Comment"
          multiline
          rows={1}
          fullWidth
        />
      </Box>

      <Button
        text="Send"
        type="submit"
        variant="contained"
        sx={{
          width: "fit-content",
          alignSelf: "center",
        }}
      />
    </Box>
  );
};

export default BookingForm;
