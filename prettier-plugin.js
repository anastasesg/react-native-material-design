/**
 * Prettier plugin to format useCallback hooks on a single line
 *
 * This plugin extends the TypeScript printer to handle
 * React.useCallback calls specially, keeping them on one line when possible.
 */

const typescriptParser = require('prettier/parser-typescript');
const estreePlugin = require('prettier/plugins/estree');
const { builders } = require('prettier/doc');

// Get the default estree printer
const defaultEstreePrinter = estreePlugin.printers.estree;

// Helper to check if a node is a useCallback call
function isUseCallbackCall(node) {
  if (!node || node.type !== 'CallExpression') {
    return false;
  }

  const callee = node.callee;
  if (!callee || callee.type !== 'MemberExpression') {
    return false;
  }

  const object = callee.object;
  const property = callee.property;

  // Check for React.useCallback
  if (property && property.name === 'useCallback') {
    if (object && object.type === 'Identifier' && object.name === 'React') {
      return true;
    }
  }

  return false;
}

module.exports = {
  parsers: {
    typescript: {
      ...typescriptParser.parsers.typescript,
    },
    babel: {
      ...require('prettier/parser-babel').parsers.babel,
    },
  },
  printers: {
    estree: {
      ...defaultEstreePrinter,
      print(path, options, print) {
        const node = path.getValue();

        // Handle useCallback calls
        if (isUseCallbackCall(node)) {
          const callback = node.arguments[0];
          const deps = node.arguments[1];

          if (callback && deps) {
            // Get the parent to check context
            const parent = path.getParentNode();
            const isVariableDeclarator = parent && parent.type === 'VariableDeclarator';

            if (isVariableDeclarator) {
              // Print the callee (React.useCallback)
              const calleeDoc = path.call(print, 'callee');

              // Print callback function
              const callbackDoc = path.call(print, 'arguments', 0);

              // Print dependencies array
              const depsDoc = path.call(print, 'arguments', 1);

              // Create a group that prefers to stay on one line
              // Use concat to join the parts, and group to keep them together
              return builders.group(builders.concat([calleeDoc, '(', callbackDoc, ', ', depsDoc, ')']), {
                shouldBreak: false,
              });
            }
          }
        }

        // Fall back to default printer for everything else
        return defaultEstreePrinter.print(path, options, print);
      },
    },
  },
};
