#!/bin/bash

if [ ! -d "src/themes" ]
then
    mkdir src/themes
fi

cp -r node_modules/primeng/resources/themes/* src/themes
