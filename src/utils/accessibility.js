export function createKeyboardActivationHandler(onActivate) {
  return function handleKeyboardActivation(event) {
    if (event.key !== 'Enter' && event.key !== ' ') return;
    event.preventDefault();
    onActivate?.(event);
  };
}
