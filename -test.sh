#!/bin/bash

read -p "Enter File name for tests: " FILE
while : ; do
  clear
  ./node_modules/.bin/mocha "test/${FILE}*"
  printf "[ q:exit | *:continue tests ($FILE) ]"
  read -n1 -s
  case "$REPLY" in
    "q") clear; break  ;; 
  esac
done