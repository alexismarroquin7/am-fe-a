const ACTION = {
  MENU: {
    OPEN: "NAV__MENU__OPEN",
    CLOSE: "NAV__MENU__CLOSE"
  }
}

const open = () => {
  return {
    type: ACTION.MENU.OPEN
  }
}
const close = () => {
  return {
    type: ACTION.MENU.CLOSE
  }
}

export const NavAction = {
  ...ACTION,
  menu: {
    open,
    close
  }
}