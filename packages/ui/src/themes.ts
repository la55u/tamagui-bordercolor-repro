import { createTheme } from 'tamagui'

const light = createTheme({
  color: 'black',
  background: 'wheat',
  borderColor: 'gray',
  borderColorHover: 'black',
})

type BaseTheme = typeof light

const dark: BaseTheme = createTheme({
  color: 'white',
  background: 'gray',
  borderColor: 'white',
  borderColorHover: 'white',
})

const primary_Button: BaseTheme = createTheme({
  color: 'white',
  background: 'lightgray',
  borderColor: 'green',
  borderColorHover: 'red',
})

const allThemes = {
  light,
  dark,
  primary_Button,
}

type ThemeName = keyof typeof allThemes

type Themes = {
  [key in ThemeName]: BaseTheme
}

export const themes: Themes = allThemes
