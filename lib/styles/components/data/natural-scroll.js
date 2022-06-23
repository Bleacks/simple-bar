export const naturalScrollStyles = /* css */ `
.scroll {
  position: relative;
  background-color: var(--white);
  overflow: hidden;
}
.simple-bar--background-color-as-foreground .scroll {
  color: var(--green);
  background-color: transparent;
}
.simple-bar--background-color-as-foreground .scroll--caffeinate {
  color: var(--foreground);
}
.scroll__icon {
  position: relative;
}
.scroll__icon::after {
  content: '';
  position: absolute;
  top: calc(10% + 1px);
  left: calc(100% + 2px);
  width: 2px;
  height: 80%;
  border-radius: 0 2px 2px 0;
  background-color: currentColor;
}
.simple-bar--no-color-in-data .scroll__icon::after {
  background-color: currentColor;
}
.scroll__icon-inner {
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 2px;
  border: 1px solid currentColor;
  overflow: hidden;
  z-index: 2;
}
.simple-bar--no-color-in-data .scroll__icon-inner {
  fill: currentColor;
  border: 1px solid currentColor;
}
.scroll__icon-filler {
  position: absolute;
  top: 1px;
  left: 1px;
  width: calc(100% - 2px);
  height: calc(100% - 2px);
  background-color: currentColor;
  border-radius: 1px;
  transform: scaleX(0);
  transform-origin: left center;
  transition: transform 160ms var(--transition-easing);
  z-index: 0;
}
.simple-bar--no-color-in-data .scroll__icon-filler {
  background-color: currentColor;
  opacity: 0.8;
}
.simple-bar--no-color-in-data .scroll--caffeinate .scroll__icon::after,
.simple-bar--no-color-in-data .scroll--caffeinate .scroll__icon-filler {
  background-color: currentColor;
}
.scroll--critical .scroll__icon-filler {
  background-color: var(--red);
}
.scroll--medium .scroll__icon-filler {
  background-color: var(--orange);
}
.scroll--low .scroll__icon-filler {
  background-color: var(--green);
}
`
