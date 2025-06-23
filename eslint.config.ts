// @ts-check
import tseslint from "typescript-eslint";
import eslintReact from "@eslint-react/eslint-plugin";
import prettierPlugin from "eslint-plugin-prettier";

export default [
	{
		languageOptions: {
			parser: tseslint.parser,
			parserOptions: {
				projectService: true,
				tsconfigRootDir: import.meta.dirname
			}
		},
		plugins: {
			"@typescript-eslint": tseslint.plugin,
			"react": eslintReact.configs["recommended-typescript"],
			"prettier": prettierPlugin
		},
		rules: {
			"semi": ["error", "always"],
			"quotes": ["error", "double"],
			"no-console": "warn",
			"react/prop-types": "off",
			"@typescript-eslint/explicit-module-boundary-types": "off",
			"prettier/prettier": "error",
			"@typescript-eslint/no-explicit-any": "off",
			"react-hooks/exhaustive-deps": "off"
		}
	}
];
