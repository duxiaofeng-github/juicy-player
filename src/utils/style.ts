import { css } from "emotion";
import { IS_TOUCHABLE_DEVICE } from ".";

export const colorDefault = "#fff";
export const colorPrimary = "#00d7c6";

const styleActive = css`
  &:active {
    color: ${colorPrimary};

    svg {
      fill: ${colorPrimary};
    }
  }
`;

const styleHover = css`
  &:hover {
    color: ${colorPrimary};

    svg {
      fill: ${colorPrimary};
    }
  }
`;

export const styleToolbarButtonIcon = css`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  cursor: pointer;

  svg {
    position: absolute;
    fill: ${colorDefault};
    transition: fill 0.5s;
    left: 50%;
    top: 50%;
    width: 50%;
    height: 50%;
    transform: translateX(-50%) translateY(-50%);
  }

  ${IS_TOUCHABLE_DEVICE ? styleActive : styleHover};
`;
