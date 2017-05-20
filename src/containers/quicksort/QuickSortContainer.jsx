import * as React from "react";
import { connect } from "react-redux";
import { Tile, NumberInput, Button, Checkbox } from "../../components";
import {
  setQuickSortAmount, computeQuickSort, switchQuickSortIterativeFlag,
  switchQuickSortRecursionFlag, switchQuickSortNativeFlag
} from "../../actions";

const mapStateToProps = (state) => {
  return {...state.quickSort};
};

const mapDispatchToProps = (dispatch) => {
  return {
    setAmount: (amount) => {
      dispatch(setQuickSortAmount(amount));
    },
    computeQuickSort: () => {
      dispatch(computeQuickSort())
    },
    switchRecursionFlag: () => {
      dispatch(switchQuickSortRecursionFlag())
    },
    switchIterativeFlag: () => {
      dispatch(switchQuickSortIterativeFlag())
    },
    switchNativeFlag: () => {
      dispatch(switchQuickSortNativeFlag())
    }
  }
};

const QuickSortContainer = (props) => {
  return (
    <div className="flex mt10">
      <Tile
        title="QuickSort - data"
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
            label="Native"
            checked={props.isNativeActive}
            onChange={() => props.switchNativeFlag()}
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
            onClick={() => props.computeQuickSort()}
            label="Calculate"
            className="mla"
          />
        </div>
      </Tile>
      <Tile
        title="QuickSort - results"
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
          <span className="info-label">Native result:</span>
          {props.nativeResult} seconds
        </div>
      </Tile>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(QuickSortContainer);