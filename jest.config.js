import { createDefaultEsmPreset } from 'ts-jest'

const tsJestTransformCfg = createDefaultEsmPreset({
    tsconfig: {
        module: 'nodenext',
        moduleResolution: 'nodenext',
        esModuleInterop: true,
        verbatimModuleSyntax: false,
    },
}).transform

/** @type {import("jest").Config} **/
export default {
    testEnvironment: 'node',
    verbose: true,
    extensionsToTreatAsEsm: ['.ts'],
    transform: {
        ...tsJestTransformCfg,
    },
}
