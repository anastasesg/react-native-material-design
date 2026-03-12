import React from 'react';

/**
 * Returns the displayName of a React element's component type, or undefined
 * for host elements (e.g. `<View>`) and components without a displayName.
 */
function getDisplayName(element: React.ReactElement): string | undefined {
  const type = element.type;
  if (typeof type === 'string') return undefined;
  return (type as { displayName?: string }).displayName;
}

/**
 * Creates a type guard that narrows a ReactElement to one whose props include `P`.
 * Uses the component's `displayName` for the check.
 *
 * ```ts
 * const isButtonIcon = childGuard<ButtonIconProps>('ButtonIcon');
 * if (isButtonIcon(child)) {
 *   // child is React.ReactElement<ButtonIconProps>
 * }
 * ```
 */
function childGuard<P>(displayName: string) {
  return (child: React.ReactElement): child is React.ReactElement<P> => getDisplayName(child) === displayName;
}

/**
 * Logs a dev-only warning when an unexpected child is found inside a compound component.
 */
function warnUnexpectedChild(parent: string, child: React.ReactElement, expected: string[]) {
  if (__DEV__) {
    const childName = getDisplayName(child) ?? (typeof child.type === 'string' ? child.type : 'Unknown');
    console.warn(`[${parent}] Unexpected child <${childName}>. Expected one of: ${expected.join(', ')}.`);
  }
}

export { childGuard, getDisplayName, warnUnexpectedChild };
