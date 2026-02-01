import { useState } from "react";
import { Box, TextField, Typography } from "@mui/material";

import { Button } from "@/shared/components";
import { spacing, colors, borderRadius, typography } from "@/styles/tokens";

const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    bookingDate: "",
    comment: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement booking submission logic
    console.log("Booking submitted:", formData);
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        backgroundColor: colors.background.white,
        borderRadius: borderRadius.lg,
        padding: spacing[6],
        boxShadow: "0px 1px 3px rgba(16, 24, 40, 0.1), 0px 1px 2px rgba(16, 24, 40, 0.06)",
        display: "flex",
        flexDirection: "column",
        gap: spacing[6],
        height: "fit-content",
      }}
    >
      <Box>
        <Typography
          variant="h3"
          component="h2"
          sx={{
            mb: spacing[2],
            fontWeight: typography.fontWeights.semibold,
            fontSize: typography.fontSizes["2xl"],
            lineHeight: typography.lineHeights.tight,
          }}
        >
          Book your campervan now
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: colors.text.secondary,
            fontSize: typography.fontSizes.base,
            lineHeight: typography.lineHeights.normal,
          }}
        >
          Stay connected! We are always ready to help you.
        </Typography>
      </Box>

      <TextField
        name="name"
        label="Name"
        required
        value={formData.name}
        onChange={handleChange}
        fullWidth
        sx={{
          "& .MuiOutlinedInput-root": {
            backgroundColor: colors.background.secondary,
            borderRadius: borderRadius.md,
            "& fieldset": {
              borderColor: "transparent",
            },
            "&:hover fieldset": {
              borderColor: "transparent",
            },
            "&.Mui-focused fieldset": {
              borderColor: colors.accent.primary,
            },
          },
        }}
      />

      <TextField
        name="email"
        label="Email"
        type="email"
        required
        value={formData.email}
        onChange={handleChange}
        fullWidth
        sx={{
          "& .MuiOutlinedInput-root": {
            backgroundColor: colors.background.secondary,
            borderRadius: borderRadius.md,
            "& fieldset": {
              borderColor: "transparent",
            },
            "&:hover fieldset": {
              borderColor: "transparent",
            },
            "&.Mui-focused fieldset": {
              borderColor: colors.accent.primary,
            },
          },
        }}
      />

      <TextField
        name="bookingDate"
        label="Booking date"
        type="date"
        required
        value={formData.bookingDate}
        onChange={handleChange}
        fullWidth
        InputLabelProps={{
          shrink: true,
        }}
        sx={{
          "& .MuiOutlinedInput-root": {
            backgroundColor: colors.background.secondary,
            borderRadius: borderRadius.md,
            "& fieldset": {
              borderColor: "transparent",
            },
            "&:hover fieldset": {
              borderColor: "transparent",
            },
            "&.Mui-focused fieldset": {
              borderColor: colors.accent.primary,
            },
          },
        }}
      />

      <TextField
        name="comment"
        label="Comment"
        multiline
        rows={4}
        value={formData.comment}
        onChange={handleChange}
        fullWidth
        sx={{
          "& .MuiOutlinedInput-root": {
            backgroundColor: colors.background.secondary,
            borderRadius: borderRadius.md,
            "& fieldset": {
              borderColor: "transparent",
            },
            "&:hover fieldset": {
              borderColor: "transparent",
            },
            "&.Mui-focused fieldset": {
              borderColor: colors.accent.primary,
            },
          },
        }}
      />

      <Button
        text="Send"
        type="submit"
        variant="contained"
        sx={{
          mt: spacing[2],
          width: "100%",
        }}
      />
    </Box>
  );
};

export default BookingForm;
