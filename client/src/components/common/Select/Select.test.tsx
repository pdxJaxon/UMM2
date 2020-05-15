import * as React from "react";
import "@testing-library/jest-dom/extend-expect";
import { cleanup, render, fireEvent } from "@testing-library/react";

import { Select, SelectProps, createOptionTestId } from "./Select";

let defaultProps: SelectProps;

describe("Select", () => {
  beforeEach(() => {
    jest.resetAllMocks();
    defaultProps = {
      onChange: jest.fn(),
      options: [
        {
          label: "label1",
          value: "value1",
        },
        {
          label: "label2",
          value: "value2",
        },
      ],
    };
  });

  afterEach(cleanup);

  describe("Select", () => {
    it("renders options correctly", () => {
      const { getByTestId } = render(<Select {...defaultProps} />);
      expect(
        getByTestId(createOptionTestId(defaultProps.options[0].value))
      ).toBeInTheDocument();
    });

    it("calls onChange when new option selected", () => {
      const { getByTestId } = render(<Select {...defaultProps} />);
      const optionDataToSelect = defaultProps.options[1];

      fireEvent.change(getByTestId("select"), {
        target: { value: optionDataToSelect.value },
      });

      expect(defaultProps.onChange).toBeCalledWith(optionDataToSelect.value);
    });
  });
});
