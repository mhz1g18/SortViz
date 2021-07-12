import React from "react";
import styled from "styled-components";
import {
  COMPARISON_COLOR,
  SWAP_COLOR,
  SORTED_COLOR,
  PIVOT_COLOR,
} from "../../util/config";
import { useControls } from "../../util/store";

/* COMPARISON_COLOR,
  SWAP_COLOR,
  SORTED_COLOR,
  PIVOT_COLOR, */
import {
  ArrayHolder,
  ArrayItem,
  sourceAnimation,
  destinationAnimation,
} from "../../util/styles";
let swapTime = useControls.getState().swapTime;
useControls.subscribe(
  (time) => (swapTime = time),
  (state) => state.swapTime
);



const Source = styled(ArrayItem)`
  animation: ${(props) => destinationAnimation(props.distance, SWAP_COLOR)}
    ${() => swapTime / 1000}s forwards;
`;

const Destination = styled(ArrayItem)`
  animation: ${(props) => sourceAnimation(props.distance, SWAP_COLOR)}
    ${() => swapTime / 1000}s forwards;
`;

export function ArrayContainer({
  array,
  source,
  destination,
  pivot = -1,
  highlightIndices,
  sortedIndices,
}) {

  function getBackgroundColor(i) {
    if (i === pivot) {
      return PIVOT_COLOR;
    }

    if (highlightIndices.includes(i)) {
      return COMPARISON_COLOR;
    }

    if (sortedIndices.includes(i)) {
      return SORTED_COLOR;
    }
    return "";
  }

  return (
    <ArrayHolder>
      {array.map((value, i) => {
        if (i === source) {
          return (
            <Source
              key={i + ":" + source + ":" + destination + ":" + value}
              distance={destination - source}
              style={{
                order: destination,
                backgroundColor: getBackgroundColor(i),
              }}
            >
              {value}
            </Source>
          );
        }
        if (i === destination) {
          return (
            <Destination
              key={i + ":" + destination + ":" + source + ":" + value}
              distance={destination - source}
              style={{
                order: source,
                backgroundColor: getBackgroundColor(i),
              }}
            >
              {value}
            </Destination>
          );
        }
        return (
          <ArrayItem
            key={i + ":" + destination + ":" + source + ":" + value}
            style={{
              order: i,
              backgroundColor: getBackgroundColor(i),
            }}
          >
            {value}
          </ArrayItem>
        );
      })}
    </ArrayHolder>
  );
}
