export const dndStyles = /* css */ `
.dnd {
  position: relative;
  background-color: var(--white);
  overflow: hidden;
  z-index: 0;
  text-shadow: 0 0 0 var(--white);
  box-shadow: 0 0 0 var(--white);
  border-top-right-radius: 12px;
}
.simple-bar--background-color-as-foreground .dnd {
  color: var(--white);
  background-color: transparent;
}
.dnd--no-label > svg {
  margin-right: 0;
}
`
