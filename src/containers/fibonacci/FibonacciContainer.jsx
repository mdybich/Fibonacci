import * as React from "react";
import { connect } from "react-redux";
import { Tile, NumberInput, Button, Checkbox } from "../../components";
import {
  setFibonacciAmount, computeFibonacci,
  switchFibonacciRecursionFlag, switchFibonacciIterativeFlag, switchFibonacciDynamicRecursionFlag
} from "../../actions";

const mapStateToProps = (state) => {
  return {...state.fibonacci};
};

const mapDispatchToProps = (dispatch) => {
  return {
    setAmount: (amount) => {
      dispatch(setFibonacciAmount(amount));
    },
    computeFibonacci: () => {
      dispatch(computeFibonacci())
    },
    switchRecursionFlag: () => {
      dispatch(switchFibonacciRecursionFlag())
    },
    switchIterativeFlag: () => {
      dispatch(switchFibonacciIterativeFlag())
    },
    switchDynamicRecursionFlag: () => {
      dispatch(switchFibonacciDynamicRecursionFlag())
    }
  }
};

const FibonacciContainer = (props) => {
  return (
    <div className="tile-group">
      <Tile
        title="Fibonacci - data"
      >
        <div>
          <Checkbox
            label="Iterative"
            checked={props.isIterativeActive}
            onChange={() => props.switchIterativeFlag()}
          />
        </div>
        <div>
          <Checkbox
            label="Recursive"
            checked={props.isRecursiveActive}
            onChange={() => props.switchRecursionFlag()}
          />
        </div>
        <div>
          <Checkbox
            label="Dynamic Recursive"
            checked={props.isDynamicRecursiveActive}
            onChange={() => props.switchDynamicRecursionFlag()}
          />
        </div>
        <div className="mt10">
          <span className="info-label">Amount: </span>
          <NumberInput
            value={props.amount}
            onChange={(newAmount) => props.setAmount(newAmount)}
          />
        </div>
        <div className="mt10 flex">
          <Button
            onClick={() => props.computeFibonacci()}
            label="Calculate"
            className="mla"
          />
        </div>
      </Tile>
      <Tile
        title="Fibonacci - results"
      >
        <div>
          <span className="info-label">Imperative result:</span>
          {props.iterativeResult} seconds
        </div>
        <div className="mt10">
          <span className="info-label">Recursive result:</span>
          {props.recursiveResult} seconds
        </div>
        <div className="mt10">
          <span className="info-label">Dynamic Recursive result:</span>
          {props.dynamicRecursiveResult} seconds
        </div>
      </Tile>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(FibonacciContainer);