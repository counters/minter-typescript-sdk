#!/bin/bash

PROTO_DIR=./src/proto
LIBS_DIR=./lib/proto

rm -r ${LIBS_DIR}

cp  -R ${PROTO_DIR} "${LIBS_DIR}/"
