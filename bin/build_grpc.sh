#!/bin/bash

PROTO_DIR=./src/generated/proto
#LIBS_DIR=./libs/proto

mkdir -p "${PROTO_DIR}"
rm -r "${PROTO_DIR}/*"

protoc --plugin=protoc-gen-ts_proto=./node_modules/.bin/protoc-gen-ts_proto \
--ts_proto_out=${PROTO_DIR} \
--ts_proto_opt=outputServices=grpc-js,env=node \
 -I=./proto \
 ./proto/*.proto
