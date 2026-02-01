import { useState } from "react";
import { Box, TextField, Typography } from "@mui/material";

import { Button, DatePicker } from "@/shared/components";
import { useNotification } from "@/hooks";
import { spacing, colors, borderRadius, getSpacing } from "@/styles/tokens";

const BookingForm = () => {
  const { showSuccess } = useNotification();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    bookingDate: [null, null] as [Date | null, Date | null],
    comment: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleDateChange = (date: Date | null | [Date | null, Date | null]) => {
    setFormData((prev) => ({
      ...prev,
      bookingDate: Array.isArray(date) ? date : [date, null],
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log("Booking submitted:", formData);
    showSuccess("Form submitted successfully!");
    setFormData({
      name: "",
      email: "",
      bookingDate: [null, null],
      comment: "",
    });
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
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
          name="name"
          label="Name"
          required
          value={formData.name}
          onChange={handleChange}
          fullWidth
        />

        <TextField
          name="email"
          label="Email"
          type="email"
          required
          value={formData.email}
          onChange={handleChange}
          fullWidth
        />

        <DatePicker
          label="Booking date"
          value={formData.bookingDate}
          onChange={handleDateChange}
          required
          name="bookingDate"
          selectsRange
        />

        <TextField
          name="comment"
          label="Comment"
          multiline
          rows={1}
          value={formData.comment}
          onChange={handleChange}
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
