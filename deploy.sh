#!/bin/bash

npm run build

rm -rf ../el-andariego-api/dist
mv dist ../el-andariego-api
