import { createDefaultPreset } from 'ts-jest'

const tsJestTransformCfg = createDefaultPreset({
    tsconfig: {
        module: 'module',
        verbatimModuleSyntax: false,
    },
}).transform

/** @type {import("jest").Config} **/
export default {
    testEnvironment: 'node',
    verbose: true,
    transform: {
        ...tsJestTransformCfg,
    },
}
