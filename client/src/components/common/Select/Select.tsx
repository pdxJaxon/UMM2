import * as React from "react";

export const createOptionTestId = (value) => `option-${value}`;

export type Option = {
  label: string;
  value: string;
};

export type SelectProps = {
  onChange: (value: string) => void;
  options: Option[];
};

export const Select: React.FunctionComponent<SelectProps> = React.memo(
  ({ options, onChange }) => (
    <div>
      <select
        data-testid="select"
        onChange={(evt) => {
          console.log("called");
          onChange(evt.target.value);
        }}
      >
        {options.map(({ label, value }) => (
          <option
            data-testid={createOptionTestId(value)}
            key={value}
            value={value}
          >
            {label}
          </option>
        ))}
      </select>
    </div>
  )
);
