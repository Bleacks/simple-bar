export const spaceStyles = /* css */ `
.space,
.stickies {
  position: relative;
  display: flex;
  align-items: center;
  animation: space-appearance 320ms var(--transition-easing);
  margin: -1px;
}

@keyframes space-appearance {
  0% {
    opacity: 0;
  }
}
.space__inner,
.spaces__add,
.stickies__inner {
  height: 100%;
  display: flex;
  align-items: center;
  margin: var(--item-outer-margin);
  padding: var(--item-inner-margin);
  color: currentColor;
  font-family: var(--font);
  background-color: var(--minor);
  border-radius: var(--item-radius);
  border: 0;
  outline: none;
  box-shadow: var(--light-shadow);
  cursor: pointer;
  user-select: none;
  -webkit-user-select: none;
  transition: 
    // color 160ms var(--transition-easing), 
    // background-color 160ms var(--transition-easing),
    border 160ms var(--transition-easing), 
    box-shadow 160ms var(--transition-easing);
  z-index: 0;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}
.stickies__inner {
  background-color: var(--background);
  box-shadow: none;
  cursor: default;
}
.simple-bar--background-color-as-foreground .space__inner,
.simple-bar--background-color-as-foreground .spaces__add,
.simple-bar--background-color-as-foreground .stickies__inner {
  background-color: transparent;
  box-shadow: none;
}
.space:first-of-type .space__inner {
  margin-left: 0;
}
.space:hover .space__inner {
  z-index: 1;
}
.spaces__add {
  height: auto;
  background-color: transparent;
  box-shadow: none;
  margin-left: -2px;
  margin-right: -4px;
}
.spaces__add:hover {
  background-color: var(--minor);
}
.space--fullscreen .space__inner {
  color: var(--minor);
  background-color: var(--yellow);
}
.simple-bar--background-color-as-foreground .space--fullscreen .space__inner {
  color: var(--yellow);
  background-color: transparent;
}
.space--focused .space__inner {
  color: var(--minor);
  background-color: var(--foreground);
}
.simple-bar--background-color-as-foreground .space--focused .space__inner {
  color: var(--foreground);
  background-color: transparent;
}
.space--visible .space__inner {
  box-shadow: var(--light-shadow), 0 0 0 1px var(--foreground);
}
.space:not(.space--focused) .space__inner:hover,
.spaces__add:hover {
  box-shadow: var(--light-shadow), var(--hover-ring);
}
.space:not(.space--focused) .space__inner:active,
.spaces__add:active {
  box-shadow: var(--light-shadow), var(--focus-ring);
}
.space__label {
  display: block;
  margin: 0;
  color: currentColor;
  font-family: inherit;
  font-size: var(--font-size);
  line-height: 1;
  text-align: center;
  background-color: transparent;
  border: 0;
  border-radius: 2px;
  outline: none;
}
.space__label:not(:read-only):focus {
  box-shadow: var(--focus-ring);
}
.space__icon {
  flex: 0 0 13px;
  width: 13px;
  height: 13px;
  margin-left: 6px;
  fill: currentColor;
  opacity: 0.45;
  transform: translateZ(0);
}
.space__label + .space__icon {
  // margin-left: 0;
}
.stickies__inner .space__icon:first-child {
  margin: 0;
}
.space__icon--focused {
  opacity: 1;
  color: #000000;
}
.space__icon--fullscreen {
  fill: var(--yellow);
}
.space--focused .space__icon--fullscreen {
  stroke: rgba(0, 0, 0, 0.3);
  stroke-width: 2px;
}
.space__icon--minimized,
.space__icon--hidden {
  color: var(--minimized);
  opacity: 0.8;
}
.space__icon--stacked {
  border-style: solid;
  border-width: 0px 0px 1px 0px;
  margin-top: 2.5px;
  padding-bottom: 1.5px;
}
.space--focused .space__icon--hidden,
.space--focused .space__icon--minimized {
  color: var(--background);
  opacity: 0.6;
}
.space__icon--cropped {
  visibility: hidden;
  margin-right: -20px;
  transition: margin-right 160ms var(--transition-easing);
}
.space:hover .space__icon--cropped {
  visibility: visible;
  margin-right: 0px;
}
.space__icon:hover {
  opacity: 1;
}
.space--focused .space__icon:hover,
.space--fullscreen .space__icon:hover {
  color: var(--background);
}
.space__icon--unfold {
  margin-left: 4px;
}
.space:hover .space__icon--unfold {
  display:none;
}
`
