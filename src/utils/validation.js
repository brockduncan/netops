export default function validate(input) {
  // validate required
  if (input.required) {
    if (input.value !== '' && input.value !== undefined) {
      return false
    } else {
      return true
    }
    // validate text input
    // validate number
  }
}
