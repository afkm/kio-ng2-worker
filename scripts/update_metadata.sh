#!/usr/bin/env bash

SCRIPT_PATH="$(cd "$(dirname "${0}")"; pwd)"
SCRIPT_FILE="$(basename "${0}")"
_ROOT="$(cd "$(dirname "${0}")/.."; pwd)"


function package_version () {
  node -p 'require("./package.json").version'
}


function render_metadata () {

  printf '{\n\t"version": "%s"\n}' "$(package_version)"

}


render_metadata > "${_ROOT}/src/metadata.json"
