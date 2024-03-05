/**
 * takes a string of the form 'color1 and color2' and returs the colors inside an array
 * @param {string} inputStr 
 * @returns {string[]} - the first & second color
 */
export const extractColorsFromString = (inputStr: string): string[] => {
  const [firstColor, secondColor] = inputStr.split('and').map(c => c.trim().toLowerCase())

  return [firstColor, secondColor]
}