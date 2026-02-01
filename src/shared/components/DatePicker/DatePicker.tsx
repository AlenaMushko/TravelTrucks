import { forwardRef, useMemo } from "react";
import DatePickerLib from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { CustomInput } from "./CustomInput";
import { formatDate, formatDateRange } from "./utils";
import type { DatePickerProps } from "./types";
import "./DatePicker.css";

const DatePickerComponent = ({
  label = "Booking date",
  value,
  onChange,
  required = false,
  name,
  selectsRange = true,
}: DatePickerProps) => {
  const today = useMemo(() => {
    const date = new Date();
    date.setHours(0, 0, 0, 0);
    return date;
  }, []);

  const startDate =
    selectsRange && Array.isArray(value)
      ? value[0]
      : !selectsRange && !Array.isArray(value)
        ? value
        : null;
  const endDate = selectsRange && Array.isArray(value) ? value[1] : null;

  const handleChange = (dates: Date | [Date | null, Date | null] | null) => {
    if (selectsRange) {
      if (Array.isArray(dates)) {
        onChange(dates);
      } else if (dates === null) {
        onChange([null, null]);
      }
    } else {
      onChange(dates as Date | null);
    }
  };

  const displayValue = selectsRange
    ? formatDateRange(startDate, endDate)
    : formatDate(startDate);

  const hiddenInputValue = useMemo(() => {
    if (selectsRange && Array.isArray(value)) {
      return displayValue;
    }
    if (!selectsRange && value && !Array.isArray(value)) {
      return formatDate(value);
    }
    return "";
  }, [selectsRange, value, displayValue]);

  const CustomInputWrapper = useMemo(
    () =>
      forwardRef<HTMLDivElement, any>((props: any, ref) => {
        return (
          <CustomInput
            {...props}
            ref={ref}
            value={displayValue}
            label={label}
            placeholder={label}
            required={required}
            className={props.className || ""}
          />
        );
      }),
    [displayValue, label, required],
  );

  CustomInputWrapper.displayName = "CustomInputWrapper";

  return (
    <div style={{ position: "relative", width: "100%" }}>
      {name && (
        <input type="hidden" name={name} value={hiddenInputValue} />
      )}
      <DatePickerLib
        {...({
          selected: selectsRange ? startDate : (value as Date | null),
          startDate: selectsRange ? startDate : undefined,
          endDate: selectsRange ? endDate : undefined,
          onChange: handleChange,
          ...(selectsRange ? { selectsRange: true } : {}),
          minDate: today,
          dateFormat: "dd/MM/yyyy",
          placeholderText: label,
          customInput: <CustomInputWrapper />,
          showPopperArrow: false,
          popperPlacement: "bottom-start",
          calendarClassName: "custom-datepicker-calendar",
          shouldCloseOnSelect: !selectsRange,
          selectsMultiple: false,
          dayClassName: (date: Date) => {
            if (
              date.getDate() === today.getDate() &&
              date.getMonth() === today.getMonth() &&
              date.getFullYear() === today.getFullYear()
            ) {
              return "custom-datepicker-today";
            }
            return "";
          },
        } as any)}
      />
    </div>
  );
};

export default DatePickerComponent;
