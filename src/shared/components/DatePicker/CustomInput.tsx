import { forwardRef } from "react";
import { colors, spacing, borderRadius, typography } from "@/styles/tokens";
import type { CustomInputProps } from "./types";

export const CustomInput = forwardRef<HTMLDivElement, CustomInputProps>(
  ({ value, onClick, placeholder, label, required, className }, ref) => {
    return (
      <div
        ref={ref}
        onClick={onClick}
        className={`custom-datepicker-input ${className || ""}`}
        style={{
          position: "relative",
          width: "100%",
          backgroundColor: colors.background.tertiary,
          borderRadius: borderRadius.md,
          cursor: "pointer",
          minHeight: "56px",
          display: "flex",
          alignItems: "center",
          transition: "background-color 0.2s ease",
        }}
      >
        <div
          style={{
            padding: spacing[5],
            width: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            minHeight: "56px",
          }}
        >
          {(!value || value === "") && (
            <label
              style={{
                fontSize: typography.fontSizes.base,
                fontWeight: typography.fontWeights.regular,
                lineHeight: typography.lineHeights.normal,
                color: colors.text.tertiary,
                margin: 0,
                padding: 0,
                pointerEvents: "none",
                display: "block",
              }}
            >
              {label || placeholder}
              {required ? " *" : ""}
            </label>
          )}
          {value && value !== "" && (
            <div
              style={{
                fontSize: typography.fontSizes.base,
                fontWeight: typography.fontWeights.regular,
                lineHeight: typography.lineHeights.normal,
                color: colors.text.primary,
              }}
            >
              {value}
            </div>
          )}
        </div>
      </div>
    );
  },
);

CustomInput.displayName = "CustomInput";
