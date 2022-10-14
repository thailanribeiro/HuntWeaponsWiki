import React from "react";
import styled from "styled-components";

const Hunt = styled.table`
  color: red;
  border: 1px solid green;
  text-align: center;
  th {
    background-color: lightgray;
    padding: 0.8vh;
  }
`;

function Table() {
  return (
    <div>
      <Hunt>
        <tr>
          <th>Weapon</th>
          <th>Cost</th>
          <th>Unlock Condition</th>
          <th>Ammunition</th>
          <th>Capacity</th>
          <th>Weapon stats</th>
        </tr>
        <tr>
          <td><td>img</td><td>Bomb Lance</td></td>
          <td>199 $</td>
          <td>Rank 78</td>
          <td>
            <img href="https://static.wikia.nocookie.net/hunthorrorsofthegildedage_gamepedia/images/f/f6/Ammo_special.png/revision/latest/scale-to-width-down/64?cb=20180928110833"></img>
            Special (others)
          </td>
          <td>1/5</td>
          <td>
            <tr>
              <td>Damage</td>
              <td>150</td>
              <td>Effective Range</td>
              <td>25m</td>
            </tr>
            <tr>
            <td>Damage</td>
              <td>150</td>
              <td>Effective Range</td>
              <td>25m</td>
            </tr>
            <tr>
            <td>Damage</td>
              <td>150</td>
              <td>Effective Range</td>
              <td>25m</td>
            </tr>
            <tr>
            <td>Damage</td>
              <td>150</td>
              <td>Effective Range</td>
              <td>25m</td>
            </tr>
          </td>
        </tr>
      </Hunt>
    </div>
  );
}

export default Table;
