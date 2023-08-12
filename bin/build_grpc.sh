#!/bin/bash

PROTO_DIR=./src/proto
LIBS_DIR=./src/proto

rm -r "${PROTO_DIR}/*"

# Generate JavaScript code
yarn run grpc_tools_node_protoc \
    --js_out=import_style=commonjs,binary:${PROTO_DIR} \
    --grpc_out=grpc_js:${PROTO_DIR} \
    --plugin=protoc-gen-grpc=./node_modules/.bin/grpc_tools_node_protoc_plugin \
    -I ./proto \
    proto/*.proto

# Generate TypeScript code (d.ts)
yarn run grpc_tools_node_protoc \
    --plugin=protoc-gen-ts=./node_modules/.bin/protoc-gen-ts \
    --ts_out=grpc_js:${PROTO_DIR} \
    -I ./proto \
    proto/*.proto

#mkdir -p ${PROTO_DIR}/web
# Generate TypeScript code (d.ts) grpc-web
#yarn run grpc_tools_node_protoc \
#    --plugin=protoc-gen-ts=./node_modules/.bin/protoc-gen-ts \
#--js_out="import_style=commonjs,binary:${PROTO_DIR}/web" \
#--ts_out="service=grpc-web,mode=grpc-js:${PROTO_DIR}/web" \
#    -I ./proto \
#    proto/*.proto
