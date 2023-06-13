import React from 'react';
import {Button, ButtonGroup} from "react-bootstrap";
import {ASCENDING_MODE, DEFAULT_MODE, DESCENDING_MODE} from "@utils/constants.js";
import styles from "./SortingPanel.module.scss";

const buttons = [
  {text: 'Ascending', value: ASCENDING_MODE},
  {text: 'Default', value: DEFAULT_MODE},
  {text: 'Descending', value: DESCENDING_MODE},
]

export function SortingPanel({value, setValue}) {
  function handleClick(event) {
    setValue(event.currentTarget.value)
  }

  return (
    <div className={styles.sortingPanel}>
      <ButtonGroup>
        {buttons.map(button => (
          <Button key={button.value}
                  value={button.value}
                  active={value === button.value}
                  onClick={(event) => handleClick(event)}>
            {button.text}
          </Button>
        ))}
      </ButtonGroup>
    </div>
  );
}