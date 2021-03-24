#!/bin/bash

if [ ! -d "src/assets/themes" ]
then
    mkdir src/assets/themes
fi

cp -r node_modules/primeng/resources/themes/* src/assets/themes
