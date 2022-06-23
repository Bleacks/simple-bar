export const dndStyles = /* css */ `
.dnd {
  position: relative;
  background-color: var(--white);
  overflow: hidden;
  z-index: 0;
  margin-left: -2px;
  text-shadow: 0 0 0 var(--white);
  box-shadow: 0 0 0 var(--white);
}
.simple-bar--background-color-as-foreground .dnd {
  color: var(--white);
  background-color: transparent;
}
.dnd--no-label > svg {
  margin-right: 0;
}
`
