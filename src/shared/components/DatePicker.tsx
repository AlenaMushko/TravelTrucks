import { useState, useRef, useEffect } from "react";
import { Box, Typography } from "@mui/material";

import { colors, spacing, borderRadius } from "@/styles/tokens";

interface DatePickerProps {
  label?: string;
  value: Date | null;
  onChange: (date: Date | null) => void;
  required?: boolean;
  name?: string;
}

const DatePicker = ({
  label = "Booking date",
  value,
  onChange,
  required = false,
  name,
}: DatePickerProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [openDirection, setOpenDirection] = useState<"up" | "down">("down");
  const containerRef = useRef<HTMLDivElement>(null);
  const calendarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen && containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const calendarHeight = 350;
      const spaceBelow = window.innerHeight - rect.bottom;
      const spaceAbove = rect.top;

      if (spaceBelow < calendarHeight + 20 && spaceAbove > spaceBelow) {
        setOpenDirection("up");
      } else {
        setOpenDirection("down");
      }
    }
  }, [isOpen]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;

      if (
        containerRef.current &&
        !containerRef.current.contains(target) &&
        calendarRef.current &&
        !calendarRef.current.contains(target)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      setTimeout(() => {
        document.addEventListener("mousedown", handleClickOutside);
      }, 0);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const formatDate = (date: Date | null): string => {
    if (!date) return "";
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  const getDaysInMonth = (date: Date): number => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (date: Date): number => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  };

  const isPastDate = (date: Date): boolean => {
    const checkDate = new Date(date);
    checkDate.setHours(0, 0, 0, 0);
    return checkDate < today;
  };

  const isSameDay = (date1: Date, date2: Date): boolean => {
    return (
      date1.getDate() === date2.getDate() &&
      date1.getMonth() === date2.getMonth() &&
      date1.getFullYear() === date2.getFullYear()
    );
  };

  const handleDateClick = (day: number) => {
    const selectedDate = new Date(
      currentMonth.getFullYear(),
      currentMonth.getMonth(),
      day,
    );
    if (!isPastDate(selectedDate)) {
      onChange(selectedDate);
      setIsOpen(false);
    }
  };

  const handlePrevMonth = () => {
    setCurrentMonth(
      new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1),
    );
  };

  const handleNextMonth = () => {
    setCurrentMonth(
      new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1),
    );
  };

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const weekDays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  const daysInMonth = getDaysInMonth(currentMonth);
  const firstDay = getFirstDayOfMonth(currentMonth);

  const adjustedFirstDay = firstDay === 0 ? 6 : firstDay - 1;

  const prevMonth = new Date(
    currentMonth.getFullYear(),
    currentMonth.getMonth() - 1,
    0,
  );
  const prevMonthDays = getDaysInMonth(prevMonth);

  const calendarDays: Array<{
    day: number;
    isCurrentMonth: boolean;
    isNextMonth: boolean;
  }> = [];

  for (let i = adjustedFirstDay - 1; i >= 0; i--) {
    calendarDays.push({
      day: prevMonthDays - i,
      isCurrentMonth: false,
      isNextMonth: false,
    });
  }

  for (let day = 1; day <= daysInMonth; day++) {
    calendarDays.push({
      day,
      isCurrentMonth: true,
      isNextMonth: false,
    });
  }

  const remainingCells = 42 - calendarDays.length;
  for (let day = 1; day <= remainingCells; day++) {
    calendarDays.push({
      day,
      isCurrentMonth: false,
      isNextMonth: true,
    });
  }

  const handleInputClick = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <Box sx={{ position: "relative", width: "100%" }} ref={containerRef}>
      <Box
        onClick={handleInputClick}
        sx={{
          position: "relative",
          width: "100%",
          backgroundColor: colors.background.tertiary,
          borderRadius: borderRadius.md,
          padding: spacing[5],
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          minHeight: "56px",
          "&:hover": {
            backgroundColor: colors.background.secondary,
          },
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "column", flex: 1 }}>
          {!value && (
            <Typography
              sx={{
                fontSize: "0.75rem",
                color: colors.text.tertiary,
                lineHeight: 1,
              }}
            >
              {label}
              {required && " *"}
            </Typography>
          )}
          {value && (
            <Typography
              sx={{
                fontSize: "1rem",
                fontWeight: 400,
                lineHeight: 1.5,
                color: colors.text.primary,
              }}
            >
              {formatDate(value)}
            </Typography>
          )}
        </Box>
        <input
          type="hidden"
          name={name}
          value={value ? formatDate(value) : ""}
        />
      </Box>

      {isOpen && (
        <Box
          ref={calendarRef}
          onClick={(e) => e.stopPropagation()}
          sx={{
            position: "absolute",
            ...(openDirection === "down"
              ? {
                  top: "100%",
                  marginTop: spacing[2],
                }
              : {
                  bottom: "100%",
                  marginBottom: spacing[2],
                }),
            left: 0,
            zIndex: 1000,
            backgroundColor: colors.background.white,
            borderRadius: borderRadius.md,
            boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.15)",
            padding: spacing[4],
            minWidth: "300px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              mb: spacing[4],
            }}
          >
            <Box
              onClick={handlePrevMonth}
              sx={{
                cursor: "pointer",
                userSelect: "none",
                padding: spacing[1],
                "&:hover": {
                  backgroundColor: colors.background.secondary,
                  borderRadius: borderRadius.xs,
                },
              }}
            >
              <Typography
                sx={{
                  fontSize: "1.25rem",
                  color: colors.text.primary,
                  lineHeight: 1,
                }}
              >
                ‹
              </Typography>
            </Box>
            <Typography
              sx={{
                fontSize: "1rem",
                fontWeight: 600,
                color: colors.text.primary,
              }}
            >
              {monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}
            </Typography>
            <Box
              onClick={handleNextMonth}
              sx={{
                cursor: "pointer",
                userSelect: "none",
                padding: spacing[1],
                "&:hover": {
                  backgroundColor: colors.background.secondary,
                  borderRadius: borderRadius.xs,
                },
              }}
            >
              <Typography
                sx={{
                  fontSize: "1.25rem",
                  color: colors.text.primary,
                  lineHeight: 1,
                }}
              >
                ›
              </Typography>
            </Box>
          </Box>

          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "repeat(7, 1fr)",
              gap: spacing[1],
              mb: spacing[2],
            }}
          >
            {weekDays.map((day) => (
              <Box
                key={day}
                sx={{
                  textAlign: "center",
                  padding: spacing[1],
                }}
              >
                <Typography
                  sx={{
                    fontSize: "0.75rem",
                    fontWeight: 600,
                    color: colors.text.secondary,
                  }}
                >
                  {day}
                </Typography>
              </Box>
            ))}
          </Box>

          {/* Calendar Days */}
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "repeat(7, 1fr)",
              gap: spacing[1],
            }}
          >
            {calendarDays.map((item, index) => {
              const date = new Date(
                currentMonth.getFullYear(),
                item.isNextMonth
                  ? currentMonth.getMonth() + 1
                  : item.isCurrentMonth
                    ? currentMonth.getMonth()
                    : currentMonth.getMonth() - 1,
                item.day,
              );

              const isPast = isPastDate(date);
              const isSelected = value && isSameDay(date, value);
              const isToday = isSameDay(date, today);
              const isClickable = item.isCurrentMonth && !isPast;

              return (
                <Box
                  key={index}
                  onClick={() => isClickable && handleDateClick(item.day)}
                  sx={{
                    textAlign: "center",
                    padding: spacing[2],
                    cursor: isClickable ? "pointer" : "default",
                    borderRadius: borderRadius.xs,
                    backgroundColor: isSelected
                      ? colors.primary
                      : "transparent",
                    color: !item.isCurrentMonth
                      ? colors.text.tertiary
                      : isPast
                        ? colors.text.tertiary
                        : isSelected
                          ? colors.background.white
                          : colors.text.primary,
                    opacity: !item.isCurrentMonth || isPast ? 0.4 : 1,
                    position: "relative",
                    "&:hover": {
                      backgroundColor: isClickable
                        ? isSelected
                          ? colors.primary
                          : colors.background.secondary
                        : "transparent",
                    },
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: "0.875rem",
                      fontWeight:
                        isToday && !isSelected && item.isCurrentMonth
                          ? 600
                          : "normal",
                    }}
                  >
                    {item.day}
                  </Typography>
                  {isToday && !isSelected && item.isCurrentMonth && (
                    <Box
                      sx={{
                        position: "absolute",
                        bottom: spacing[1],
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "4px",
                        height: "4px",
                        borderRadius: "50%",
                        backgroundColor: colors.primary,
                      }}
                    />
                  )}
                </Box>
              );
            })}
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default DatePicker;
