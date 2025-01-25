import placeholderTextOptions from "../../service/placeholder-text-option"

export function getRandomPlaceholderText() {
  const optionCount = placeholderTextOptions.length
  const randomIndex = Math.floor(Math.random() * optionCount)

  return placeholderTextOptions[randomIndex]
}
