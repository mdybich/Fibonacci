import * as React from "react";
import { connect } from "react-redux";
import { Tile, RadioButton, NumberInput } from "../../components";
import { ProgrammingLanguage } from "../../enums";
import { setFibonacciProgrammingLanguage } from "../../actions";

const mapStateToProps = (state) => {
  return {...state.fibonacci};
};

const mapDispatchToProps = (dispatch) => {
  return {
    setProgrammingLanguage: (programmingLanguage) => {
      dispatch(setFibonacciProgrammingLanguage(programmingLanguage))
    }
  }
};

const FibonacciContainer = (props) => {
  return (
    <div className="flex">
      <Tile
        title="Fibonacci - data"
      >
        <div>
          <span className="info-label">Programming Language:</span>
          <RadioButton
            name="test"
            checked={props.selectedProgrammingLanguage === ProgrammingLanguage.JAVASCRIPT}
            label="JavaScript"
            onChange={() => props.setProgrammingLanguage(ProgrammingLanguage.JAVASCRIPT)}
            className="mr10"
          />
          <RadioButton
            name="test"
            checked={props.selectedProgrammingLanguage === ProgrammingLanguage.CSHARP}
            label="C#"
            onChange={() => props.setProgrammingLanguage(ProgrammingLanguage.CSHARP)}
          />
        </div>
        <div>
          <span className="info-label">Amount: </span>
          <NumberInput
            value={12}
          />
        </div>
      </Tile>
      <Tile
        title="Fibonacci - results"
      >
        <div>{props.selectedProgrammingLanguage}</div>
      </Tile>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(FibonacciContainer);