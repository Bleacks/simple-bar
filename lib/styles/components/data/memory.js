export const memoryStyles = /* css */ `
.memory {
  position: relative;
  background-color: var(--green);
  overflow: hidden;
}
.simple-bar--background-color-as-foreground .memory {
  color: var(--green);
  background-color: transparent;
}
.simple-bar--background-color-as-foreground .memory--caffeinate {
  color: var(--foreground);
}
.memory__icon {
  position: relative;
  width: 16px;
  height: 9px;
  margin-top: -2px;
  margin-right: 10px;
}
.memory__icon::after {
  content: '';
  position: absolute;
  top: calc(10% + 1px);
  left: calc(100% + 2px);
  width: 2px;
  height: 80%;
  border-radius: 0 2px 2px 0;
  background-color: currentColor;
}
.simple-bar--no-color-in-data .memory__icon::after {
  background-color: currentColor;
}
.memory__icon-inner {
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 2px;
  border: 1px solid currentColor;
  overflow: hidden;
  z-index: 2;
}
.simple-bar--no-color-in-data .memory__icon-inner {
  fill: currentColor;
  border: 1px solid currentColor;
}
.memory__icon-filler {
  position: absolute;
  top: 1px;
  left: 1px;
  width: calc(100% - 2px);
  height: calc(100% - 2px);
  // background-color: currentColor;
  border-radius: 1px;
  transform: scaleX(0);
  transform-origin: left center;
  transition: transform 160ms var(--transition-easing);
  z-index: 0;
}
.simple-bar--no-color-in-data .memory__icon-filler {
  background-color: currentColor;
  opacity: 0.8;
}
.simple-bar--no-color-in-data .memory--caffeinate .memory__icon::after,
.simple-bar--no-color-in-data .memory--caffeinate .memory__icon-filler {
  background-color: currentColor;
}
.memory--critical {
  background-color: var(--red);
}
.memory--medium {
  background-color: var(--orange);
}
.memory--low {
  background-color: var(--green);
}
`
