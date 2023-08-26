import { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
    schema: "http://localhost:4000",
    documents: ["src/**/*.ts"],
    generates: {
        "./src/__generated__/": {
            preset: "client",
            presetConfig: {
                gqlTagName: "gql",
            },
        }
    },
    ignoreNoDocuments: true,
}

export default config;