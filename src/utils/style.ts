import { css } from "emotion";
import { IS_TOUCHABLE_DEVICE } from ".";

export const colorDefault = "rgb(255, 255, 255)";
export const colorDefaultAlpha05 = "rgba(255, 255, 255, 0.5)";
export const colorPrimary = "rgb(22, 137, 255)";
export const colorPrimaryAlpha04 = "rgba(22, 137, 255, 0.4)";
export const colorPrimaryAlpha01 = "rgba(22, 137, 255, 0.1)";
export const colorPrimaryLightenAlpha06 = "rgba(122, 189, 255, 0.6)";
export const fontSizeDefault = "14px";

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
    pointer-events: none;
  }

  ${IS_TOUCHABLE_DEVICE ? styleActive : styleHover};
`;

export const styleToolBarText = css`
  height: 100%;
  padding: 0 calc(1% + 5px);
  color: ${colorDefault};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;
