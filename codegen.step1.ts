import type { CodegenConfig } from '@graphql-codegen/cli'

const gqlEndpoint = 'https://nameless-brook-570006.eu-central-1.aws.cloud.dgraph.io/graphql'
const GQL_ROOT_PATH = "./src/graphql";
const SCHEMA_PATH = `${GQL_ROOT_PATH}/schema/remote/dgraph.schema.graphql`;
const GENERATED_SERVICES_PATH = `${GQL_ROOT_PATH}/generated/graphql.ts`

const config: CodegenConfig = {
  generates: {
    // This property
    [SCHEMA_PATH]: {
      schema: gqlEndpoint,
      config: {
        commentDescriptions: true,
        mergeDirectives: true
      },
      plugins: ['schema-ast']
    },

  }
}
export default config


